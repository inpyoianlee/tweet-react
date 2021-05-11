import './likesAndRetweets.css';

const LikesAndRetweets = ({likes, retweets}) => {
    return (
        <div className="likes-retweets-container">
            <div className="likes">
                {`🤍 ${likes}`} 
            </div>
            <div className="retweets">
                {`🗨 ${retweets} people are Tweeting about this`}  
            </div>
        </div>
    );
}

export default LikesAndRetweets;