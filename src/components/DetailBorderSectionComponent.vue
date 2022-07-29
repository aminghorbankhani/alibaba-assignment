<template>
  <div class="row">
    <div class="col-12 d-flex flex-column flex-md-row align-items-baseline">
      <strong class="me-3 fw-semi-bold flex-shrink-0 al-text">Border Countries:</strong>
      <div class="d-flex flex-row flex-wrap">
        <detail-border-column-component
            v-for="borderCountry in countries"
            :key="borderCountry.name"
            :country="borderCountry"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DetailBorderColumnComponent from "@/components/DetailBorderColumnComponent";
export default {
  components: {DetailBorderColumnComponent},
  props: {
    countries: Array,
  }
}
</script>
