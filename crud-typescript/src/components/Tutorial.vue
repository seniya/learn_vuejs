<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentTutorial.title" />
      </div>
      <div class="form-group">
        <label for="body">body</label>
        <input type="text" class="form-control" id="body" v-model="currentTutorial.body" />
      </div>

      <div class="form-group">
        <label>
          <strong>Status:</strong>
        </label>
        {{ currentTutorial.published ? 'Published' : 'Pending' }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >UnPublish</button>
    <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">Publish</button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">Delete</button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">Update</button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TurorialDataService from '../services/TurorialDataService';

@Component
export default class Tutorial extends Vue {
  private curremtTutorial: any = null;
  private message: string = '';

  getTutorial(id: string) {
    TurorialDataService.get(id)
      .then(result => {
        this.curremtTutorial = result.data;
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updatePublished(status: boolean) {
    var data = {
      id: this.curremtTutorial.id,
      title: this.curremtTutorial.title,
      body: this.curremtTutorial.body,
      published: status
    };
    TurorialDataService.update(this.curremtTutorial.id, data)
      .then(result => {
        this.curremtTutorial.published = status;
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateTutorial() {
    TurorialDataService.update(this.curremtTutorial.id, this.curremtTutorial)
      .then(result => {
        this.message = 'The totorial was updated successfully!';
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteTutorial() {
    TurorialDataService.delete(this.curremtTutorial.id)
      .then(result => {
        this.$router.push({ name: 'tutorials' });
      })
      .catch(err => {
        console.log(err);
      });
  }

  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
