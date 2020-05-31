<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{message}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MessageComponent extends Vue {
  protected message: string = 'input tpye text';
}
</script>
