<template>
  <div class="page">
    <detail :info="descinfo"></detail>
  </div>
</template>
<script>
import axios from "axios";
import detail from "../common/detail"
export default {
  data(){
    return {
      descinfo:{}
    }
  },
  components:{
    detail
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/goods/getdesc/" + this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.descinfo=res.data.message[0];
      }
    })
  }
}
</script>
<style>

</style>
