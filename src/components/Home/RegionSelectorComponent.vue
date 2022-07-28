<template>
  <div class="dropdown-center">
    <button
        class="btn py-3 px-4 bg-white shadow-sm dropdown-toggle border-0 region-filter-button d-flex justify-content-between align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    >
      <span v-if="filter === null">Filter by region</span>
      <span v-else>{{ filter }}</span>
      <font-awesome-icon icon="fa-solid fa-chevron-down" class="small ms-4" />
    </button>
    <ul class="dropdown-menu w-100 border-0 shadow-sm">
      <li v-for="region in regions" :key="region">
        <button
            :class="{'active': region === filter}"
            @click="toggleRegionFilter(region)"
            class="dropdown-item"
        >
          {{ region }}
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
  methods: {
    toggleRegionFilter(region) {
      if (region === this.filter) {
        this.filter = null;
      } else {
        this.filter = region;
      }
      this.$emit('onChange', this.filter);
    },
  }
}
</script>
