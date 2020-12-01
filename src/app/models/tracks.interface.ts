import { Attribute } from './attr.interface';
import { Track } from './track.interface';

export interface Tracks {
  [x: string]: any;
  ['@attr']: Attribute;
  track: Track[];
}
