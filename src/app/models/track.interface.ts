import { Artist } from './artist.interface';
import { Image } from './image.interface';
import { Streamable } from './streamable.interface';

export interface Track {
  artist: Artist;
  duration: string;
  image: Image[];
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  streamable: Streamable;
}
