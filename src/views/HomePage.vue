<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <home-search-input-component class="col-md-6 col-lg-4 col-12 mb-4 mb-md-0" @onChange="handleSearch" />
        <home-region-selector-component @onChange="handleRegionFilter" />
      </div>
      <home-searched-countries-component v-if="searchedText" :text="searchedText" />
      <home-filtered-countries-component v-else-if="regionFilter" :region="regionFilter" />
      <home-country-list-component v-else :countries="countries" :loading="loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomeSearchInputComponent from "@/components/HomeSearchInputComponent";
import HomeRegionSelectorComponent from "@/components/HomeRegionSelectorComponent";
import HomeCountryListComponent from "@/components/HomeCountryListComponent";
import HomeFilteredCountriesComponent from "@/components/HomeFilteredCountriesComponent";
import HomeSearchedCountriesComponent from "@/components/HomeSearchedCountriesComponent";

export default {
  components: {
    HomeSearchedCountriesComponent,
    HomeFilteredCountriesComponent,
    HomeCountryListComponent,
    HomeSearchInputComponent,
    HomeRegionSelectorComponent,
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
