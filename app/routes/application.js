import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service nasaApi;

  async model() {
    await this.nasaApi.fetchApod();
    return this.nasaApi.apod;
  }
}
