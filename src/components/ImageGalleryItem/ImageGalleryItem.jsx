import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImageURL,
  onImageClick,
}) => {
  const handleClick = () => {
    onImageClick(largeImageURL);
  };

  return (
    <li key={id} value={id} className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={handleClick}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};
