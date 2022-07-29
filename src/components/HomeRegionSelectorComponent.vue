<template>
  <div class="dropdown">
    <button
        class="btn py-3 px-4 al-element al-text shadow-sm dropdown-toggle border-0 w-200p d-flex justify-content-between align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
      <span v-if="filter === null">Filter by region</span>
      <span v-else>{{ filter }}</span>
      <font-awesome-icon icon="fa-solid fa-chevron-down" class="small ms-4" />
    </button>
    <ul class="dropdown-menu w-200p border-0 shadow-sm al-element">
      <li v-for="region in regions" :key="region">
        <button
            @click="toggleRegionFilter(region)"
            class="dropdown-item al-text d-flex justify-content-between align-items-center py-2"
        >
          <span>{{ region }}</span>
          <font-awesome-icon v-if="region === filter" icon="fa-solid fa-check" class="small" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regions: [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
      ],
      filter: null,
    }
  },
  mounted() {
    if (this.$route.query.region && this.regions.includes(this.$route.query.region)) {
      this.filter = this.$route.query.region;
    }
  },
  methods: {
    toggleRegionFilter(region) {
      if (region === this.filter) {
        this.filter = null;
        this.$router.push('/')
      } else {
        this.filter = region;
        this.$router.push({query: {region: this.filter}})
      }
    },
  }
}
</script>
