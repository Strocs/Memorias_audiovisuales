export interface Graduate {
  name: string;
  full_name: string
  project_name: string;
  project_year: string;
  project_description: string;
  project_images: ImageMetadata[];
  reel_id: string;
  video_id: string;
}

export type Graduates = Graduate[]

