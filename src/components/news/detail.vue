<template>
  <div class="page newspage">
    <div class="news-detail">
      <div class="news-title">
        <h4>{{newsinfo.title}}</h4>
        <p>
          <span>发表时间: {{newsinfo.add_time | dataformate("YYYY-MM-DD HH:mm:ss") }}</span>
          <span class="mui-pull-right">点击： {{newsinfo.click}}次</span>
        </p>
      </div>
      <hr>
      <div class="news-content" v-html="newsinfo.content"></div>
    </div>
    <div class="news-comments">
      <comment :id="$route.params.id"></comment>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import dataformate from "@/filter/datafilter"
  import comment from "../common/comment"
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
    comment
  }
}
</script>

<style>
  .newspage{
    padding-left:5px;
    padding-right:5px;
  }
</style>
