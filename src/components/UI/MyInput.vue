<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
  export default {
    name: 'MyInput',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      },
    },
  };
</script>

<style scoped>
  .input {
    width: calc(100% - 32px);
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
</style>
