import React, {Component} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPost,deletePost,fetchComments,deleteComment,addComment } from '../../actions/index';
import { Button, Input } from 'reactstrap';

class PostsDetail extends Component {

    constructor (props) {
        super(props);

        this.state = {
            body: '',
            postId:this.props.match.params.id
        }  
    }

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }
    render() {
        if(!this.props.post)
            return<div>Loading...</div>
        return (
        <div> 
                    <div className="mx-5 text-info text-center">
                    <h1>{this.props.post.title} </h1> </div>
            

                    <div className="p-2 mt-3 mb-5 mx-5 text-black-50 text-center lead text-justified border rounded paragra">
                    <p>{this.props.post.body}</p> </div>

                    <div align="right mr-1">
                    <Button className="btn btn-danger" onClick = {() => {this.props.deletePost(this.props.post.id).then(() => this.props.history.push('/'))}} > Delete This Post </Button>
                    </div>

                <div className="p-2 m-3 text-primary">
                    <h3>Comments</h3>
                </div>
                    <div className="mx-5">
                        {this.props.comments.map((comment) => {
                        return (
                            <div key="comment.id" className="row mx-5 border rounded my-2">
                                    {/* <div className="col-s-1 my-1 pt-2 pl-2">
                                            <p>{comment.id}</p>
                                    </div> */}
                                    <div className="col my-1 pt-2 mx-5" align="left"> 
                                    <p>{comment.body}</p>
                                    </div>
                                    <div className="col m-1 pt-1" align="right">
                                    <Button className="btn btn-danger" onClick = {() => this.props.deleteComment(comment.id).then(() =>this.props.fetchComments(this.props.match.params.id) )} > Delete </Button>
                                    </div>
                            </div>
                                )
                            }
                        )
                        }

                        <div className="mx-5" align="center">
                                <form onSubmit ={(event) => {event.preventDefault(); console.log(this.state); this.props.addComment(this.state).then(() =>this.props.fetchComments(this.props.match.params.id) );this.setState({body:''})}} > 
                                <div className="col-md-8 pl-3 pt-3">
                                <Input 
                                    placeholder='Type your Comment'
                                    value={this.state.body}
                                    onChange={event => this.setState({body:event.target.value})  } required /> 
                                </div>

                            <div className="col-md-8 pl-3 pt-3"> 
                                <Input type="submit" value="comment" className="btn btn-primary" />
                                </div>
                                </form>
                        </div>



                        </div>


        </div>
        )
    }
}


PostsDetail.PropTypes={
    fetchPost: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,

}

export {PostsDetail}

function mapStateToProps(state) {
    return {post:state.posts.post,
            comments:state.comments.all}

}

export default connect (mapStateToProps, {fetchPost,deletePost,fetchComments,deleteComment,addComment})(PostsDetail);