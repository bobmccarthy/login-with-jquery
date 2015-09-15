(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var email = $('#email');
	var emailError = $('.emailError');
	var password = $('#password');
	var passwordError = $('.passwordError');
	var button = $('#logIn');
	var hasError = false;
	var combo = $('#combo');

	button.on('click', function (e) {
		e.preventDefault();
		emailError.html('');
		passwordError.html('');
		if (email.val().indexOf('@') === -1) {
			hasError = true;
			emailError.html('Please Enter An Valid Email Address.');
		}
		if (email.val() === '') {
			hasError = true;
			emailError.html('Please enter an email address before logging in.');
		}
		if (password.val() === '') {
			hasError = true;
			passwordError.html('Please enter a password before logging in.');
		}

		if (!hasError === true) {
			if (email.val() === 'aaron@theironyard.com' && password.val() === 'password123' || email.val() === 'admin@google.com' && password.val() === 'pandas' || email.val() === 'bob@gmail.com' && password.val() === '1234') {
				window.location.replace('http://www.theironyard.com');
			} else {
				combo.html('Your password and username did not match up.');
			}
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map