const form1=document.querySelector('#name');
const form2=document.querySelector('#newlist');
const btn1=document.querySelector('#btn1');
const btnw=document.querySelector('#btn2')
const input1=document.querySelector('#personname');
const input2=document.querySelector('#fact');
const name1=document.querySelector('#pname');
const list=document.querySelector('#factlist');
const uname=document.querySelector('#uname');
const form3=document.querySelector('#yourname');
const input3=document.querySelector('#namae');
form1.addEventListener('submit',function(e){
e.preventDefault();
name1.innerText=input1.value;
});

form3.addEventListener('submit',function(e){
    e.preventDefault();
    uname.innerText=input3.value;
})
form2.addEventListener('submit',function(e){
    e.preventDefault();
    let factl=document.createElement('li');
    factl.innerText=input2.value;
    list.append(factl);
})
list.addEventListener('click',function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});