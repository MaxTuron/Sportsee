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
        <p>{post.keyData.calorieCount}cal</p>
        <p>{post.keyData.proteinCount}prot</p>
        <p>{post.keyData.carbohydrateCount}carbon</p>
        <p>{post.keyData.lipidCount}lipid</p>
      </div>
    );
  }