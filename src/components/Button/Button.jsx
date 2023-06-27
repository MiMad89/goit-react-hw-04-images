import React, { Component } from 'react';
import css from './Button.module.css';

export class LoadMoreButton extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick(e);
  };

  render() {
    return (
      <button type="button" className={css.Button} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
