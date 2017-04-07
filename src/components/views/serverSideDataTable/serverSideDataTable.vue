<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title bg-teal text-white">Example using pagination / filter outside of data tables (Tks to
          <a href="https://github.com/wilcorrea" class="text-black underline">Willian Correa</a> ) </div>
        <div class="card-content">
          <div class="flex wrap gutter">
            <div class="auto">
              <q-search placeholder="Search for beer name" :debounce="500"
                        v-model.lazy="searchBeer" @input="getBeers"/>
            </div>
            <div class="auto">
              <q-pagination
                v-model="page"
                :max="10"
              ></q-pagination>
            </div>
          </div>
          <q-data-table
            :data="beers"
            :config="configs"
            :columns="columns">

            <template slot="col-image_url" scope="cell">
              <tooltip-button :url="cell.row.image_url"></tooltip-button>
            </template>
          </q-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tooltipButton from './tooltipButton.vue'
  export default {
    mounted () {
      this.getBeers()
    },
    data () {
      return {
        beers: [],
        page: 1,
        searchBeer: '',
        columns: [
          { label: 'Name', field: 'name', width: '80px', sort: true },
          { label: 'Description', field: 'description', width: '150px', sort: true },
          { label: 'First Brewed', field: 'first_brewed', width: '50px', sort: true },
          { label: 'Picture', field: 'image_url', width: '50px' }
        ],
        configs: {
          columnPicker: true,
          title: 'Beer List'
        }
      }
    },
    watch: {
      page () {
        this.getBeers()
      }
    },
    computed: {
      url () {
        return `beers?page=${this.page}&per_page=10${this.search}`
      },
      search () {
        return this.searchBeer ? `&beer_name=${this.searchBeer}` : ''
      }
    },
    methods: {
      getBeers () {
        this.$http.punk
          .get(this.url)
          .then(response => { this.beers = response.data })
      }
    },
    components: {
      tooltipButton
    }
  }
</script>

<style scoped>
  .grid-filter{
    max-width: 200px
  }
  .grid-search{
    max-width: calc(100% - 400px)
  }
  .grid-pagination{
    max-width: 200px
  }
</style>
