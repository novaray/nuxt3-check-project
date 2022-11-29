<script lang="ts" setup>
import { ElInput } from 'element-plus';

interface BaseTextInputProps {
  modelValue: string;
  label: string;  // aria-label
  placeholder?: string;
  maxLength?: string | number;
  showWordLimit?: boolean;
  clearable?: boolean;
  autoFocus?: boolean;
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
  readonly?: boolean;
  input?: (value: string) => void;
  blur?: (event: FocusEvent) => void;
  focus?: (event: FocusEvent) => void;
  change?: (value: string | number) => void;
  clear?: () => void;
}

interface BaseTextInputEmits {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<BaseTextInputProps>(), {
  placeholder: '',
  showWordLimit: false,
  maxLength: Infinity,
  clearable: false,
  autoFocus: false,
  size: 'default',
  disabled: false,
  readonly: false,
  input: () => {},
  blur: () => {},
  focus: () => {},
  change: () => {},
  clear: () => {}
});
const emit = defineEmits<BaseTextInputEmits>();

const handleInput = (value: string) => {
  props.input(value);
  emit('update:modelValue', value);
};

</script>

<template>
  <el-input
      :model-value="modelValue"
      :label="label"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :show-word-limit="showWordLimit"
      :clearable="clearable"
      :autofocus="autoFocus"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @blur="blur"
      @focus="focus"
      @change="change"
      @clear="clear"
      data-test="baseInput"
  >
    <slot name="prefix"></slot>
    <slot name="suffix"></slot>
    <slot name="prepend"></slot>
    <slot name="append"></slot>
  </el-input>
</template>

<style scoped>

</style>
