import React, {Component} from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments = () =>{
        const {comments} = this.props;
        return comments.map((comment,i)=> <li key={i}>{comment}</li>)
    };

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state)=> {
    return {comments: state.comments};
};

export default connect(mapStateToProps, null)(CommentList);