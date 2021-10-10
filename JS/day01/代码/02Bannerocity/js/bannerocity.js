// function validateNonEmpty (inputField) {
// 	if(inputField.value.length==0){
// 		alert("Please enter a value");
// 		return false;
// 	}
// 	return true;
// }

function validateNonEmpty (inputField,helpText) {
	if(inputField.value.length==0){
		if(helpText!=null){
			helpText.innerHTML = "Please enter a value.";
		}
		return false;
	}
	else{
		if(helpText!=null){
			helpText.innerHTML = "";
		}
		return true;
	}
	
}

function validateLength(minLength,maxLength,inputField,helpText){
	if(inputField.value.length<minLength||inputField.value.length>maxLength){
		if(helpText!=null){
			helpText.innerHTML = "Please enter a value."+minLength+"to"+maxLength+
			"characters in length.";
		}
		return false;
	}
	else{
		if(helpText!=null){
			helpText.innerHTML = "";
		}
		return true;
	}
}

function validateZIPCode (inputField,helpText) {
	if(inputField.value.length!=5){
		if(helpText!=null){
			helpText.innerHTML = "Please enter exactly five digits.";
		}
		return false;
	}
	else if(isNaN(inputField.value)){
		if(helpText!=null){
			helpText.innerHTML = "Please enter a number.";
		}
		return false;
	}
	else{
		if(helpText!=null){
			helpText.innerHTML = "";
		}
		return true;
	}
	
}

function placeOrder(form){
	console.log(form);
	if(validateLength(1,32,form["message"],form["message_help"])&&
		validateZIPCode(form["zipcode"],form["zipcode_help"])&&
		validateNonEmpty(form["name"],form["name_help"])){
		form.submit();
	}else{
		alert("I am sorry but there is something wrong with the order information.");
	}
}

// 正则表达式、输入字符串、辅助信息文字、辅助信息元素，均以自变量形式传入
function validateRegEx(regex,inputStr,helpText,helpMessage){
	if(!regex.test(inputStr)){
		if(helpText != null){
			helpText.innerHTML = helpMessage;
		}
		return false;
	}
	else {
		if(helpText != null){
			helpText.innerHTML = "";
		}
		return true;
	}
}

function validateDate(inputField,helpText){
	if(!validateNonEmpty(inputField,helpText))
		return false;
	else
		return validateRegEx(/^\d{2}\/\d{2}\/\d{4}$/,inputField.value,helpText,
		"Please enter a date(for example,01/14/1975).");
}

function validatePhone(inputField,helpText){
	if(!validateNonEmpty(inputField,helpText)){
		return false;
	}
	else
		return validateRegEx(/^\d{3}-\d{3}-\d{4}$/,inputField.value,helpText,
		"Please enter a phone number (for example, 123-456-7890).");
}

function validateEmail(inputField,helpText){
	if(!validateNonEmpty(inputField,helpText))
		return false;
	else
		return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/,
		inputField.value,helpText,
		"Please enter an email address(for example,johndoe@acme.com).");
}