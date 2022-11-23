export interface GalleryInterface {}

class Gallery {
  getGallery(): GalleryInterface[] {
    return [];
  }
  createGallery(gallery: GalleryInterface) {}

  updateGallery(gallery: GalleryInterface) {}
  deleteGallery(id: string) {}
}

export default new Gallery();
