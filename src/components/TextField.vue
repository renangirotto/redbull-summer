<template>
  <div class="form-control">
    <template v-if="inputType === 'textarea'">
      <textarea v-model="inputValue" class="input textarea" :name="inputName" :id="inputId"></textarea>
      <span v-show="!inputValue" class="placeholder">{{inputPlaceholder}}</span>
    </template>
    <template v-else>
      <div class="form-control">
        <input
          class="input"
          :type="inputType"
          :name="inputName"
          :id="inputId"
          :placeholder="inputPlaceholder"
        />
      </div>
    </template>
    <label class="error" v-if="inputError" :for="inputId">{{inputError}}</label>
  </div>
</template>

<script>
export default {
  props: {
    inputType: String,
    inputName: String,
    inputId: String,
    inputPlaceholder: String,
    inputError: String
  },
  data() {
    return {
      inputValue: null
    }
  }
};
</script>

<style>
</style>