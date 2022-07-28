<template>
  <div class="row">
    <div class="col-md-5">
      <img class="w-100 flag" :alt="country.name" :src="country.flag">
    </div>
    <div class="col-md-6 offset-md-1">
      <h3 class="my-4 fw-bold">{{ country.name }}</h3>
      <div class="row">
        <div class="col-md-6 mb-4">
          <the-info-tag title="Native Name:" :text="country.nativeName" />
          <the-info-tag title="Population:" :text="country.population.toLocaleString()" />
          <the-info-tag title="Region:" :text="country.region" />
          <the-info-tag title="Sub Region:" :text="country.subregion" />
          <the-info-tag title="Capital:" :text="country.capital" />
        </div>
        <div class="col-md-6 mb-4">
          <the-info-tag title="Top Level Domain:" :text="country.topLevelDomain.join(', ')" />
          <the-info-tag title="Currencies:" :text="country.currencies.map(item => item.name).join(', ')" />
          <the-info-tag title="Languages:" :text="country.languages.map(item => item.name).join(', ')" />
        </div>
      </div>
      <div v-if="borderCountries.length" class="row">
        <div class="col-12 d-flex flex-column flex-md-row align-items-baseline">
          <strong class="me-3 small flex-shrink-0">Border Countries:</strong>
          <div class="d-flex flex-row flex-wrap">
            <detail-border-column
                v-for="borderCountry in borderCountries"
                :key="borderCountry.name"
                :country="borderCountry"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailBorderColumn from "@/components/DetailBorderColumn";
import TheInfoTag from "@/components/TheInfoTag";
export default {
  components: {TheInfoTag, DetailBorderColumn},
  props: {
    country: Object,
    borderCountries: Array,
  }
}
</script>
