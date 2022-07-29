<template>
  <home-country-list-component :countries="countries" :loading="loading" />
</template>

<script>
import axios from "axios";
import HomeCountryListComponent from "@/components/HomeCountryListComponent";

export default {
  components: {HomeCountryListComponent},
  props: {
    region: String
  },
  data() {
    return {
      loading: true,
      countries: [],
    }
  },
  watch: {
    region() {
      this.getFilteredData();
    }
  },
  mounted() {
    this.getFilteredData();
  },
  methods: {
    getFilteredData() {
      if (!this.region) {
        return;
      }
      this.loading = true;
      axios.get(`https://restcountries.com/v2/region/${this.region}`).then(({data}) => {
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
