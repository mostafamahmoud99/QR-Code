const code=document.querySelector('.code');
const qrInput=document.querySelector('.form input');
const qrImg=document.querySelector('.qr img')
const codeBtn=document.querySelector('.form button');


codeBtn.addEventListener('click',()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return;
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load',()=>{
        code.classList.add('active')
    })
})