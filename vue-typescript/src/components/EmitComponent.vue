<template>
  <div>
    <button @click="counter">자식에서 부모를 업데이트 합니다.</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class EmitComponent extends Vue {
  @Emit()
  private counter() {
    // console.log('counter');
  }
}
</script>