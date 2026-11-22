const roles=['Student','Developer','Programmer','Problem solver'];
const lines=[
 '<span class="k">const</span> <span class="a">rakesh</span> = {',
 '  <span class="w">degree</span>: <span class="s">"B.Tech CSE"</span>,',
 '  <span class="w">role</span>: <span class="s">"Developer"</span>,',
 '  <span class="w">languages</span>: [<span class="s">"Python"</span>, <span class="s">"JavaScript"</span>],',
 '  <span class="w">web</span>: [<span class="s">"HTML"</span>, <span class="s">"CSS"</span>],',
 '  <span class="w">learning</span>: [<span class="s">"DSA"</span>, <span class="s">"C++"</span>, <span class="s">"Java"</span>],',
 '  <span class="w">building</span>: <span class="p">true</span>,',
 '};','',
 '<span class="c">// ship it.</span>'];
const code=document.getElementById('code'),role=document.getElementById('role');
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(still){code.innerHTML=lines.join('\n');role.textContent=roles.slice(0,3).join(' | ');}
else{
  let i=0;(function next(){code.innerHTML=lines.slice(0,++i).join('\n');if(i<lines.length)setTimeout(next,260);})();
  let r=0,c=0,del=false;
  (function tick(){const w=roles[r];c+=del?-1:1;role.textContent=w.slice(0,c);let d=del?40:85;
    if(!del&&c===w.length){del=true;d=1400}else if(del&&c===0){del=false;r=(r+1)%roles.length;d=300}
    setTimeout(tick,d);})();
}
const items=['HTML5','CSS3','JavaScript','Python','Git','GitHub','C++','Java','DSA','Problem solving'];
document.getElementById('track').innerHTML=items.concat(items).map(t=>'<span>'+t+'</span>').join('');

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});

if(!still&&matchMedia('(hover:hover)').matches){
  const spot=document.getElementById('spot');
  addEventListener('pointermove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px'});
  document.querySelectorAll('.card:not(.ghost)').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const b=card.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top;
      card.style.setProperty('--x',x+'px');card.style.setProperty('--y',y+'px');
      card.style.transform='rotateX('+((y/b.height-.5)*-8)+'deg) rotateY('+((x/b.width-.5)*8)+'deg) translateY(-4px)';
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
}
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t;}catch(e){}
document.getElementById('theme').onclick=()=>{
  const dark=root.dataset.theme?root.dataset.theme==='dark':!matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme=dark?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme);}catch(e){}
};