import axios from "axios"; 

const getUser = axios.create({
  baseURL : `http://localhost:3000/user/`,
  headers: {
    Accept: 'application/json'
  }
});

async function getName(userId) {
  const response = await getUser.get(`/${userId}`);
  return {
    userId,
    name: response.data.data.userInfos.firstName
  };  
}

async function getDepenses(userId) {
  const response = await getUser.get(`/${userId}`);
  return {
    userId,
    calories: response.data.data.keyData.calorieCount,
    proteines: response.data.data.keyData.proteinCount,
    glucides: response.data.data.keyData.carbohydrateCount,
    lipides: response.data.data.keyData.lipidCount
  };  
}

async function getUserScore(userId) {
  const response = await getUser.get(`/${userId}`);
  let userScoreValue = response.data.data.score ? response.data.data.score : response.data.data.todayScore
  userScoreValue = userScoreValue*100;
  return {
    userScore : userScoreValue
  };  
}

async function getSessions(userId) {
  const response = await getUser.get(`/${userId}/average-sessions`);
  return {
    userId,
    sessions: response.data.data.sessions
  };  
}

 async function getStatistiques(userId) {
  const response = await getUser.get(`/${userId}/activity`);
  return {
    userId,
    sessions: response.data.data.sessions
  };  
}

async function getIntensite(userId) {
  const response = await getUser.get(`/${userId}/performance `);
  return {
    userId,
    data : response.data.data.data,
    kind : response.data.data.kind
  };  
}

export {
    getUser,
    getName,
    getDepenses,
    getSessions,
    getStatistiques,
    getIntensite,
    getUserScore
} 
