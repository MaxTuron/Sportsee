import axios from "axios"; 

const getUser = axios.create({
  baseURL : `http://localhost:3000/user/12`,
  headers: {
    Accept: 'application/json'
  }

});

const getSessions= axios.create({
    baseURL : `http://localhost:3000/user/12/average-sessions`,
    headers: {
      Accept: 'application/json'
    }
  
  });

  const getStatistiques= axios.create({
    baseURL : `http://localhost:3000/user/12/activity`,
    headers: {
      Accept: 'application/json'
    }
  
  });
  
export {
    getUser,
    getSessions,
    getStatistiques
} 
