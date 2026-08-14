const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('#navLinks');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

// Gentle dashboard number animation
document.querySelectorAll('.stats b').forEach(el=>{
  const original=el.textContent;
  if(!/[0-9]/.test(original)) return;
  const match=original.match(/[\d.]+/);
  if(!match) return;
  const target=parseFloat(match[0]);
  let current=0, frames=50;
  const suffix=original.replace(match[0],'');
  const step=target/frames;
  const timer=setInterval(()=>{
    current=Math.min(target,current+step);
    el.textContent=(target>=1000?current.toFixed(target%1?1:0):current.toFixed(target%1?1:0))+suffix;
    if(current>=target) clearInterval(timer);
  },18);
});
