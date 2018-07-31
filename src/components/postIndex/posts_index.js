import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {fetchPosts} from '../../actions/index';


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        console.log('mount');
    }

    render () {
        return (
            <div className="container mx-5">

            <div className="title mt-2 text-left my-5 text-info mx-5">
                <h1>Posts</h1>
            </div>

            {this.props.posts.map((post) => {
                return (
                        <div key={post.id} className="container my-3 mx-5 postid" >
                            <Link to={`/${post.id}`} className="clickpost"
                            //params={{id: post.id}}
                            >
                            <div className="border rounded">
                                <h3>{post.title}</h3>
                                <div className="text-black-50">
                                <p>{post.body.slice(0,300)}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        )
                     }
                )
            }
            
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}
export {PostsIndex}
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);