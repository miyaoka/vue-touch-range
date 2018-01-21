import { mount } from '@vue/test-utils'
import TouchRange from './'

describe('Component', () => {
  test('it works', () => {
    const wrapper = mount(TouchRange)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
