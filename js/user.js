/* user section ------------- start */

const divUser = document.querySelector('.section-user');

document.querySelector('.btn-user').addEventListener('click',function(){   
    if(divUser.classList.contains('inactive')){
        divUser.classList.remove('inactive');
        divUser.classList.add('active');
        document.body.classList.add('divActive');
    }
})
document.querySelector('.btn-close-user').addEventListener('click',function(){   
    if(divUser.classList.contains('active')){
        divUser.classList.remove('active');
        divUser.classList.add('inactive');
        document.body.classList.remove('divActive');
    }
})

/*  btn-container ------------- start */
const btnLogin = document.querySelector('.btn-login');
const formLogin = document.querySelector('.login-form');
const btnSignUp = document.querySelector('.btn-signup');
const formSignUp = document.querySelector('.signup-form');
btnLogin.addEventListener('click',function(){
    if( btnLogin.classList.contains('inactive')){
        /*  buttons */
        btnSignUp.classList.remove('active');
        btnSignUp.classList.add('inactive');
        btnLogin.classList.remove('inactive');
        btnLogin.classList.add('active');
        /*  forms */
        formLogin.classList.remove('inactive');
        formLogin.classList.add('active');
        formSignUp.classList.remove('active');
        formSignUp.classList.add('inactive');
        /*  clear forms data*/
        document.querySelector('.signup-form').reset();
        document.querySelector('.password-safety').innerHTML = '';
        document.querySelector('.password-re-safety').innerHTML = '';
    }
})


btnSignUp.addEventListener('click',function(){
    if( btnSignUp.classList.contains('inactive')){
        /*  buttons */
        btnLogin.classList.remove('active');
        btnLogin.classList.add('inactive');
        btnSignUp.classList.remove('inactive');
        btnSignUp.classList.add('active');
        /*  forms */
        formSignUp.classList.remove('inactive');
        formSignUp.classList.add('active');
        formLogin.classList.remove('active');
        formLogin.classList.add('inactive');
        /*  clear forms data*/
        document.querySelector('.login-form').reset();
        document.querySelector('.login-success').innerHTML = '';
    }
})
/*  btn-container ------------- end */

/*  signup ------------- start */
const suFN = document.querySelector('.signup-FN');
const suLN = document.querySelector('.signup-LN');
const suEmail = document.querySelector('.signup-email');
const suPwd = document.querySelector('.signup-password');
const suRePwd = document.querySelector('.signup-re-password');

/*  check pwd safety */
suPwd.addEventListener('input',function(){
    const pwdSafety = document.querySelector('.password-safety');
    if(suPwd.value.length<3){
        pwdSafety.innerHTML = 'weak';
        pwdSafety.style.color = 'red'
    }
    if(suPwd.value.length>3 && suPwd.value.length<7){
        pwdSafety.innerHTML = 'ok';
        pwdSafety.style.color = 'orange'
    }
    if(suPwd.value.length>7){
        pwdSafety.innerHTML = 'strong';
        pwdSafety.style.color = 'green'
    }
})

/*  signUp submit and check pwd match */
document.querySelector('.signup-form').addEventListener('submit',function(e){
    e.preventDefault();
    const pwdReSafety = document.querySelector('.password-re-safety');
    const signUpSuccess = document.querySelector('.signup-success');
    if(suPwd.value !== suRePwd.value){
        pwdReSafety.innerHTML = "password not match";
        pwdReSafety.style.color = "red"
    } else{
        pwdReSafety.innerHTML = '';
        signUpSuccess.innerHTML = "Success! Please Login.";
        signUpSuccess.style.color = 'green';
        /*  convert user input to User object */
        let user = new User(suFN.value,suLN.value,suEmail.value,suPwd.value);
        /*  store User object to localstorage */
        localStorage.setItem('UserInfo',JSON.stringify(user))
        console.log(user)
        document.querySelector('.signup-form').reset();
        document.querySelector('.password-safety').innerHTML = '';
    }
})

function User(fn,ln,email,pwd){
    this.fn = fn;
    this.ln = ln;
    this.email = email;
    this.pwd = pwd;
}
/*  signup ------------- end */

/*  login ------------- start */
const liName = document.querySelector('.user-name-in');
const liPwd = document.querySelector('.user-password-in');
const liSuccess = document.querySelector('.login-success');
const liForm = document.querySelector('.login-form');

liForm.addEventListener('submit',function(e){
    e.preventDefault();
    /*  get UserInfo object from localstorage and convert to definded */
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));

    /*  check login info */
    if(!userInfo){
        liSuccess.innerHTML='No exist account. Please sign up';
        liSuccess.style.color = 'red';
    }else{
        if(userInfo.email == liName.value && userInfo.pwd == liPwd.value){
            liSuccess.innerHTML = "Login Success. Welcome: " + userInfo.fn;
            liSuccess.style.color = 'green';
            setTimeout(function(){
                liForm.reset();
                liSuccess.innerHTML = '';
                if(divUser.classList.contains('active')){
                    divUser.classList.remove('active');
                    divUser.classList.add('inactive');
                }
            },1000)
        }else{
            liSuccess.innerHTML = "Email and password do not match.";
            liSuccess.style.color = 'red';
        }
    }
})
/*  login ------------- end */

/* user section ------------- end */