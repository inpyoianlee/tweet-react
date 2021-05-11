import './App.css';
import Post from './components/twitterPost/post';
import {data} from './resources/data';

function App() {

  return (
    <div className="App">
      {data.map(tweet => {
        return (
          <Post 
            avatarImg={tweet.avatarImg}
            screenName={tweet.screenName}
            userName={tweet.userName}
            postText={tweet.postText}
            time={tweet.time}
            date={tweet.date}
            likes={tweet.likes}
            retweets={tweet.retweets}
          />
        )
      })}
      

    </div>
  );
}

export default App;
