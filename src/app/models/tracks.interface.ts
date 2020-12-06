import { Attribute } from './attr.interface';
import { Track } from './track.interface';

export interface Tracks {
  tracks: {
    ['@attr']: Attribute;
    track: Track[];
  };
}
