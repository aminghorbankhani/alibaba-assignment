<template>
  <div class="py-5">
    <div class="container">
      <div class="mb-5">
        <button @click="$router.back()" class="btn al-element al-text px-3 shadow-sm border-0">
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
          <span class="ms-2">Back</span>
        </button>
      </div>
      <loading-component v-if="loading" />
      <detail-country-section-component
          v-else
          :country="country"
          :border-countries="borderCountries"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DetailCountrySectionComponent from "@/components/DetailCountrySectionComponent";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  components: {LoadingComponent, DetailCountrySectionComponent},
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
