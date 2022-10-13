import React, {useEffect, useState} from "react";
import  {getUser}  from "../utils/fetchData"

export default function AccueilCompo() {

  const [name, setName] = useState(null);

  async function afficheData () {
    try{
      const userResponse = await getUser();
      setName(userResponse.data.data.userInfos.firstName);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
   afficheData()
  }, [])

    return (
      <div className="header">
        <p>Bonjour, {name}</p>
      </div>
    );
  }