<template>
  <div class="row">
    <country-column-component
        v-for="country in countries"
        :country="country"
        :key="country.name"
    />
  </div>
</template>

<script>
import axios from "axios";
import CountryColumnComponent from "@/components/CountryColumnComponent";

export default {
  components: {CountryColumnComponent},
  props: ['region'],
  data() {
    return {
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
