<template>
  <router-link
      :to="{ name: 'Detail', params: { code: country.alpha3Code }}"
      class="btn btn-sm shadow-sm px-3 mt-2 me-2 al-element al-text border-0"
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
