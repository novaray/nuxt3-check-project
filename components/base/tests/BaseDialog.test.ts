import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BaseDialog from '../BaseDialog.vue';

describe('BaseDialogTest', () => {
  
  test('visible이 true일 때 화면에 부착되었는지 확인', () => {
    const wrapper = shallowMount(BaseDialog, {
      props: {
        visible: true
      },
      slots: {
        content: 'Hello Dialog'
      }
    });
  
    expect(wrapper.text()).toContain('Hello Dialog');
  });
  
});
