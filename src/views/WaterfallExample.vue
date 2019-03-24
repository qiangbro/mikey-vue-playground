<template>
  <div>
    <vueWaterfallEasy :imgs-arr="imgsArr" @scrollReachBottom="fetchImgsData">

      <template slot="waterfall-head">
        <el-button @click="fetchImgsData">fetch</el-button>
      </template>
      <template slot-scope="props">
        <div class="player_info">
          <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>
          <div class="ticket">
            <el-button @click="upLoadTicket(props.value.id)" size="small"><i class="tt tt-quanburen"></i>投票</el-button>
          </div>
          <p class="num">{{props.index+1}}票</p>
        </div>
      </template>
    </vueWaterfallEasy>
  </div>
</template>

<script>

  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    components:{vueWaterfallEasy},
    data() {
      return {
        items: [
          {id: 1, src: './static/images_test/vue2_6-Macross.jpg', info:'欢迎使用Vue.js 2.6'},
          {id: 2, src: './static/images_test/spy.jpg', info:'暗中观察'},
          {id: 3, src: './static/images_test/teenage-mutant-ninja-turtles-michelangelo-wallpapers-5672674.jpg', info:'Michelangelo is a party dude.'},
          {id: 4, src: './static/images_test/tmnt-brothers.jpg', info:'We are Teenage Mutant Ninja Turtles!'},
          {id: 5, src: './static/images_test/v_michael_jetski_2880x1800.jpg', info:'I have got out of this game for a lot of years.'},
          {id: 6, src: './static/images_test/wo-kan-hao-ni-yo.jpg', info:'我看好你哟'},
          {id: 7, src: './static/images_test/ming-tian-shang-xian.jpg', info:'这个需求很简单，怎么实现我不管。哪种语言你随便，不服可以找老板。横批：明天上线。'},
          {id: 7, src: './static/images_test/RAPH_FINAL.jpg', info:'We are Teenage Mutant Ninja Brothers!'},

        ],

        imgsArr: [],
        fetchImgsArr: []
      };
    },
    methods: {
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push(this.items[i]);
        }
        return arr
      },

      fetchImgsData() {
        console.log('fetching...')
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      },

      upLoadTicket(index){ //投票按钮
        console.log(index);
      }
    },
    created() {
      this.imgsArr = this.initImgsArr(0,8)
      this.fetchImgsArr = this.initImgsArr(0, 8) // 模拟每次请求的新的图片的数据数据
    },
  }

</script>

<style scoped>

</style>