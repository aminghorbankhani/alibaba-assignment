<template>
  <div v-lazy-image class="opacity-0">
    <img
        :class="imgClass"
        :data-url="src"
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
