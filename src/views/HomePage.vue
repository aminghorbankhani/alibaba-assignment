<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <home-search-input-component class="col-md-6 col-lg-4 col-12 mb-4 mb-md-0" @onChange="handleSearch" />
        <home-region-selector-component />
      </div>
      <loading-component v-if="loading" />
      <div v-else-if="preparedCountries.length" class="row">
        <home-country-column-component
            v-for="country in preparedCountries"
            :country="country"
            :key="country.name"
        />
      </div>
      <div v-else class="row">
        <div class="col-12">
          <div class="card al-text al-element border-0 shadow-sm">
            <div class="card-body p-4">
              <h5 class="card-title m-0">No result was found.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Fuse from "fuse.js";
import HomeSearchInputComponent from "@/components/HomeSearchInputComponent";
import HomeRegionSelectorComponent from "@/components/HomeRegionSelectorComponent";
import LoadingComponent from "@/components/LoadingComponent";
import HomeCountryColumnComponent from "@/components/HomeCountryColumnComponent";

export default {
  components: {
    HomeCountryColumnComponent,
    LoadingComponent,
    HomeSearchInputComponent,
    HomeRegionSelectorComponent,
  },
  data: () => {
    return {
      loading: true,
      searchedText: null,
      countries: [],
      regionDictionary: [],
      preparedCountries: [],
    }
  },
  created() {
    this.setTitle('Home');
    this.getData();
  },
  watch: {
    '$route'(to, from) {
      if (to.query.region !== from.query.region) {
        this.prepareCountries();
      }
    }
  },
  methods: {
    prepareCountries() {
      let countries = [];

      const region = this.$route.query.region;
      if (region)
        countries = this.regionDictionary[region] ? this.regionDictionary[region] : [];
      else
        countries = this.countries;

      if (this.searchedText)
        countries = this.searchCountries(countries);

      this.preparedCountries = countries;
    },
    handleSearch(text) {
      this.searchedText = text;
      this.prepareCountries();
    },
    searchCountries(countries) {
      const fuse = new Fuse(
          countries,
          {
            keys: ['name'],
            threshold: .4,
          }
      );
      return fuse.search(this.searchedText).map(({item}) => item);
    },
    getData() {
      axios.get('https://restcountries.com/v2/all').then(({data}) => {
        this.countries = data;
        this.fillRegionDictionary();
        this.prepareCountries();
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        console.log('error:', error?.message)
      })
    },
    fillRegionDictionary() {
      this.countries.forEach((country) => {
        if (this.regionDictionary[country.region]) {
          this.regionDictionary[country.region] = [...this.regionDictionary[country.region], country]
        } else {
          this.regionDictionary[country.region] = [country];
        }
      })
    }
  }
}
</script>
