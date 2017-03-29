<template>
  <q-data-table
    ref="dataTable"
    v-if="commentsOfPost.length > 0"
    :data="commentsOfPost"
    :columns="columns"
    :config="configs"
  >
    <template slot="col-photo" scope="cell">
      <img :src="cell.row.thumbnailUrl" alt="">
    </template>
    <template slot="selection" scope="selection">
      <button class="orange" @click="addPrint(selection.rows)">
        Add to print
      </button>
    </template>
  </q-data-table>
</template>

<script>
  export default {
    props: {
      selectedAlbum: {
        required: true
      }
    },
    watch: {
      selectedAlbum () {
        this.$http
          .get(`photos?albumId=${this.selectedAlbum.id}`)
          .then(response => { this.commentsOfPost = response.data })
      }
    },
    computed: {
      selectedRows () {
        return this.$refs.dataTable.selectedRows
      },
      configs () {
        return {
          title: `Photos of the album : ${this.selectedAlbum.title}`,
          columnPicker: true,
          rowHeight: '171px',
          selection: 'multiple',
          pagination: {
            rowsPerPage: 3,
            options: [3, 6]
          }
        }
      }
    },
    data () {
      return {
        commentsOfPost: [],
        columns: [
          {
            label: 'Title',
            field: 'title',
            width: '130px',
            filter: true,
            sort: true
          },
          {
            label: 'Photo',
            field: 'photo',
            width: '100px'
          }
        ]
      }
    },
    methods: {
      addPrint (rows) {
        this.$emit('selectedRows', rows)
      }
    }
  }
</script>

<style>
</style>
