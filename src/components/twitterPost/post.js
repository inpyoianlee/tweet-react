import './post.css';
import Avatar from '../avatar/avatar';
import PostText from '../postText/postText';
import DateTime from '../dateTime/dateTime';
import LikesAndRetweets from '../likesAndRetweets/likesAndRetweets'

const Post = () => {
    return (
        <div className="post-container">
            <div className="post">
                <Avatar />
                <PostText />
                <DateTime />
                <LikesAndRetweets />
            </div>
        </div>
    );
}

export default Post;