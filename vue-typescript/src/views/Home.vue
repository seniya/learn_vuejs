<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <MessageComponent></MessageComponent> -->
    <ChildrenComponent v-bind:parentMessage="message"></ChildrenComponent>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
// import MessageComponent from '@/components/MessageComponent.vue';
import ChildrenComponent from '@/components/ChildrenComponent.vue';

@Component({
  components: {
    // MessageComponent,
    ChildrenComponent
  }
})
export default class Home extends Vue {
  message: string = 'hello home2';
}
</script>
