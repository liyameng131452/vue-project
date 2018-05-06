<template>
  <div class="page newspage">
    <div class="news-detail">
     <detail :info="newsinfo"></detail>
    </div>
    <div class="news-comments">
      <comment :id="$route.params.id"></comment>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import dataformate from "@/filter/datafilter"
  import comment from "../common/comment";
  import detail from "../common/detail"
export default {
  data(){
    return {
      newsinfo:{}
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getnew/" + this.$route.params.id
    }).then(res=>{
      console.log(res.data);
      if(status==0){
        this.newsinfo=res.data.message[0]
      }
    })
  },
  filters:{
    dataformate
  },
  components:{
    comment,
    detail
  }
}
</script>

<style>
  .newspage{
    padding-left:5px;
    padding-right:5px;
  }
</style>
