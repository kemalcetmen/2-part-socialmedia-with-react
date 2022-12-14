import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import './TweetBox.css'

const TweetBox = ()=> {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   displayName: "Rafeh Qazi",
    //   username: "cleverqazi",
    //   verified: true,
    //   text: tweetMessage,
    //   image: tweetImage,
    //   avatar:
    //     "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    // });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://static.euronews.com/articles/stories/05/25/06/18/773x435_cmsv2_9081ff62-6997-5ba5-b7dc-42950c83a7d5-5250618.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;