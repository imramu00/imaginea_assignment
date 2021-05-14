const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('check');
const phone = document.getElementById('phone');


const fns=document.getElementById("fns");
const lns=document.getElementById("lns");
const uns=document.getElementById("uns");
const os=document.getElementById("os");
const pas=document.getElementById("pas");
const pasc=document.getElementById("pasc");
const ems=document.getElementById("ems");
const phs=document.getElementById("phs");

var fnr = /^[a-zA-Z]+$/;
var un= /^[a-zA-Z0-9\_]+$/;
var phn = /^\d+$/;
var passw=  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+$/;
var emm=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-z]+)*$/;

var fnm=first.value.match(fnr);
var lnm=last.value.match(fnr);
var phnn=phone.value.match(phn);
var pasn=password.value.match(passw);
var unm=username.value.match(un);
var emm=email.value.match(emm);

function myFunction() {
    flag=0;
    if(first.value === '') {
		fns.innerText="Cannot be blank";
        flag=1;
	} 
    else if(fnm === null){
        fns.innerText="Only alphabets allowed";
        flag=1;
    }

    if(last.value === '') {

		lns.innerText="Cannot be blank";
        flag=1;
	} 
    else if(lnm === null){
        lns.innerText="Only alphabets allowed";
        flag=1;
    }

    if(username.value === '') {

		uns.innerText="Cannot be blank";
        flag=1;
	} 
    else if(unm === null){
        uns.innerText="special chars not allowed";
        flag=1;
    }

    if(phone.value === '') {

		phs.innerText="Cannot be blank";
        flag=1;
	} 
    else if(phnn === null){
        phs.innerText="Only numbers allowed";
        flag=1;
    }
    else if(phone.value.length != 10 )
    {
        phs.innerText="Should contain 10 numbers";
        flag=1;
    }

    if(password.value === ''){
        pas.innerText="Enter a password";
        flag=1;
    }
    else if(password.value.length<8 && password.value.length>20)
    {
        pas.innerText="Should be 8-20 in length";
        flag=1;
    }
    else if(pasn === null)
    {
        pas.innerText="Should have small,caps,number,special char";
        flag=1;
    }
    
    if(password.value != password2.value)
    {
        pasc.innerText="Password doesn't match";
        flag=1;
    }

    if(emm === null)
    {
        ems.innerText="Enter a Valid Email ID";
        flag=1;
    }
    if(flag == 0)
    {
        alert("Submission successfull")
    }
}
