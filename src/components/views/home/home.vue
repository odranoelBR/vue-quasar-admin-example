<template>
  <div>
    <div class="layout-padding ">
      <div class="flex wrap gutter">
        <div class="width-1of3 sm-auto">
          <cardTotal
            title="Total Posts"
            background-color="bg-teal-9"
            icon-name="local_post_office"
            :total="totalPosts">
          </cardTotal>
        </div>
        <div class="width-1of3 sm-auto">
          <cardTotal
            title="Total comments"
            background-color="bg-teal-7"
            icon-name="comment"
            :total="totalComments">
          </cardTotal>
        </div>
        <div class="width-1of3 sm-auto">
          <cardTotal
            title="Static total"
            background-color="bg-teal-5"
            icon-name="repeat_one"
            :total="50004">
          </cardTotal>
        </div>
      </div>
      <div class="flex wrap gutter">
        <div class="width-1of2 sm-width-1of1">
          <card-graph-bar
            card-title="Total Graph"
            :data.once="dataForGraph"
          ></card-graph-bar>
        </div>
        <div class="auto">
        </div>
      </div>
      <div class="flex wrap gutter">
        <div class="width-4of5 sm-auto">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import cardGraphBar from './cardGraph.vue'
  import cardTotal from './cardTotal.vue'
  export default {
    name: 'Home',
    mounted () {
      this.simpleGetCounter('posts', 'totalPosts')
      this.simpleGetCounter('comments', 'totalComments')
      this.simpleGetCounter('todos', 'totalTodos')
    },
    data () {
      return {
        totalPosts: 0,
        totalComments: 0,
        totalTodos: 0
      }
    },
    computed: {
      dataForGraph () {
        return {
          posts: this.totalPosts,
          todos: this.totalTodos,
          comments: this.totalComments
        }
      }
    },
    components: {
      cardTotal,
      cardGraphBar
    },
    methods: {
      simpleGetCounter (url, property) {
        this.$http
          .get(url)
          .then(response => { this[property] = response.data.length })
      }
    }
  }
</script>
<style>

</style>
