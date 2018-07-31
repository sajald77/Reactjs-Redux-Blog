import React, {Component} from 'react';
import { Input } from 'reactstrap';
import {connect} from 'react-redux'
import {createPost} from '../../actions/index';

class PostsNew extends Component {

    constructor(props){
        super(props);
         this.state = {
            title:'',
            body:''}
         }

    render () {
        return (
            <div align="center" className="mt-4 pt-4">
            <form onSubmit ={(event) => {event.preventDefault(); console.log(this.state); this.props.createPost(this.state).then(() => this.props.history.push('/'))}} > 
            <div className="col-md-8 pl-3 pt-3">
            <Input 
                placeholder='Title'
                value={this.state.title}
                onChange={event => this.setState({title:event.target.value})  } required /> 
            </div>

            <div className="col-md-8 pl-3 pt-3">

            <textarea rows="6" cols="99" placeholder="main content" 
            value={this.state.body}
            onChange={event => this.setState({body:event.target.value}) } required />
            
            </div>

           <div className="col-md-8 pl-3 pt-3"> 
            <Input type="submit" className="btn btn-primary" />
            </div>
            </form>
        </div>
        )
    }
}

//connect: first argument is mapstate to props, 2nd is mapdispatch to props
//reduxform: 1st is form config...rest as connect

export default connect(null,{createPost})(PostsNew);
