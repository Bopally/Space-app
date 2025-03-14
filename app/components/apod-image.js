import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { dropTask } from 'ember-concurrency';

export default class ApodImageComponent extends Component {
  @service nasaApi;

  constructor() {
    super(...arguments);

    this.fetchNasaDataTask.perform();
  }

  get isImage() {
    return this.data?.media_type === 'image';
  }

  get isVideo() {
    return this.data?.media_type === 'video';
  }

  get isLoading() {
    return this.fetchNasaDataTask?.isRunning;
  }

  get isError() {
    return this.fetchNasaDataTask?.isError;
  }

  get data() {
    return this.fetchNasaDataTask?.lastSuccessful?.value;
  }

  get title() {
    return this.data.title;
  }

  @action
  async updateDate(event) {
    let selectedDate = event.target.value;
    await this.fetchNasaDataTask.perform(selectedDate);
  }

  fetchNasaDataTask = dropTask(async (date) => {
    return await this.nasaApi.fetchApod(date);
  });
}
