import React from 'react';
import css from './Button.module.css';

export const LoadMoreButton = ({ onClick }) => {
  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button type="button" className={css.Button} onClick={handleClick}>
      Load more
    </button>
  );
};
