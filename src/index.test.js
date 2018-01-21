import { mount } from '@vue/test-utils'
import TouchSlider from './'

describe('Component', () => {
  test('it works', () => {
    const wrapper = mount(TouchSlider)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
