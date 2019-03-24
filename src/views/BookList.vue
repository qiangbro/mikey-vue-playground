<template>
  <div>

    <el-form inline>

      <el-form-item>
        <el-select placeholder="GENRE" v-model="search_keys.genre" clearable filterable multiple>
          <el-option v-for="g in genres" :key="g" :value="g">{{g}}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="TITLE" v-model="search_keys.title" style="width: 300px" clearable/>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="AUTHOR" v-model="search_keys.author" clearable/>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="YEAR" v-model="search_keys.year" clearable/>
      </el-form-item>

      <el-button type="primary" @click="exec_search({search_keys, pageNum:1})">search</el-button>

    </el-form>

    <el-pagination
        :current-page="search_result.pageNum"
        :total="search_result.total"
        :page-count="search_result.pageCount"
        :page-size="search_result.pageSize"
        :page-sizes="[15, 100, 200, 300, 400]"
        @current-change="exec_search({pageNum:$event})"
        @size-change="exec_search({pageNum:1,pageSize:$event})"
        layout="total, sizes, prev, pager, next, jumper"
    />

    <el-table :data="search_result.list">
      <el-table-column prop="genre"  label="GENRE" />
      <el-table-column prop="title"  label="TITLE" />
      <el-table-column prop="author" label="AUTHOR" />
      <el-table-column prop="year"   label="YEAR" />
      <el-table-column label="OPERATIONS">
        <template v-slot:default="{row,column,$index,store}">
          {{$index}}
          <el-button >star</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

  import PageUtils from '@/utils/page-utils.js'

  export default {
    data() {
      return {
        DEFAULT_PAGE_SIZE: 15,
        search_keys: {
          title: null,
          author: null,
          genre: [],
          year: null,
        },
        search_keys_snap: null,
        query_snap: null,
        search_result: { pageNum:1, pageSize:null, list: [] },
        genres:[],
      };
    },

    mounted() {

      this.axios.get('~/guestbook/genres').then(({data}) => this.genres = data);

      console.log('booklist - mounted - parse_and_search!');

      this.parse_and_search(this.$route.query);

    },

    beforeRouteEnter (to, from, next) {
      console.log('booklist - beforeRouteEnter');
      next(vm => {
        console.log('booklist - beforeRouteEnter - next');
      });
    },

    beforeRouteUpdate (to, from, next) {

      // just use `this`
      console.log('booklist - beforeRouteUpdate');

      if (JSON.stringify(to.query) !== this.query_snap) {
        console.log('booklist - beforeRouteUpdate - parse_and_search!');
        this.query_snap = null;
        this.parse_and_search(to.query);
      }

      next();
    },

    methods: {

      log() {
        console.log('logging', ...arguments);
      },

      parse_and_search(query) {
        let parsed = this.parse_query_object(query);

        this.search_keys = parsed.search_keys;
        this.search_result.pageNum = parsed.pageNum;
        this.search_result.pageSize = parsed.pageSize;

        this.exec_search({search_keys:this.search_keys, pageNum: this.search_result.pageNum})
      },

      exec_search({
        search_keys = JSON.parse(this.search_keys_snap),
        pageNum = 1,
        pageSize = this.search_result.pageSize,
      }) {

        let search_keys_snap = JSON.stringify(search_keys);

        let query = this.generate_query_object({search_keys, pageNum, pageSize});
        let original_query_snap = this.query_snap;
        this.query_snap = JSON.stringify(query);

        if (original_query_snap && this.query_snap !== original_query_snap ) {
          this.$router.push({name:this.$route.name, query});
        }

        let params = {
          title:  search_keys.title  || undefined,
          author: search_keys.author || undefined,
          genre:  search_keys.genre,
          year:   search_keys.year   || undefined,
        };

        this.axios.get('~/guestbook/books', {params: {...params, pageNum,pageSize}}).then(resp=>{
          this.search_keys_snap = search_keys_snap;
          this.search_keys = JSON.parse(search_keys_snap);
          this.search_result = resp.data;
        });
      },

      parse_query_object(query) {

        let {pageNum,pageSize} = PageUtils.parse_page_param({p: query.p, default_page_size: this.DEFAULT_PAGE_SIZE});

        return {
          search_keys: {
            title:   query.title  || null,
            author:  query.author || null,
            genre:   query.genre && query.genre.split(',') || [],
            year:    query.year   || null,
          },
          sort_keys: null,
          pageNum,
          pageSize,
        };
      },

      generate_query_object({ search_keys, sort_keys=null, pageNum=1, pageSize}) {

        return {
          genre:  search_keys.genre.join(',') || undefined,
          title:  search_keys.title  || undefined,
          author: search_keys.author || undefined,
          year:   search_keys.year   || undefined,
          sort:   undefined,
          p:      PageUtils.generate_page_param({pageNum, pageSize, default_page_size: this.DEFAULT_PAGE_SIZE}),
        };
      }
    },



  }
</script>

<style scoped>

</style>