// Scroll reveal
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('show');
      });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Simple mobile navigation
    const menu = document.querySelector('.menu');
    const links = document.querySelector('.links');
    menu.addEventListener('click',()=>{
      const open = links.style.display === 'flex';
      links.style.display = open ? '' : 'flex';
      if(!open){
        links.style.position='absolute';
        links.style.top='84px';
        links.style.left='0';
        links.style.right='0';
        links.style.padding='20px';
        links.style.flexDirection='column';
        links.style.background='#100b2e';
        links.style.borderBottom='1px solid rgba(255,255,255,.12)';
      }
    });
