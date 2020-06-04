<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="user_id">user_id</label>
        <input
          type="text"
          class="form-control"
          id="user_id"
          required
          v-model="tutorial.user_id"
          name="user_id"
        />
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="body">body</label>
        <input class="form-control" id="body" required v-model="tutorial.body" name="body" />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TurorialDataService from '../services/TurorialDataService';

@Component
export default class AddTutorial extends Vue {
  private tutorial: any = {
    id: null,
    title: '',
    user_id: '29707',
    body: '',
    published: false
  };

  private submitted: boolean = false;

  saveTutorial() {
    var data = {
      user_id: this.tutorial.user_id,
      title: this.tutorial.title,
      body: this.tutorial.body
    };

    TurorialDataService.create(data)
      .then(respone => {
        this.tutorial.id = respone.data.id;
        console.log(respone.data);
        this.submitted = true;
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {};
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
