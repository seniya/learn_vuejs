<template>
  <div>
    <ItemBlock
      v-for="item in renderList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    ></ItemBlock>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import ItemBlock from '@/components/item-block.vue';
import { mapGetters } from 'vuex';

@Component({
  components: { ItemBlock },
  computed: {
    ...mapGetters(['allTodoList', 'activeTodoList', 'clearTodoList'])
  }
})
export default class ItemList extends Vue {
  renderList: any[] = [];

  created() {
    this.initRenderList(this.$route.params.status);
  }

  initRenderList(status: 'active' | 'clear') {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === 'active') {
      this.renderList = this.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch('$route.params.status')
  routeUpdate(newValue: 'active' | 'clear') {
    this.initRenderList(newValue);
  }

  @Watch('$store.state.todoList', { deep: true })
  routeUpdate() {
    this.initRenderList(this.$route.params.status);
  }
}
</script>