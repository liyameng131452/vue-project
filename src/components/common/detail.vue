<template>
  <div class="detail">
     <div class="title">
        <h4>{{info.title}}</h4>
        <p>
          <span>发表时间: {{info.add_time | dataformate("YYYY-MM-DD HH:mm:ss") }}</span>
          <span class="mui-pull-right">点击： {{info.click}}次</span>
        </p>
      </div>
      <hr>
      <slot name="pics"></slot>
      <div class="content" v-html="info.content"></div>
  </div>
</template>
<script>
import dataformate from "../../filter/datafilter"
export default {
 props:['info'],
 filters:{
   dataformate
 }
}
</script>
<style>
.content img{
  width:100%;
}
</style>
