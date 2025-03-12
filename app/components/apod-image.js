import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApodImageComponent extends Component {
  @service nasaApi;
  get isImage() {
    return this.args.apod?.media_type === 'image';
  }

  get isVideo() {
    return this.args.apod?.media_type === 'video';
  }

  @action
  async updateDate(event) {
    let selectedDate = event.target.value;
    await this.nasaApi.fetchApod(selectedDate);
  }
}
