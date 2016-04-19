<template>
  <div class="create">
    <h1>{{ i18n.create_a_vote }}</h1>

    <div class="item">
      <span>{{ i18n.topic }}</span>
      <input type="text"/>
    </div>
    <div class="item">
      <span>{{ i18n.topic }}</span>
      <input type="text"/>
    </div>

    <ul id="rs-details">
      <li v-for="item in optionLists">
        <input value="{{ item.option }}"/>
        <i class="delOption">-</i>
      </li>
    </ul>

    <div><i class="addOption">+</i></div>
    <div class="submitVote" v-link="{name:'share'}">{{ i18n.create }}</div>

  </div>
</template>

<script>
export default {

  data: function () {
    return {
      i18n: {
        "create_a_vote": "创建投票",
        "topic": "标题",
        "desc": "描述（可选）",
        "option": "选项",
        "confirm": "确定",
        "create": "创建"
      },
      optionLists:[
        {
          "id":0,
          "option":"是"
        },
        {
          "id":1,
          "option":"否"
        }
      ]
    }
  },
  methods: {
    formatCheck: function () {
      console.log(this.code)
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
