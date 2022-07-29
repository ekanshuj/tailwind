// selectors
const inputEmail = document.getElementsByTagName('input')[0];
const inputPassword = document.getElementsByTagName('input')[1];
const error4Email = document.getElementById('error4Email');
const error4Password = document.getElementById('error4Password');
const btn = document.getElementById('btn');
const form = document.getElementsByTagName('form');

// validation process to be updated
let emailIsValid = false;
let passIsValid = false;

//event listeners
inputEmail.addEventListener('blur', () => {
  //validation
  const regex = /^[\d\w\-\.\&]{5,30}[@][a-z]{5,11}[\.][a-z]{3,7}$/;
  const str = inputEmail.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    emailIsValid = true;
    error4Email.style.display = 'none';
    inputEmail.style.borderBottom = '';
  } else {
    emailIsValid = false;
    error4Email.style.display = 'block';
    inputEmail.style.borderBottom = '3px solid orange';
    inputEmail.style.marginBottom = '0.25rem';
  }
});
inputPassword.addEventListener('blur', () => {
  //validation
  const regex = /^[\d\w\.\-@!#%^&*()=\+\[\]\|\\'";:/\?,<>`~ ]{4,60}/;
  const str = inputPassword.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    passIsValid = true;
    error4Password.style.display = 'none';
    inputPassword.style.borderBottom = '';
  } else {
    passIsValid = false;
    error4Password.style.display = 'block';
    inputPassword.style.borderBottom = '3px solid orange';
    inputPassword.style.marginBottom = '0.25rem';
  }
});

inputEmail.addEventListener('click', () => {
  inputEmail.placeholder = '';
  inputPassword.placeholder = 'Password';
});

inputPassword.addEventListener('click', () => {
  inputPassword.placeholder = '';
  inputEmail.placeholder = 'Email or phone number';
});

btn.addEventListener('click', () => {
  if (emailIsValid && passIsValid) {
    window.location = 'login.html';
  } else {
    console.log('Invalid Form');
  }
})

