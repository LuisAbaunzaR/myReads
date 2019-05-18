import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAll, update } from '../BooksAPI';
import Shelf from './shelf';
import Header from './header';

class Home extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		getAll().then((data) => {
			this.setState({ books: data });
		});
	};

	kindBooks = (shelf) => {
		const Books = this.state.books.filter((book) => book.shelf === shelf);
		return Books;
	};

	updateHandler = (book, shelf) => {
		this.updateBook(book, shelf);
		update(book, shelf).then((data) => console.log('Updated'));
	};

	updateBook = (book, shelf) => {
		let books = this.state.books;
		books.map((bookAct) => (bookAct.id === book.id ? bookAct.shelf = shelf : ''))
		
		
		this.setState({
			books: books
		});
	};

	render() {
		const { kindBooks } = this;
		return (
			<div className="list-books">
            <Header/>
				<div className="list-books-content">
					<div>
						<Shelf
							shelfname="Currently Reading"
							books={kindBooks('currentlyReading')}
							handleUpdateShelf={this.updateHandler}
						/>
						<Shelf
							shelfname="Want to Read"
							books={kindBooks('wantToRead')}
							handleUpdateShelf={this.updateHandler}
						/>

                        <Shelf 
                            shelfname="Read" 
                            books={kindBooks('read')} 
                            handleUpdateShelf={this.updateHandler} />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
};

export default Home;
