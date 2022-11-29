import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseTextInput from '../BaseTextInput.vue';
import ElementPlus from 'element-plus';
import { ref } from 'vue';

describe('BaseTextInput Test', () => {
  
  test('update:modelValue 이벤트 발동 시에 값 확인', async () => {
    const text = ref('hello');
    
    const wrapper = mount(BaseTextInput, {
      props: {
        modelValue: text.value,
        label: ''
      },
      global: {
        plugins: [ElementPlus]
      },
    });
    wrapper.vm.$emit('update:modelValue', 'ttt');
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['ttt']);
  });
  
});

