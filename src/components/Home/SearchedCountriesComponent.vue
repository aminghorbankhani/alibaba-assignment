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
  props: ['text'],
  data() {
    return {
      searchCancelToken: null,
      countries: []
    }
  },
  watch: {
    text() {
      this.getSearchedData();
    }
  },
  mounted() {
    this.getSearchedData();
  },
  methods: {
    getSearchedData() {
      if (!this.text) {
        return;
      }
      this.loading = true;
      if (this.searchCancelToken) {
        this.searchCancelToken.cancel('cancel');
      }
      this.searchCancelToken = axios.CancelToken.source();
      axios.get(
          `https://restcountries.com/v2/name/${this.text}`,
          {cancelToken: this.searchCancelToken.token}
      ).then(({data}) => {
        this.countries = data;
        this.loading = false;
      }).catch((error) => {
        if (axios.isCancel(error)) {
          // ignore
          return;
        }
        this.loading = false;
        if (error.response.status === 404) {
          this.countries = [];
          return;
        }
        console.log('error:', error?.message)
      })
    },
  }
}
</script>
