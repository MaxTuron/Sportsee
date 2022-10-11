import React, {useState, useEffect} from "react";
import axios from "axios";

export default function AccueilCompo() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/user/12').then((response) => {
      setPost(response.data.data);
    });
  }, []);

  
  if (!post) return null;

    return (
      <div className="header">
        <p>Bonjour, {post.userInfos.firstName}</p>
      </div>
    );
  }