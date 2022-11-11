import { describe, expect, test } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton', () => {
  
  test('메시지 출력 확인', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        message: 'Hello Button'
      }
    });
    
    expect(wrapper.text()).toContain('Hello Button');
  });
  
  test('로딩 상태일 때 버튼 로딩 어트리뷰트 확인', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        message: 'Test Button',
        loading: true
      }
    });
  
    const button = wrapper.find('#base-button');
    expect(button.attributes().loading).toBeDefined();
  });
});
