
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');if(open){links.style.display='flex';links.style.position='absolute';links.style.top='70px';links.style.left='0';links.style.right='0';links.style.padding='18px';links.style.flexDirection='column';links.style.background='#10082d'}else{links.style.display=''}})}
document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();alert('Thanks! The RewardsZapp demo request flow can be connected to your CRM or email service.');}));
