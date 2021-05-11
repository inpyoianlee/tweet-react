import './avatar.css';

const Avatar = ({ img, handle ,userName }) => {
    return (
        <div className="avatar-container">

            <div className="left">
                <div className="avatar-img">
                    <img className="avatar-img__pic" src={img} alt="avatar" />
                </div>
                <div className="names">
                    <div className="avatar-screen-name">
                        {handle}
                    </div>
                    <div className="avatar-user-name">
                        {userName}
                    </div>
                </div>
            </div>

            <div className="right">
            <div className="twitter-logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo.png" alt="twitter-logo" className="twitter-logo__pic" />
            </div>
            </div>

        </div>
    );
}

export default Avatar;