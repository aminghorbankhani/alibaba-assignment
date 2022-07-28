<template>
  <router-link to="/detail" class="col-md-3 text-decoration-none text-reset">
    <div class="card mb-4 border-0 shadow-sm">
      <img class="card-img-top flag shadow-sm" :alt="country.name" :src="country.flag">
      <div class="card-body p-4">
        <h5 class="card-title text-truncate">{{ country.name }}</h5>
        <div class="my-3 small">
          <div class="mb-1">
            <strong>Population:</strong>
            <span class="ms-1">{{ country.population }}</span>
          </div>
          <div class="mb-1">
            <strong>Region:</strong>
            <span class="ms-1">{{ country.region }}</span>
          </div>
          <div class="mb-1 text-truncate">
            <strong>Capital:</strong>
            <span class="ms-1">{{ country.capital }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['country'],
  computed: {
    capital() {
      console.log()
      if (!this.country.capital) {
        return '';
      }
      return this.country.capital.join(',')
    }
  },
}
</script>
