import React from 'react';
import Book from './book';

 const Shelf = (props)=> {
	
		return (
			
				<div className="bookshelf">
					<h2 className="bookshelf-title">{props.shelfname}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{props.books.map((book) => (
								<Book key={book.id} book={book} handleUpdateShelf={props.handleUpdateShelf} />
							))}
						</ol>
					</div>
				</div>
			
		);
	};

export default Shelf