import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class NasaApiService extends Service {
  @tracked apod = null;
  @tracked isLoading = false;
  @tracked isError = false;
  @tracked data = null;

  async fetchApod(date = null) {
    const apiKey = 'QS3eUr2s8gzKDr19jnh67Gue0SYlcbjklgKewKlh';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (date) {
      url += `&date=${date}`;
    }

    try {
      this.isLoading = true;
      this.data = null;
      this.isError = false;
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      this.apod = data;
      this.data = data;
    } catch (error) {
      console.error('Error can not fetch APOD', error);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
