import './post.css';
import Avatar from '../avatar/avatar';
import PostText from '../postText/postText';
import DateTime from '../dateTime/dateTime';
import LikesAndRetweets from '../likesAndRetweets/likesAndRetweets'

const Post = ({avatarImg,screenName,userName,postText,time,date,likes,retweets}) => {
    return (
        <div className="post-container">
            <div className="post">
                <Avatar img={avatarImg} handle={screenName} userName={userName} />
                <PostText postText={postText}/>
                <DateTime time={time} date={date}/>
                <LikesAndRetweets likes={likes} retweets={retweets}/>
            </div>
        </div>
    );
}

export default Post;