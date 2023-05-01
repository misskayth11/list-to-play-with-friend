const form=document.querySelector('#form1');
const form2=document.querySelector('#form2');
const input=document.querySelector('#listname');
const input2=document.querySelector('#input2')
const btn=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2')
const list=document.querySelector('#odlist');
const name=document.querySelector('#namel');
const form3=document.querySelector('#yourname');
const username=document.querySelector('#listcreater');
const input3=document.querySelector('#namae');
form.addEventListener('submit',function(e){
    e.preventDefault();
    name.innerText=input.value;
});
form2.addEventListener('submit',function(e){
    e.preventDefault();
    const content=document.createElement('li');
    content.innerText=input2.value;
    list.append(content);
});
list.addEventListener('click',function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});
form3.addEventListener('submit',function(e){
    e.preventDefault();
    username.innerText=input3.value;
})