<template>
  <div class="row">
    <div class="col-md-5">
      <lazy-image-component img-class="w-100 flag" :alt="country.name" :src="country.flag" />
    </div>
    <div class="col-md-6 offset-md-1">
      <h3 class="my-4 fw-bold al-text">{{ country.name }}</h3>
      <div class="row">
        <div class="col-md-6 mb-4">
          <info-label-component title="Native Name:" :text="country.nativeName" />
          <info-label-component title="Population:" :text="country.population.toLocaleString()" />
          <info-label-component title="Region:" :text="country.region" />
          <info-label-component title="Sub Region:" :text="country.subregion" />
          <info-label-component title="Capital:" :text="country.capital" />
        </div>
        <div class="col-md-6 mb-4">
          <info-label-component title="Top Level Domain:" :text="country.topLevelDomain.join(', ')" />
          <info-label-component title="Currencies:" :text="country.currencies.map(item => item.name).join(', ')" />
          <info-label-component title="Languages:" :text="country.languages.map(item => item.name).join(', ')" />
        </div>
      </div>
      <detail-border-section-component v-if="borderCountries.length" :countries="borderCountries" />
    </div>
  </div>
</template>

<script>
import InfoLabelComponent from "@/components/InfoLabelComponent";
import DetailBorderSectionComponent from "@/components/DetailBorderSectionComponent";
import LazyImageComponent from "@/components/LazyImageComponent";
export default {
  components: {LazyImageComponent, DetailBorderSectionComponent, InfoLabelComponent},
  props: {
    country: Object,
    borderCountries: Array,
  }
}
</script>
