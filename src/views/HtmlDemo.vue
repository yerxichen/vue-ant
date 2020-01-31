<template>
  <div>
    <div v-html="htmlData" id="editor"></div>
    <a href="https://www.kancloud.cn/yunye/axios/234845">点击跳转</a>
  </div>

</template>

<script>
  export default {
    name: 'HtmlDemo',
    data () {
      return {
        htmlData: ''
      }
    },
    mounted () {
      // let _self = this
      // this.$axios.get('/',{
      //   baseURL:'http://www.baidu.com'
      // })
      //   .then(function (response) {
      //     _self.htmlData=response;
      //   })
      //   .catch(function (error) {
      //     alert(error);
      //   });
      let params = new URLSearchParams();
      params.append('q', 'r5');
      this.$axios({
        method: 'get',
        url: '',
        baseURL:'/api',
        data: params
      }).then(function (response) {
        alert(response);
      }).catch(function (error) {
        alert(error);
      });
    }
  }
</script>

<style scoped>

</style>
