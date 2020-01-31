<template>
    <div>
      <van-panel :title="index+1+'.女子从武汉回河南至今无症状 5名亲人患新型肺炎'"  v-for="(item,index) in items" v-bind:key="index">
        <div style="margin: 20px" >截至1月27日24时，安阳市确诊新型冠状病毒肺炎病例11例，通过对官方通报梳理，猛犸新闻·东方今报记者发现，确诊病例中5人系亲戚关系，均无武汉旅行及居住史，其中3人与从武汉居住回来的女子有接触史，3人分别是该女子的父亲和2个姑姑，而该女子至今无症状。</div>
        <div slot="footer" style="text-align: right">
          <van-button size="small" type="danger">评论</van-button>
        </div>
      </van-panel>
    </div>
</template>

<script>
  export default {
    name: 'ListDemo',
    data(){
      return{
        items:10
      }
    }
  }
</script>

<style scoped>

</style>
