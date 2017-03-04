<template>
  <div>
    <div class="layout-padding ">
      <div class="flex wrap gutter">
        <div class="auto">
          <cardTotal
            title="Total Posts"
            background-color="bg-teal-8"
            :total="totalPosts">
          </cardTotal>
        </div>
        <div class="auto">
          <cardTotal
            title="Total comments"
            background-color="bg-teal-8"
            :total="totalComments">
          </cardTotal>
        </div>
        <div class="auto">
          <cardTotal
            title="Static total"
            background-color="bg-teal-8"
            :total="50004">
          </cardTotal>
        </div>
      </div>
      <div class="flex wrap gutter">
        <div class="width-1of2">
          <card-graph-bar
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
  import cardGraphBar from './cardGraph/cardGraph.vue'
  import cardTotal from './cardTotal.vue'
  export default {
    name: 'Home',
    mounted () {
      this.getPosts()
      this.getComments()
      this.getTodos()
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
      getPosts () {
        this.$http
          .get('posts')
          .then(response => { this.totalPosts = response.data.length })
      },
      getComments () {
        this.$http
          .get('comments')
          .then(response => { this.totalComments = response.data.length })
      },
      getTodos () {
        this.$http
          .get('todos')
          .then(response => { this.totalTodos = response.data.length })
      }
    }
  }
</script>
<style>

</style>
