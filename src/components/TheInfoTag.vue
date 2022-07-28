<template>
  <div class="mb-1 small">
    <strong>{{ title }}</strong>
    <span class="ms-1">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  }
}
</script>
