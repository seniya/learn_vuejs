<template>
  <div class="home">
    <!-- <MessageComponent></MessageComponent> -->
    <!-- <WatchExample v-bind:parentMessage="message"></WatchExample> -->
    <!-- <button @click="changeMessage">Chagne Message</button> -->
    <!-- <EmitComponent @counter="counter"></EmitComponent> -->
    <!-- <p>부모에서 숫자를 보여줍니다. : {{count}}</p> -->
    <!-- <InjectComponent></InjectComponent> -->
    약관의 동의를 필요하는 내용
    <ModelComponent v-model="checked" @change="change"></ModelComponent>
    {{text}}
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Provide } from 'vue-property-decorator';
// import MessageComponent from '@/components/MessageComponent.vue';
// import ChildrenComponent from '@/components/ChildrenComponent.vue';
// import WatchExample from '@/components/WatchExample.vue';
// import EmitComponent from '@/components/EmitComponent.vue';
import InjectComponent from '@/components/InjectComponent.vue';
import ModelComponent from '@/components/ModelComponent.vue';

@Component({
  components: {
    ModelComponent
    // InjectComponent
    // EmitComponent
    // MessageComponent,
    // ChildrenComponent,
    // WatchExample
  }
})
export default class Home extends Vue {
  /*
  private message: string = 'hello home2';

  private changeMessage() {
    this.message = 'CHANGE';
  }

  private count: number = 0;

  private counter() {
    this.count++;
  }

  @Provide('message')
  private msg: string = 'provide/inject exampl';
  */

  private checked: boolean = false;
  private text: string = '동의하지 않습니다.';
  private change(checked: boolean) {
    this.checked = checked;
    this.text = checked ? '동의합니다.' : '동의하지 않습니다.';
  }
}
</script>
