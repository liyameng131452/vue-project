<template>
  <div class="page">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in lunbo" :key="i">
              <img :src="v.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
		</div>
     <div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
         <div class="price">
            <span>市场价：
                <del>￥{{info.market_price}}</del>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>销售价：
                <span class="sale_price">￥{{info.sell_price}}</span>
            </span>
          </div>
          <div class="count">
            <span>购买数量：</span>
            <numbox :min="0" :max="info.stock_quantity" :step="1" v-model="count"></numbox>
          </div>
            <div class="btns">
              <mt-button type="primary">立即购买</mt-button>
              <mt-button type="danger" @click="addTocart">加入购物车</mt-button>
            </div>
        </div>
      </div>
		</div>
     <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
           <p>商品货号：{{info.goods_no}}</p>
            <p>库存情况：{{info.stock_quantity}}件</p>
            <p>上架时间：{{info.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</p>
        </div>
      </div>
			<div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="$router.push('/goods/desc/'+info.id)">商品描述</mt-button>
        <br>
        <mt-button type="danger" size="large" plain @click="$router.push('/goods/comment/'+info.id)">商品评论</mt-button>
      </div>
		</div>
  </div>
</template>
<script>
import axios from "axios";
import dateformat from "../../filter/datafilter";
import numbox from "../common/numbox"
export default {
  data(){
    return {
      lunbo:[],
      info:{},
      count:0
    }
  },
  filters:{
    dateformat
  },
  components:{
    numbox
  },
  methods:{
    addTocart(){
      this.$store.commit("addcarts",{
        id:this.$route.params.id,
        count:this.count
      })
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id
    }).then(res=>{
      // console.log(res.data);
      if(res.data.status==0){
        this.lunbo=res.data.message;
      }
    });

    axios({
      url:'http://www.escook.cn:3000/api/goods/getinfo/'+this.$route.params.id
    }).then(res=>{
      console.log(res.data);
      if(res.data.status==0){
        this.info=res.data.message[0];
      }
    })

  }
}
</script>

<style scoped>
.mint-swipe {
  height: 180px;
}
.mint-swipe img{
  height:100%;
  display:block;
  margin:0 auto;
}
.mui-card-content-inner > div {
  margin: 10px 0;
}

.sale_price {
  color: red;
  font-size: 18px;
}

.mui-card-footer {
  display: block;
}
</style>
