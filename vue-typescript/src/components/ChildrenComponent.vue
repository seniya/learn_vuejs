<template>
  <div>{{ parentMessage }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ChildrenComponent extends Vue {
  @Prop() private parentMessage?: string;
}
</script>
