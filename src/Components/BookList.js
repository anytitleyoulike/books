import React, { Component } from 'react';
import Book from './Book';

import axios from 'axios';

import '../style.css';

export default class BookList extends Component {
    state = {
        books: []
    }
    
    async componentDidMount() {
        let response = await axios.get('http://localhost:3003/books');
        this.setState({books: response.data});
    }
    
    render() {
        return (
            <section className="book-container">
                {this.state.books.map( book => (
                    <Book book={book}/>
                ))}
            </section>
        );
    }
}