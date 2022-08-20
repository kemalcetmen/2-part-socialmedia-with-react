import React, { useState} from "react";
import {TweetBox,Post} from "../index";
import styles from '../../styles/Home.module.css'

const FlowFollow = ()=> {
  
  const [posts, setPosts] = useState([{
    text:"blabla",
    username:"hazretikemal",
    avatar: "",
  },{
    text:"blablaxdv",
    username:"hazretikemal",
    avatar: "",
  },{
    text:"blabssdfla",
    username:"hazretikemal",
    avatar: "",
  },{
    text:"blablsdfsfa",
    username:"hazretikemal",
    avatar: "",
  },
]);

  return (
    <div className={styles.feed}>  
      <TweetBox />
      <div className={styles.feeds}>
        
        { posts.map((post) => (
          <Post
            key={post.text}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </div>
      
    </div>
  );
}

export default FlowFollow;