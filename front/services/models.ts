export interface User {
  name: string;
  password: string;
}

export interface VideoPlaylist {
  name: string;
  user_id: number;
  is_public: boolean;
}

export interface Video {
  name: string;
  playlist_id: number;
  url: string;
}
