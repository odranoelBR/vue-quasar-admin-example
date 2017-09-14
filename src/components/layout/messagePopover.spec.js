import { shallow } from 'avoriaz'
import MessagePopover from './messagePopover.vue'
describe('Component working', () => {
  it('Computeds', () => {
    const wrapper = shallow(MessagePopover, {
      propsData: { posts: [1, 2, 3, 4, 5, 6] }
    })
    expect(wrapper.vm.filteredPosts).toEqual([1, 2, 3, 4, 5])
  })

  it('Methods', () => {
    const wrapper = shallow(MessagePopover)
    expect(['ball', 'car', 'pipe']).toContain(wrapper.vm.randomArrayElement(['ball', 'car', 'pipe']))
  })
})
