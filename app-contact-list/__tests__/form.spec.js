import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('Vue test sample.', () => {

    describe('Mounted App', () => {
        const wrapper = mount(App);
      
        test('is a Vue instance', () => {
          expect(wrapper.isVueInstance()).toBeTruthy()
        })
      })
})