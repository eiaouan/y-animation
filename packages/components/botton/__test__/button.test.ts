import yButton from "..";
import { mount } from '@vue/test-utils'


test('displays message', () => {
  const wrapper = mount(yButton, {
    slots: {
      default: 'Hello world'
    },
    props: {
        type: 'primary',
        size: 'small'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
