// // Get all our DOM elements

// const form = document.getElementById('form'); 
// const username = document.getElementById('username'); 
// const email = document.getElementById('email'); 
// const password = document.getElementById('password'); 
// const password2 = document.getElementById('password2'); 
// const submit = document.getElementById('submit'); 


// // Show input error message
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;

// }


// //Show success outline
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
    
// }
// // Check email is valid , js emal regex gotten from stackoverflwo
// function isValidEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }




// // add event listener to our submit button 


// form.addEventListener('submit', function(e) { 
//     e.preventDefault();
//     console.log('submit');
//     if(username.value === ''){
//         showError(username, 'Username is required'); 
//     }else{
//         showSuccess(username);
//     }
//     if(email.value === ''){
//         showError(email, 'Email is reqired')
//     } else if(!isValidEmail(email.value)){
//      showError(email, 'Email is not valid')
//     }else{
//         showSuccess(email)
//     }

//     if(password.value === ''){
//         showError(password, 'password is reqired')
//     } else{
//         showSuccess(password)
//     }
//     if(password2.value ===''){
//         showError(password2, 'password is reqired')
//     } else{
//         showSuccess(password2)
//     }
        
//     });










/*
Notes 
We can get the button id directly and listen to the click event 


submit.addEventListener('click', function(e) { 
    e.preventDefault();
    console.log('submit');
})




*/

// //<------------------------9 -------------------------->
// // Check Password length, password  
// // Get all our DOM elements

// const form = document.getElementById('form'); 
// const username = document.getElementById('username'); 
// const email = document.getElementById('email'); 
// const password = document.getElementById('password'); 
// const password2 = document.getElementById('password2'); 
// const submit = document.getElementById('submit'); 


// // Show input error message
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;

// }


// //Show success outline
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
    
// }
// // Check email is valid , js emal regex gotten from stackoverflwo
// function isValidEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }



// //Get field name 
// function getFieldName(input) { 
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Check required fields 
// function checkRequired(inputArr) { 
//     inputArr.forEach(function(input) {
//        if(input.value.trim() === '') {
//            //console.log(input.id);
//            showError(input, `${getFieldName(input)} is required`);
//        } else {
//            showSuccess(input);
//        }
//     })
// }



// // add event listener to our submit button 
// form.addEventListener('submit', function(e) { 
//     e.preventDefault();

//    checkRequired([username, email, password, password2]);
        
//     });



//<------------------------ 10 -------------------------->
// Check Length, Email & Password Match

const form = document.getElementById('form'); 
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const password2 = document.getElementById('password2'); 
const submit = document.getElementById('submit'); 


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}


//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}
// Check email is valid , js emal regex gotten from stackoverflwo
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
    }




//Get field name 
function getFieldName(input) { 
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields 
function checkRequired(inputArr) { 
    inputArr.forEach(function(input) {
       if(input.value.trim() === '') {
           //console.log(input.id);
           showError(input, `${getFieldName(input)} is required`);
       } else {
           showSuccess(input);
       }
    })
}

//Check passwords match 
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    } else { 
        showSuccess(input1);
    }
}


// Check Input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
}


// add event listener to our submit button 
form.addEventListener('submit', function(e) { 
    e.preventDefault(); 

   checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6,25);    
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    });


