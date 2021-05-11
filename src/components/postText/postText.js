import './postText.css';

const PostText = ( {postText} ) => {
    return (
        <div className="text-container">
            <div className="text">
                {postText}
            </div>
        </div>
    );
}

export default PostText; 