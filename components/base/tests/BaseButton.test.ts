import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton', () => {
  test('메시지 출력 확인', () => {
    const wrapper = mount(BaseButton, {
      props: {
        message: 'Hello Button'
      }
    });
    
    expect(wrapper.text()).toContain('Hello Button');
  });
});
