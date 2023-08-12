export interface MarsCamera {
  id: number;
  rover_id: number;
  name: string;
  full_name: string;
}

export interface MarsPhoto {
  id: number;
  sol: number;
  img_src: string;
  earth_date: string;
  camera: MarsCamera;
}
