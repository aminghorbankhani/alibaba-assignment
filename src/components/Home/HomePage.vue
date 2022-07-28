<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between mb-5">
        <search-input-component class="col-4" @onChange="handleSearch" />
        <region-selector-component @onChange="handleRegionFilter" />
      </div>
      <div v-if="loading" class="text-center">
        <h4><font-awesome-icon icon="fa-solid fa-spinner" class="fa-spin" /></h4>
      </div>
      <SearchedCountriesComponent v-else-if="searchedText" :text="searchedText" />
      <FilteredCountriesComponent v-else-if="regionFilter" :region="regionFilter" />
      <div v-else class="row">
        <country-column-component
            v-for="country in countries"
            :country="country"
            :key="country.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CountryColumnComponent from "@/components/CountryColumnComponent";
import axios from "axios";
import SearchedCountriesComponent from "@/components/Home/SearchedCountriesComponent";
import FilteredCountriesComponent from "@/components/Home/FilteredCountriesComponent";
import SearchInputComponent from "@/components/Home/SearchInputComponent";
import RegionSelectorComponent from "@/components/Home/RegionSelectorComponent";

export default {
  components: {
    SearchInputComponent,
    FilteredCountriesComponent,
    SearchedCountriesComponent,
    CountryColumnComponent,
    RegionSelectorComponent
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
