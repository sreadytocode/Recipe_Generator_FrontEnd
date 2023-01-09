import { useState, useEffect } from "react";
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi, updateComment as updateCommentApi} from './dummyDataComments/CommentsData';
import Comment from './Comment'; 
import CommentForm from './CommentForm'; 
import './Comments.css'

const Comments  = ({currentUserId}) => {     // we need to pass in our props the currentUserId (in App.js -- <Comments currentUserId="1"/>) which will pass from our parent
    
    const [backendComments, setbackendComments] = useState([]);  // the state where we will store all the comments we get from the backend . An empty array by default as we don't have any data and the backend comments are blank 
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter(
        backendComment => backendComment.parentId === null
        );              // we take this comments with parentId === null which means this comments don't have parentId which is why we are filtering by this predicate(a function that returns a single TRUE or FALSE) [backendComment.parentId === null)], and we are accessing this backendComment 
    
    // We need to create a function which returns replies for an specific comment: 
    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a, b) => // we are getting the array of our replies but we want the newest comments to be on the top 
        new Date (a.createdAt).getTime() - new Date(b.createdAt).getTime);     // we need to convert createdAt ISO string to JS date // this sorts our replies in ascendent order
    };

    const addComment = (text, parentId) => {
        // console.log("addComment", text, parentId);     // parentId , because when we create a reply we create a comment which is the child of another comment
        createCommentApi(text, parentId).then(comment => {
            setbackendComments([comment, ...backendComments]); // we want our new comment to be at the beginning , this is why first the comment and after that spreading the backendComments that we already have 
            setActiveComment(null);    // this makes the bos form disapear when we submit a reply 
        }); 
    };  

    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure that you want to delete this comment?')) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId);
                setbackendComments(updatedBackendComments);
            });
        }
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => { 
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return {...backendComment, body: text}
                }
                return backendComment
            });
            setbackendComments(updatedBackendComments);
            setActiveComment(null);
        })
    }

    useEffect(() => {
        getCommentsApi().then(data => {      //the data will be the array of the backendComments
            setbackendComments(data);        // this is why here we can set the data we got from the backend
        })

    }, [])

    return (
      <div className="comments">
       {/* <h3 className="comments-title">Comments</h3> */}
       <div className="comment-form-title">Leave a comment:</div>
       <CommentForm submitLabel="Submit Comment" handleSubmit={addComment}/>
       {/* the container for the list of comments: */}
       <div className="comments-container">
       {/* and inside we want map through our comments and some of the comments are actuallly replies, so here we must first of all get our roots for comments and then render 
       their replies this is why on the line 8 we have to create a new variable rootComments */}
       {rootComments.map(rootComment => (
        <Comment key={rootComment.id} 
        comment= {rootComment} 
        replies={getReplies(rootComment.id)}
        currentUserId={currentUserId}
        deleteComment={deleteComment}
        updateComment={updateComment}
        activeComment={activeComment}
        setActiveComment={setActiveComment}
        addComment={addComment}
        />
       ))}      
       </div>   
      </div>
    );
  }
  
  export default Comments;
