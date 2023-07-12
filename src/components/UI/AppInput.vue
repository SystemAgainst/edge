<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const placeholder = computed(() => props.placeholder);
const label = computed(() => props.label);
const error = computed(() => props.error);
const name = computed(() => props.name);

const modelValue = computed(() => props.modelValue);

const handleInput = (event) => {
  emits("update:modelValue", event);
};

const id = ref("input-" + Math.random());

</script>

<template>
  <div>
    <div class="form__item">
      <label :for="id" class="form__label">{{ label }}</label>
      <input
          :id="id"
          :placeholder="placeholder"
          :value="modelValue"
          @input="handleInput($event.target.value)"
          class="form__input"
          :name="name"
      >
      <small v-if="error" class="form__input _error">{{ error }}</small>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
