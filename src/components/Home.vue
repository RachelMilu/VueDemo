<template>
  <div class="home">

    <div v-if="code" id="inputCode">
      <h1>{{ title }}</h1>
      <input palceholder="请输入你的邀请码" v-model="code" v-on:keyup.enter="formatCheck"/>
      <button v-on:click="reverseMessage">提交</button>
    </div>

    <div v-else="code" id="vote">
          <div class="topic">{{ topic }}</div>
          <div class="question">{{ question }}</div>
          <ul id="options">
            <li v-for="item in voteList">
              <label>
                <input type="radio" />
                    <span>{{ item.option }}</span>
              </label>
            </li>
          </ul>
     </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      message: 'Hello Vue.js!',
      code:this.checkcode(),
      voteList: []
    }
  },

  asyncData: function (resolve, reject){
    var xmlhttp;
    var voteList = null;
    if (window.XMLHttpRequest){
      xmlhttp=new XMLHttpRequest();
    }else{
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200){

        var resp = JSON.parse(xmlhttp.responseText);
        console.log('resp',resp)
        if(resp.status.code === 0){
          resolve({
            voteList: resp.result.options
          })
        }else{
          alert(resp.status.reason);
        }
      }
    }
    xmlhttp.open("GET","static/mock/getVote.json",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();

  },

  methods: {
    reverseMessage: function () {
      console.log('value',this.code)
    },

    formatCheck: function () {
      console.log(this.code)
    },

    checkcode: function(){
        function getSearch() {
            var search = {};
            location.search.slice(1).split('&').forEach(function (str) {
                //format cookie
                var arr = str.split('=');
                search[arr[0].trim()] = decodeURIComponent(arr[1]);
            });
            return search;
        }
        var Search = getSearch();
      if(Search.code){
        return Search.code;
      }else{
        return ""
      }
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
