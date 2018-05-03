<template>
  <div class="page">
    <!-- 图文列表 -->
    <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="(v,i) in newslist" :key="i">
					<router-link class="mui-navigate-right" :to="'/news/detail/'+v.id">
						<img class="mui-media-object mui-pull-left" :src="v.img_url">
						<div class="mui-media-body mui-ellipsis">
							{{v.title}}
							<p class="mui-ellipsis">
								{{v.zhaiyao}}
							</p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return {
      newslist:[]
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getnewslist'
    }).then(res=>{
      console.log(res.data);
      if(res.data.status==0){
        this.newslist=res.data.message
      }
    })
  }
}
</script>

<style>

</style>
