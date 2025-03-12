import Component from '@glimmer/component';

export default class ApodImageComponent extends Component {
  get isImage() {
    return this.args.apod?.media_type === 'image';
  }

  get isVideo() {
    return this.args.apod?.media_type === 'video';
  }
}
