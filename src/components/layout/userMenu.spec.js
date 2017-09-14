import { shallow } from 'avoriaz'
import UserMenu from './userMenu.vue'
describe('Component working', () => {
  it('Template', () => {
    const wrapper = shallow(UserMenu, {
      propsData: { nome: 'NomeUsuario' }
    })
    expect(wrapper.find('#menu')).toBe('NomeaUsuario')
  })
})
