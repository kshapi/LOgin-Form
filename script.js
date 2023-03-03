const userName = document.forms[0].userName;
const userPassword = document.forms[0].userPass;
const loginBtn = document.querySelector('.login-btn');
const invalidName = document.getElementById('warn-name');
const invalidPass = document.getElementById('warn-pass');
const showPass = document.querySelector('.bi-eye');


const space = ' ';
const userDetails  = [];

const login = (event)=> {
  event.preventDefault();
//check both field have some value
//And password field have not any space
//Then submit and get values
  if (userName.value &&
    userPassword.value &&
    !userPassword.value.includes(space)) {
    userDetails[0] = `Name=[${userName.value}] `;
    userDetails[1] = `Password=[${userPassword.value}]`;
  //random id...
    const id = Math.floor(Math.random() * 100);
    localStorage.setItem(id,userDetails);
    
    userName.value = '';
    userPassword .value = '';
    
  }else {
  //check username field have not value throw a error
    if (!userName.value) {
      invalidName.style.display = 'inline';
    };
  //check userpass field have not value throw a error
    if (!userPassword.value) {
      invalidPass.style.display = 'inline';
      showPass.style.display = 'none';
    };
  };
  
};
loginBtn.addEventListener('click',login);


const validate = ()=> {
  //check username field have value then remove error
  if(userName.value) {
    invalidName.style.display = 'none';
  };
  //check userpass field have any space then a error
  if (userPassword.value.includes(space)) {
    invalidPass.style.display = 'inline';
    showPass.style.display = 'none';
  }else {
    //check userpass field have value then remove error
    if (userPassword.value) {
      invalidPass.style.display = 'none';
      showPass.style.display = 'inline-flex';
    };
  };
  
};
userName.addEventListener('input',validate);
userPassword.addEventListener('input',validate);

//show And hide password
const show = ()=> {
 //change type password to text
  if (userPassword.type == 'password') {
    userPassword.type = 'text';
    showPass.setAttribute('class','bi-eye-slash');
  }else {
    //text to password
    userPassword.type = 'password';
    showPass.setAttribute('class','bi-eye');
  };
  
};
showPass.addEventListener('click',show);

//kshapii