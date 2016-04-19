<template>
  <div class="share">
    <h1>{{ i18n.congratulation }}</h1>

    <div></div>
    <div>{{ i18n.copyLink }}</div>
    <a href="{{ resp.link }}">{{ resp.link }}</a>


  </div>
</template>

<script>
  import Store from '../vuex/store'

  export default {

    data: function () {
      return {
        i18n: {
          "topic": "标题",
          "desc": "描述（可选）",
          "option": "选项",
          "copyLink": "复制链接or直接分享给盆友们吧~",
          "congratulation": "恭喜你创建成功！",
          "code": "邀请码"
        },
        resp: {
          "qrCodeUrl": "http://localhost:8080/static/img/qrcode.png",
          "link": this.getLink()
        }
      }
    },
    methods: {
      formatCheck: function () {
        console.log(this.code)
      },
      getLink: function () {
        return Store.state.url
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
