<template>
  <div class="ball" :style="styleObj">{{number}}</div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  computed: {
    styleObj() {
      let background;
      if (this.number < 10) {
        background = "red";
      } else if (this.number <= 20) {
        background = "blue";
      } else if (this.number <= 30) {
        background = "white";
      } else if (this.number <= 40) {
        background = "orange";
      } else if (this.number <= 50) {
        background = "green";
      }
      return {
        background
      };
    }
  },
  methods: {}
};
</script>

<style scoped>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>