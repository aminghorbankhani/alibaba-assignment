<template>
  <div class="col-md-3">
    <router-link
        :to="{ name: 'detail', params: { code: country.alpha2Code }}"
        class="card mb-4 border-0 shadow-sm text-decoration-none text-reset"
    >
      <img class="card-img-top flag shadow-sm" :alt="country.name" :src="country.flag">
      <div class="card-body p-4">
        <h5 class="card-title text-truncate fw-bold">{{ country.name }}</h5>
        <div class="my-3">
          <TheInfoTag title="Population:" :text="country.population.toLocaleString()" />
          <TheInfoTag title="Region:" :text="country.region" />
          <TheInfoTag title="Capital:" :text="country.capital" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import TheInfoTag from "@/components/TheInfoTag";
export default {
  components: {TheInfoTag},
  props: {
    country: Object
  },
  mounted() {
    console.log(this.country.alpha2Code)
  }
}
</script>
