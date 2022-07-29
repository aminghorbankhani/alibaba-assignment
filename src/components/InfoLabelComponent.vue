<template>
  <div class="mb-1 al-text">
    <strong class="fw-semi-bold">{{ title }}</strong>
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
