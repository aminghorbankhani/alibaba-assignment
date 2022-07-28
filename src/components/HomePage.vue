<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between mb-5">
        <home-search-input class="col-4" @onChange="handleSearch" />
        <home-region-selector @onChange="handleRegionFilter" />
      </div>
      <home-searched-countries v-if="searchedText" :text="searchedText" />
      <home-filtered-countries v-else-if="regionFilter" :region="regionFilter" />
      <home-country-list v-else :countries="countries" :loading="loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomeSearchInput from "@/components/HomeSearchInput";
import HomeRegionSelector from "@/components/HomeRegionSelector";
import HomeSearchedCountries from "@/components/HomeSearchedCountries";
import HomeFilteredCountries from "@/components/HomeFilteredCountries";
import HomeCountryList from "@/components/HomeCountryList";

export default {
  components: {
    HomeSearchInput,
    HomeRegionSelector,
    HomeCountryList,
    HomeFilteredCountries,
    HomeSearchedCountries
  },
  data: () => {
    return {
      loading: true,
      searchedText: null,
      regionFilter: null,
      countries: [],
    }
  },
  created() {
    this.getData();
  },
  methods: {
    handleSearch(text) {
      this.searchedText = text;
    },
    handleRegionFilter(region) {
      this.regionFilter = region;
    },
    getData() {
      axios.get('https://restcountries.com/v2/all').then(({data}) => {
        this.countries = data;
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        console.log('error:', error?.message)
      })
    },
  }
}
</script>
