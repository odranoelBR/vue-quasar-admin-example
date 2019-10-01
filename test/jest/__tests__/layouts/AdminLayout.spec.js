/* eslint-disable */
import axios from 'axios'
import { mountQuasar } from '../../utils/index'
import AdminLayout from '~/src/layouts/AdminLayout.vue'
jest.mock('axios')

describe('Mount Quasar', () => {
  it('test axios', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [1, 2, 3] }));

    const wrapper = await mountQuasar(AdminLayout)

    // console.log(wrapper.vm.$store.getters['app/getPosts'])
  })
})
