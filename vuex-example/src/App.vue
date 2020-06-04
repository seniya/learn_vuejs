<template>
  <div id="app">
    <!--     
    <CountView></CountView>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button> -->
    {{ $store.state }}
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // import CountView from '@/components/CountView.vue';

  @Component({
    components: {
      // CountView,
    },
  })
  export default class App extends Vue {
    created() {
      console.log(this.$store);

      this.$store.dispatch('setRootData', 'test');
    }
    // private increase() {
    //   this.$store.dispatch('increase');
    // }
    // private decrease() {
    //   this.$store.dispatch('decrease');
    // }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
