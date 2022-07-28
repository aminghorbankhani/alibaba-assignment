<template>
  <div id="app">
    <the-header />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  name: 'App',
  components: {TheHeader},
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  height: auto !important;
  min-height: 100%;
  background-color: #FAFAFA;
}

.al-bg-light-gray {
  background-color: #FAFAFA;
}

.search-input {
  padding-left: 50px !important;
}
.search-icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0, -50%);
}

.dropdown-toggle::after {
  display: none !important;
}

.region-filter-button {
  width: 200px;
}

.flag {
  object-fit: cover;
  width: 100%;
  aspect-ratio: 4/3
}

</style>
