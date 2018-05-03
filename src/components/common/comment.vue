<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
    <mt-button  size="large" type="primary" @click="pubCommet">发表评论</mt-button>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(v,i) in commentlist" :key="i">
        <a href="javascript:;">
          <p>
            <span>第{{i+1}}楼</span>
            <span>发表时间：{{v.add_time | dataformate("YYYY-MM-DD HH:mm:ss") }}</span>
          </p>
          <div class="mui-media-body">
            <p class="mui-ellipsis">
              <span>{{v.content}}</span>
              <span class="mui-pull-right">{{v.user_name}}</span>
            </p>
            <img class="mui-media-object mui-pull-right" src="../../assets/images/menu1.png">
          </div>
        </a>
      </li>
		</ul>
     <mt-button class="btnMore" size="large" type="danger" plain @click="more" v-show="showMore">加载更多...</mt-button>
  </div>
</template>
<script>
import axios from "axios";
import dataformate from "@/filter/datafilter";
import {Toast} from "mint-ui";
export default {
  data(){
    return {
     commentlist:[],
     pageindex:1,
    showMore:true,
    content:''
    }
  },
   props:["id"],
   created(){
     this.getData();
   },
   filters:{
     dataformate
   },
  methods:{
    more(){
      this.pageindex++;
      this.getData();
    },
    pubCommet(){
      if(this.content.trim()){
          axios({
          url:"http://www.escook.cn:3000/api/postcomment/"+this.id,
          method:'Post',
          data:"content="+this.content
        }).then(res=>{
          console.log(res.data);
          if(res.data.status==0){
            this.commentlist.unshift({
              add_time:new Date(),
              content:this.content,
              user_name:'匿名用户'
            });
            this.content="";
          }
        })
      }
      
    },
    getData(){
      axios({
        url:"http://www.escook.cn:3000/api/getcomments/"+this.id+"?pageindex="+this.pageindex
      }).then(res=>{
        console.log(res.data);
        if(res.data.status==0){
           this.commentlist.push(...res.data.message);
           if(res.data.message.length==0){
             this.showMore=false;
             Toast('没有更多信息了')
           }
        }
       
      })
    }
  }
}
</script>

<style scoped>
  textarea{
    margin-top:10px;
  }
  .btnMore{
    margin-bottom:10px;
  }
</style>
