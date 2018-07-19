import React, {Component} from 'react';

export default class Comments extends Component{
    constructor(props) {
        super(props)
    }

    renderComment(comment, i) {
        let {removeComment, params: {postId}} = this.props;
        return (
            <div className="comment" key ={i} >
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={() => removeComment(postId, i)} className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addComment, params:{postId}} = this.props;
        let {author, comment} = this.refs;
        author = author.value;
        comment = comment.value;
        addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }
        

    render() {
        let {postComments} = this.props;
        return (
            <div className="comments">
               {postComments.map((comment, index) => this.renderComment(comment, index))}
               <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <input ref="author" placeholder="Author" type="text"/>
                    <input ref="comment" placeholder="Comment" type="text"/>
                    <input type="submit" hidden/>
               </form>
            </div>
        )
    }
}