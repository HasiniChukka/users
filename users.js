const db = require('./db');

async function registration(registrationData){

    const result = await db.query(
      `INSERT INTO users 
      (email, password, name) 
      VALUES 
      ('${registrationData.email}', '${registrationData.password}', '${registrationData.name}')`
    );
  
    let message = 'Error in registartion';
  
    if (result.affectedRows) {
      message = 'Registartion successful';
    }
  
    return {message};
  }
  
  
  


  

async function login(loginData) {
  const result = await db.query(
    `SELECT * FROM users WHERE email = '${loginData.email}' AND password = '${loginData.password}'`
  );

  let message = 'Invalid email or password';
  let userData = null;

  if (result.length > 0) {
    message = 'Login successful';
    userData = result[0];
  }

  return { message, userData };
}

module.exports = {
  registration,
  login
};