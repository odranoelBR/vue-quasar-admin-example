<template>
  <q-data-table
    v-if="commentsOfPost.length > 0"
    :data="commentsOfPost"
    :columns="columns"
    :config="configs"
  >
    <template slot="col-photo" scope="cell">
      <img :src="cell.row.thumbnailUrl" alt="">
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
            width: '100px',
            format (value) {

            }
          }
        ]
      }
    }
  }
</script>

<style>
</style>
