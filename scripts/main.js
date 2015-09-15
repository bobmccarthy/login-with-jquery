'use strict';

$(document).ready(function(){




var email=$('#email');
var emailError=$('.emailError');
var password=$('#password');
var passwordError=$('.passwordError');
var button=$('#logIn');
var hasError=false;
var combo=$('#combo');



button.on('click', function(e){
	e.preventDefault();
	emailError.html('');
	passwordError.html('');
	if (email.val().indexOf('@')===-1){
		hasError=true;
		emailError.html('Please Enter An Valid Email Address.');
	}
	if (email.val()===''){
		hasError=true;
		emailError.html('Please enter an email address before logging in.');
	}
	if (password.val()===''){
		hasError=true;
		passwordError.html('Please enter a password before logging in.');
	}
	
	if (!hasError===true){
		if ((email.val()==='aaron@theironyard.com'&&password.val()==='password123')||(email.val()==='admin@google.com'&&password.val()==='pandas')||(email.val()==='bob@gmail.com'&&password.val()==='1234')){
			window.location.replace('http://www.theironyard.com');
		}
		else{
			combo.html('Your password and username did not match up.');
		}

	}
	
});
})	
