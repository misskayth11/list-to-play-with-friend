alert('楽しもうね！');
const form= document.querySelector('#listform');
const btn=document.querySelector('#btn1');
const input1=document.querySelector('#person');
const list=document.querySelector('#reallist1');
const btn2 =document.querySelector('#btn2');
const form3=document.querySelector('#yourname');
const username=document.querySelector('#listcreater');
const input3=document.querySelector('#namae');

form3.addEventListener('submit',function(e){
    e.preventDefault();
    username.innerText=input3.value;
})


form.addEventListener('submit',function(e){
    e.preventDefault();
    let newLi1=document.createElement('li');
    const personName=input1.value;
    newLi1.innerText=personName;
    list.append(newLi1);

});
list.addEventListener('click',function(e){
    e.target.nodeName === 'LI' && e.target.remove();
});
btn2.addEventListener("click", function(e){
    const newColor=makeRandColor();
    document.body.style.backgroundColor = newColor;

});
const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
};
