import React, { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';

class App extends Component {
  render() {
    return (
		<div>
      <Header/>
      <BookList/>
		</div>
    );
  }
}

export default App;
