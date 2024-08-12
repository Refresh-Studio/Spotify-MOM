export interface TrackObject {
  id: string;
  duration_ms: number;
  uri: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
}

export interface TrackDetails {
  track: TrackObject;
}
