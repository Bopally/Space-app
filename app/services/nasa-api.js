import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

import config from 'nasa-app/config/environment';

const apiKey = config.APP.NASA_API_KEY;

export default class NasaApiService extends Service {
  @tracked apod = null;
  @tracked isLoading = false;
  @tracked isError = false;
  @tracked data = null;

  async fetchApod(date = null) {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (date) {
      url += `&date=${date}`;
    }

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error can not fetch APOD', error);
    }
  }
}
