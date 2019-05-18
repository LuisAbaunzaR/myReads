import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { update, search } from '../BooksAPI';
import Book from './book';

export default class Search extends Component {
	state = {
		books: []
	};

	handleEvent = (e) => {
		const term = e.target.value;
		this.searchBook(term);
	};

	searchBook = (query) => {
		search(query).then((data) => {
			const valor = !data || data === null || data.error || data === undefined ? [] : data;
			this.setState({
				books: valor
			});
		});
	};

	handleUpdateShelf = (book, shelf) => {
		update(book, shelf).then((data) => console.log('Updated'));
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input onChange={this.handleEvent} type="text" placeholder="Search by title or author" />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{!this.state.books ? (
							<p>No hay resultados</p>
						) : (
							this.state.books.map((book) => (
								<Book key={book.id} book={book} handleUpdateShelf={this.handleUpdateShelf} />
							))
						)}
					</ol>
				</div>
			</div>
		);
	}
};


