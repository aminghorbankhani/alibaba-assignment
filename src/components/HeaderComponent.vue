<template>
  <div class="navbar al-element al-text shadow-sm py-3">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="navbar-brand d-flex align-items-center al-text">
        <strong class="fs-4">Where in the world?</strong>
      </router-link>
      <button class="btn al-text" @click="toggleMode">
        <font-awesome-icon icon="fa-regular fa-moon"/>
        <span class="ms-1">Dark Mode</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    }
  },
  mounted() {
    if (window.localStorage.getItem('darkMode')) {
      this.darken();
    }
  },
  methods: {
    darken() {
      document.querySelector('body').classList.add('dark-mode')
      this.darkMode = true
      window.localStorage.setItem('darkMode', 'yes');
    },
    lighten() {
      document.querySelector('body').classList.remove('dark-mode')
      this.darkMode = false
      window.localStorage.removeItem('darkMode');
    },
    toggleMode() {
      if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
        this.lighten()
      } else {
        this.darken()
      }
    },
  }
}
</script>
