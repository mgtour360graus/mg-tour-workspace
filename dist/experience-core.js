'use strict';
// Shared by the editor and the portable export; no third-party tour engine.
function createMGExperience(){
 const effects={fade:'Dissolução',cut:'Corte direto',zoom:'Aproximação',slide:'Deslizamento',wipe:'Varredura',iris:'Íris',color:'Passagem por cor',cinema:'Cinema'};
 const shapes={arrow:'Seta',circle:'Círculo',pin:'Marcador',plate:'Placa'};
 const animations={none:'Sem animação',pulse:'Pulsar',float:'Flutuar',glow:'Brilhar'};
 const clamp=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.max(min,Math.min(max,Number(v))):fallback;
 function view(v={}){return{yaw:clamp(v.yaw,-180,180,0),pitch:clamp(v.pitch,-85,85,0),fov:clamp(v.fov,35,110,80)}}
 function point(h={}){return{shape:Object.hasOwn(shapes,h.shape)?h.shape:'arrow',animation:Object.hasOwn(animations,h.animation)?h.animation:'none',size:clamp(h.size,24,96,40),rotation:clamp(h.rotation,-180,180,0),opacity:clamp(h.opacity,20,100,100),color:/^#[a-f\d]{6}$/i.test(h.color)?h.color:'#d5f179',transition:Object.hasOwn(effects,h.transition)?h.transition:'inherit',arrival:h.arrival?view(h.arrival):null}}
 function config(p={}){return{effect:Object.hasOwn(effects,p.transition)?p.transition:'fade',duration:clamp(p.transitionDuration,150,2000,500),color:/^#[a-f\d]{6}$/i.test(p.transitionColor)?p.transitionColor:'#132c29'}}
 function setView(engine,v){if(!engine||!v)return;const clean=view(v);engine.yaw=clean.yaw*Math.PI/180;engine.pitch=clean.pitch*Math.PI/180;engine.fov=clean.fov;engine.draw()}
 function getView(engine){return view({yaw:((engine.yaw*180/Math.PI+180)%360+360)%360-180,pitch:engine.pitch*180/Math.PI,fov:engine.fov})}
 function stylePoint(button,h){const s=point(h);button.dataset.shape=s.shape;button.dataset.animation=s.animation;button.style.width=s.size+'px';button.style.height=s.size+'px';button.style.opacity=s.opacity/100;button.style.borderColor=s.color;button.style.color=s.color;button.style.setProperty('--point-angle',s.rotation+'deg');button.textContent=s.shape==='plate'?h.label:s.shape==='circle'?'◉':s.shape==='pin'?'⌖':h.type==='scene'?'↑':h.type==='info'?'i':'↗';if(s.shape==='plate'){button.style.width='auto';button.style.maxWidth='180px';button.style.padding='8px 14px';button.style.fontSize='12px'}}
 function capture(engine){if(!engine?.ready)return null;try{engine.draw();return engine.c.toDataURL('image/jpeg',.85)}catch{return null}}
 function transition(stage,engine,snapshot,options={}){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!stage||!snapshot||options.effect==='cut'||reduced)return;
  const layer=document.createElement('img');layer.className='mg-transition-layer';layer.alt='';layer.src=snapshot;stage.append(layer);
  const started=performance.now();let cancelled=false;const cleanup=()=>{cancelled=true;layer.remove()};
  const wait=()=>{if(cancelled||!stage.isConnected)return cleanup();if(!engine.ready){if(performance.now()-started>12000)return cleanup();requestAnimationFrame(wait);return;}
   const effect=options.effect||'fade',duration=options.duration||500;
   const frames={fade:[{opacity:1},{opacity:0}],zoom:[{transform:'scale(1)',opacity:1},{transform:'scale(1.3)',opacity:0}],slide:[{transform:'translateX(0)',opacity:1},{transform:'translateX(-100%)',opacity:0}],wipe:[{clipPath:'inset(0 0 0 0)'},{clipPath:'inset(0 100% 0 0)'}],iris:[{clipPath:'circle(150% at 50% 50%)'},{clipPath:'circle(0% at 50% 50%)'}],cinema:[{transform:'scale(1)',filter:'blur(0px)',opacity:1},{transform:'scale(1.18)',filter:'blur(8px)',opacity:0}]}[effect];
   if(effect==='color'){layer.style.background=options.color||'#132c29';layer.style.objectFit='cover';const cover=document.createElement('div');cover.className='mg-transition-layer';cover.style.background=options.color||'#132c29';stage.append(cover);cover.animate([{opacity:0},{opacity:1},{opacity:0}],{duration,easing:'ease-in-out'}).finished.finally(()=>cover.remove());}
   layer.animate(frames||[{opacity:1},{opacity:0}],{duration,easing:'ease-in-out',fill:'forwards'}).finished.finally(cleanup);
  };requestAnimationFrame(wait);
 }
 return{effects,shapes,animations,view,point,config,setView,getView,stylePoint,capture,transition};
}
const MGExperience=createMGExperience();
