<template>
  <div class="result">
{{ vote.topic }}
    <div class="chart-container">

    </div>

    <ul id="rs-details">
      <li v-for="item in list">
        <i class="color {{'color'+list.id%20}}"></i>
        <span class="option">{{ item.option }}</span>
        <span>{{ (100*item.count/vote.total).toFixed(2) }}</span>
        <span>%</span>
      </li>
    </ul>

    <div class="create-vote" v-link="{name:'create'}">
      <div>我也要</div>
      <div class="bigger">创建一个投票</div>
    </div>

  </div>
</template>

<script>
export default {

  data: function () {
    return {
      list: [],
      vote:{}
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
            vote: resp.result,
            list: resp.result.options
          })
        }else{
          alert(resp.status.reason);
        }
      }
    }
    xmlhttp.open("GET","static/mock/getResult.json",true);
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
