import React, { useState } from "react";
import {TweetBox,Post} from "../index";
import styles from '../../styles/Home.module.css'

const FlowLocal = ()=> {

const [posts2, setPosts2] = useState([{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},{
  text:"blsa",
  username:"hazretikemal",
  avatar: "",
},
]);

  return (
    <div className={styles.feed}>  
      <TweetBox />
      <div className={styles.feeds}>
        
        { posts2.map((post) => (
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

export default FlowLocal;