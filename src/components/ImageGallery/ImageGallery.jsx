import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        const { webformatURL, tags, id, largeImageURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            id={id}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
};
