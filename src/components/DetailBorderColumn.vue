<template>
  <router-link
      :to="{ name: 'detail', params: { code: country.alpha2Code }}"
      class="btn btn-sm shadow-sm px-3 mt-2 me-2 bg-white border-0"
  >
    {{ country.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    country: Object
  }
}
</script>
