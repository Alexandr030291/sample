'use strict';

function onSubmit(form) {
	let data ={
		user:  form.elements['user' ].value,
		email: form.elements['email'].value
	};

	
	let = request('/users', data);
	
	if (request==='100'){
		form.hidden = true;
		helloWord.innerHTML = hello (data.user)
	}

	console.log(data,result);
}

function hello (text){
	return 'Привет, '+ text;
}

if (typeof exports==='object'){
	exports.hello = hello;
}