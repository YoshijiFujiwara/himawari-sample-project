import { mount, createLocalVue, config, RouterLinkStub } from '@vue/test-utils'
import SignupPage from '@/pages/auth/signup.vue'
import SignupForm from '@/components/organisms/auth/signup/SignupForm.vue'

config.showDeprecationWarnings = false
const localVue = createLocalVue()

describe('auth/SignupPage', () => {
  const wrapper = mount(SignupPage, {
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
  it('is a Vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('SignupFormコンポーネントをレンダーしている', () => {
    expect(wrapper.find(SignupForm).exists()).toBeTruthy()
  })

  it('ログインページへのリンクがある', () => {
    const link = wrapper.find(RouterLinkStub)
    expect(link.text()).toBe('こちら')
    expect(link.props().to).toBe('/auth/signin')
  })
})
