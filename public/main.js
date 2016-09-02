'use strict';

function onSubmit(form) {
	let data ={
		user:  form.elements['user' ].value,
		email: form.elements['email'].value
	};

	
	let = request('/users', data);
	
	if (request==='100'){
		form.hidden = true;
	}

	console.log(data,result);
}