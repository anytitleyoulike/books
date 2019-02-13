import React, { Component } from 'react';

import '../style.css';

export default class BookList extends Component {
    render() {
        let book = this.props.book;
        return (
            <div className="book">
                <div className="book-img">
                    <span>R$10</span>
                    <img src="https://via.placeholder.com/200x250" alt="livro" />
                </div>
                <div className="book-info">
                    <strong>{book.title}</strong>
                    <p className="subtitle">{book.subtitle}</p>
                    <p className="author">{book.author}</p>
                </div>
            </div>               
        )
    }
}