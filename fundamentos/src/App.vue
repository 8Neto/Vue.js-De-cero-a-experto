<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <!-- v-bind === : -->
      <Counter />
    </div>
  </header>

  <main>
  </main>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name:'App',
  components:{
    Counter
  }
}
</script>

<style scoped>

</style>
