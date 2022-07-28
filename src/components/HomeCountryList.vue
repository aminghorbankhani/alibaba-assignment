<template>
  <div>
    <the-loading v-if="loading" />
    <div v-else-if="countries.length" class="row">
      <home-country-column
          v-for="country in countries"
          :country="country"
          :key="country.name"
      />
    </div>
    <div v-else class="row">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <h5 class="card-title m-0">No result was found.</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCountryColumn from "@/components/HomeCountryColumn";
import TheLoading from "@/components/TheLoading";
export default {
  components: {TheLoading, HomeCountryColumn},
  props: {
    loading: Boolean,
    countries: Array,
  }
}
</script>
