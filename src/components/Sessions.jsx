import React, {useState, useEffect} from "react";
import axios from "axios";


export default function AccueilCompo() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/user/12').then((response) => {
      setPost(response.data.data);
      console.log(response.data.data)
    });
  }, []);

  
  if (!post) return null;

    return (
      <div>
        <p>{post.keyData.calorieCount}calories</p>
        <p>{post.keyData.proteinCount}proteines</p>
        <p>{post.keyData.carbohydrateCount}glucides</p>
        <p>{post.keyData.lipidCount}lipides</p>
      </div>
    );
  }