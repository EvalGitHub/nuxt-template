<template>
  <Header/>
  <slot />
</template>
<script>
  import Header from '~/components/header/index.vue'
  export default {
    components: {
      Header
    }
  }
</script>