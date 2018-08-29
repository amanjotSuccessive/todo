import './inputFieldTemplate.html';
import { Template } from 'meteor/templating';


Template.inputField.events({
  'keyup' (event) {
    event.preventDefault();
    let parent = document.getElementById(this.id);
    let targetEle = parent.id+'Error';
    document.getElementById(targetEle).innerHTML = ''; 
   
   
      // const data = Template.instance().data;
      console.log(parent.id);
      let username = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{3,15})$/;
      let city =  /[A-Za-z]{3,20}/;
      let password = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/; 
      let test = city.test(event.target.value);
    /*  ^	                  The password string will start this way
       (?=.*[a-z])	        The string must contain at least 1 lowercase alphabetical character
       (?=.*[A-Z])	        The string must contain at least 1 uppercase alphabetical character
       (?=.*[0-9])	        The string must contain at least 1 numeric character
       (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
       (?=.{8,})           	The string must be eight characters or longer 
    */
      //console.log(test, '=>', event.target.value, ' => ', this.validate, ' => ', this);
   if(test){
    document.getElementById(targetEle).innerHTML = 'ERROR';
    } }
});
