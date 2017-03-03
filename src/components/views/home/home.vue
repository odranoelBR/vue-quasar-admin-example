<template>
  <div>
    <div class="layout-padding ">
      <div class="flex wrap gutter">
        <div class="auto">
          <cardTotal
            title="Total Posts"
            :total="totalPosts">
          </cardTotal>
        </div>
        <div class="auto">
          <cardTotal
            title="Total comments"
            :total="totalComments">
          </cardTotal>
        </div>
        <div class="auto">
          <cardTotal
            title="Generic data"
            :total="50004">
          </cardTotal>
        </div>
      </div>
      <div class="flex wrap gutter">
        <div class="width-2of5 sm-auto">
        </div>
        <div class="width-2of5 sm-auto">
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
  import cardPessoasPorBairro from './cardPessoasPorBairro.vue'
  import cardCadastrosPorMesNoAno from './cardCadastrosPorMes.vue'
  import cardAniversariosPorMes from './cardAniversariosPorMes.vue'
  import cardTotal from './cardTotal.vue'
  export default {
    name: 'Home',
    mounted () {
      this.getPosts()
      this.getComments()
    },
    data () {
      return {
        totalPosts: 0,
        totalComments: 0
      }
    },
    components: {
      cardTotal,
      cardPessoasPorBairro,
      cardCadastrosPorMesNoAno,
      cardAniversariosPorMes
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
      }
    }
  }
</script>
<style>

</style>
