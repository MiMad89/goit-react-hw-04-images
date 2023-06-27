import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name } = this.state;

    this.props.onSubmit(name);

    this.setState({ name: '' });
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  render() {
    const { name } = this.state;

    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
