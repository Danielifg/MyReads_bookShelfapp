import React,{Component } from 'react'
import { Route, Link }  from "react-router-dom"
import * as BooksAPI from './BooksApi'
import './App.css'
/*
 *TODO: filter all shelfs, change state of property  shelf="react,wantToRead,currentlyReading", serialize, persist
 */

import CurrentlyReading from './components/CurrentlyReading'
import WantToRead from './components/WantToRead'
import Read from './components/Read'
import BooksCatalog from './components/BooksCatalog'


class BooksApp extends Component {
  state = {
      books:[],
      currentlyReading : [],
      read : [],
      wantToRead : []
  }


  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
     console.log(BooksAPI.getAll());
     console.log(" book");
  }


 //Filter CurrentlyReading Books
currentlyReadingt = (currentlyReading) =>{
   this.setState((state)=>({
       contacts: state.books.filter((c)=> book.shelf === "currentlyReading")
   }))
}


  render() {
    return (

      <div className="app">
        <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
        <CurrentlyReading books={this.state.books}/>
        <WantToRead books={this.state.books}/>
              <Read/>
              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
                className = "add-contact"
                > Add Contact</Link>
            </div>
          </div>
        )}/>
      <Route path="/search" render={({ history })=>(
          <BooksCatalog books={this.state.books}/>
        )}/>
      )}
    </div>
    )
  }
}

export default BooksApp
