type GetPhotos = (glob: Record<string, () => Promise<unknown>>) => Promise<ImageMetadata[]>;

export const getPhotos: GetPhotos = (glob) => {
  const listOfValues = Object.values(glob).map(
    (photo: () => Promise<unknown>) => photo()
  );

  return Promise.all(listOfValues).then((photos) => {
    return photos.map((photo) => (photo as { default: ImageMetadata }).default);
  });
};
