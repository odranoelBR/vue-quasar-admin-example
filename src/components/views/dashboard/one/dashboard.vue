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
          <card-chart
            card-title="Total Graph"
            :data="dataForGraph"
          ></card-chart>
        </div>
        <div class="auto">
          <div class="width-1of2 sm-width-1of1">
            <knob-statistics
              card-title="General statistics">
            </knob-statistics>
          </div>
        </div>
      </div>
      <div class="flex wrap gutter">
        <div class="width-4of5 sm-width-1of1">
          <card-todo
            card-title="Generic todos"
            api="todos">
          </card-todo>
        </div>
      </div>
    </div>
</template>
<script type="text/javascript">
  import cardChart from './cardChart.vue'
  import cardTotal from './cardTotal.vue'
  import cardTodo from './cardTodo.vue'
  import knobStatistics from './knobStatistics.vue'
  export default {
    name: 'Home',
    mounted () {
      // Axios.all not working
      Promise.all([
        this.$http.get('posts'),
        this.$http.get('comments'),
        this.$http.get('todos')
      ])
        .then(response => {
          this.totalPosts = response[0].data.length
          this.totalComments = response[1].data.length
          this.totalTodos = response[2].data.length
        })
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
      cardChart,
      cardTodo,
      knobStatistics
    }
  }
</script>
<style></style>
