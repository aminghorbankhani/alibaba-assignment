<template>
  <home-country-list :countries="countries" :loading="loading" />
</template>

<script>
import axios from "axios";
import HomeCountryList from "@/components/HomeCountryList";

export default {
  components: {HomeCountryList},
  props: {
    text: String
  },
  data() {
    return {
      searchCancelToken: null,
      loading: false,
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
