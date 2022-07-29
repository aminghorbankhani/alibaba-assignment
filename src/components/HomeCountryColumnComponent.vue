<template>
  <div class="col-lg-3 col-md-4">
    <router-link
        :to="{ name: 'Detail', params: { code: country.alpha3Code }}"
        class="card mb-4 border-0 shadow-sm text-decoration-none text-reset al-element al-text mx-5 mx-md-0"
    >
      <lazy-image-component
          class="card-img-top shadow-sm"
          img-class="flag rounded-top"
          :alt="country.name"
          :src="country.flag"
      />
      <div class="card-body p-4">
        <h5 class="card-title text-truncate fw-bold">{{ country.name }}</h5>
        <div class="my-3 small">
          <info-label-component title="Population:" :text="country.population.toLocaleString()" />
          <info-label-component title="Region:" :text="country.region" />
          <info-label-component title="Capital:" :text="country.capital" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import InfoLabelComponent from "@/components/InfoLabelComponent";
import LazyImageComponent from "@/components/LazyImageComponent";
export default {
  components: {LazyImageComponent, InfoLabelComponent},
  props: {
    country: Object
  },
}
</script>
