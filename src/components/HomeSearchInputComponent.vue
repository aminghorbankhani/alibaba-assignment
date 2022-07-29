<template>
  <div class="position-relative">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="search-icon" />
    <input
        class="form-control al-element al-text search-input py-3 w-100 border-0 shadow-sm"
        name="search"
        placeholder="Search for a country..."
        v-model="value"
        autocomplete="off"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },
  watch: {
    value(value) {
      this.$emit('onChange', value);
    }
  }
}
</script>
