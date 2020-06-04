<template>
  <div>
    <input type="checkbox" v-bind:checked="checked" @change="change" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class ModelComponent extends Vue {
  @Model('change', { type: Boolean })
  private readonly checked!: boolean;

  @Emit()
  private change(event: Event) {
    return event.target.checked;
  }
}
</script>