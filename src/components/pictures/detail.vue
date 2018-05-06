<template>
  <div class="page">
    <detail :info="picdetail">
      <div slot="pics">
        <vue-preview :slides="smallpic"></vue-preview>
      </div>
    </detail>
    <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import detail from "../common/detail";
import axios from "axios";
import comment from "../common/comment"
export default {
  data(){
    return {
      picdetail:{},
      smallpic:[]
    }
  },
  created(){
    //关于缩略图的情感求
    axios({
        url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id
    }).then(res=>{
      console.log(res.data);
      if(res.data.status==0){
        res.data.message.forEach(v=>{
            v.msrc = v.src;
            v.alt = "pic";
            v.title = "缩略图";
            v.w = 600;
            v.h = 400;
        });
        this.smallpic=res.data.message
      }

    }),
    axios({
      url:"http://www.escook.cn:3000/api/getimageInfo/" + this.$route.params.id
    }).then(res=>{
      // console.log(res.data);
      if(res.data.status==0){
        this.picdetail=res.data.message[0];
      }
    })
  },
  components:{
    detail,
    comment
  }
}
</script>

<style>
.my-gallery img{
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}
  
figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>
