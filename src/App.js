import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import PostIndex from './components/postIndex/posts_index';
import PostsNew from './components/postNew/posts_new';
import PostsDetail from './components/postDetail/posts_detail';

const App = () =>  (
      <div className="App">

        <div className="display-1 text-center text-black-50 mb-4">
          MY BLOG
          </div>
      
      <Router>
        <div>
          <div className="container my-2">
          <div className="row">
            <div className="col-md-4 text-center border rounded-left">
            <Link to="/">Home</Link>{' '}</div>
            <div className="col-md-4 text-center border">
            <Link to="/id">ID</Link>{' '}</div>
            <div className="col-md-4 text-center border rounded-right">
            <Link to="/create">CREATE</Link></div>
            </div>
          </div>

          <Switch>
          <Route exact path="/" component={PostIndex} />
          <Route exact path="/create" component={PostsNew} />
          <Route exact path="/:id" component={PostsDetail} />
          <Redirect to="/"/>
          </Switch>

        </div>
      </Router>
        


      </div>
    );


export default App;
