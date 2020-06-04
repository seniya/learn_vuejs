<template>
  <div>{{message}}</div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
@Component
export default class InjectComponent extends Vue {
  @Inject()
  private readonly message!: string;
}
</script>