<template>
  <div class="py-5">
    <div class="container">
      <div class="mb-5">
        <detail-back-button />
      </div>
      <the-loading v-if="loading" />
      <detail-country-section
          v-else
          :country="country"
          :border-countries="borderCountries"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DetailBackButton from "@/components/DetailBackButton";
import DetailCountrySection from "@/components/DetailCountrySection";
import TheLoading from "@/components/TheLoading";

export default {
  components: {TheLoading, DetailCountrySection, DetailBackButton},
  data() {
    return {
      country: null,
      loading: true,
      borderCountries: [],
    }
  },
  created() {
    this.getData();
  },
  watch: {
    '$route': 'getData'
  },
  methods: {
    getData() {
      this.loading = true;
      this.country = null;
      this.borderCountries = [];
      axios.get(`https://restcountries.com/v2/alpha/${this.$route.params.code}`).then(async ({data}) => {
        this.country = data;
        if (data.borders.length) {
          await this.getBorderCountries(data.borders.join(','))
        }
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        console.log('error:', error?.message)
      })
    },
    async getBorderCountries(codes) {
      await axios.get(`https://restcountries.com/v2/alpha?codes=${codes}`).then(({data}) => {
        this.borderCountries = data;
      }).catch((error) => {
        console.log('error:', error?.message)
      })
    }
  }
}
</script>
