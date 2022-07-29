<template>
  <div v-lazy-image class="opacity-0">
    <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 0 0'%3E%3C/svg%3E"
        :class="imgClass"
        :data-src="src"
        :alt="alt"
    >
  </div>
</template>

<script>
import ImgLazyLoadDirective from "@/directives/ImgLazyLoadDirective";

export default {
  props: {
    src: String,
    alt: String,
    imgClass: String,
  },
  directives: {
    lazyImage: ImgLazyLoadDirective
  }
}
</script>
