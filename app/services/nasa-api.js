import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class NasaApiService extends Service {
  @tracked apod = null;

  @action
  async fetchApod() {
    const apiKey = 'QS3eUr2s8gzKDr19jnh67Gue0SYlcbjklgKewKlh';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      this.apod = data;
    } catch (error) {
      console.error('Error can not fetch APOD', error);
    }
  }
}
