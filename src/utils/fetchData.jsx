import axios from "axios"; 

const getUser = axios.create({
  baseURL : `http://localhost:3000/user/`,
  headers: {
    Accept: 'application/json'
  }
});

/**
 * Function who get the user name from the "main data" tab of the API.
 * @param { string } userId 
 * @returns {object}
 */
async function getName(userId) {
  const response = await getUser.get(`/${userId}`);
  return {
    userId,
    name: response.data.data.userInfos.firstName,
  };
}

/**
 * Function who get the calories, proteines, glucids and lipids from the API and return then as an object with the userID.
 * @param { number } userId 
 * @returns {object}
 */
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

/**
 * Function who get the user score as a decimal number and convert it into an integer to display it easyly.
 * @param { number } userId 
 * @returns {object}
 */
async function getUserScore(userId) {
  const response = await getUser.get(`/${userId}`);
  let userScoreValue = response.data.data.score ? response.data.data.score : response.data.data.todayScore
  userScoreValue = userScoreValue*100;
  return {
    userScore : userScoreValue
  };  
}

/**
 * Function who get the user session with the day and the session lenght from the "average session" tab of the API.
 * @param { number } userId 
 * @returns {object}
 */
async function getSessions(userId) {
  const response = await getUser.get(`/${userId}/average-sessions`);
  return {
    userId,
    sessions: response.data.data.sessions
  };  
}

/**
 * Function who get the user session with the day, the weight and the calories from the "activity" tab of the API.
 * @param { number } userId 
 * @returns {object}
 */
 async function getStatistiques(userId) {
  const response = await getUser.get(`/${userId}/activity`);
  return {
    userId,
    sessions: response.data.data.sessions
  };  
}

/**
 * Function who get the user performances with the kind label and the data (value and kind number) from the "performance" tab of the API.
 * @param { number } userId 
 * @returns {object}
 */
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
