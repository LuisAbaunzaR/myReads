import React from 'react';

const Book = (props)=> {

const handleBookUpdate = (evt) => {
		const shelf = evt.target.value;
		const book = props.book;
		props.handleUpdateShelf(book, shelf);
	};

	
		const { book } = props;

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`
							}}
						/>
						<div className="book-shelf-changer">
							<select value={book.shelf ? book.shelf : 'none' } onChange={handleBookUpdate}>
								<option value="move" disabled>
									Move to...
								</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors ? book.authors.map((author) => author) : ''}</div>
				</div>
			</li>
		);
	
};

export default Book;