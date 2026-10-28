from pathlib import Path
p=Path(__file__).parent/'dist/app.js'
s=p.read_text(encoding='utf-8')
s=s.replace("function studio(){const p=project();", "function studio(){viewer?.destroy();viewer=null;const p=project();")
old="bind('rename-project','click',()=>modal(`<h2>Nome do projeto</h2>${field('Nome','edit-project-name',p.name)}<br><button class=\"dark\" id=\"save-project-name\">Salvar</button>`));$('#modal').addEventListener('click',saveProjectName,{once:true});function saveProjectName(e){if(e.target.id==='save-project-name'){p.name=$('#edit-project-name').value.trim()||p.name;save();closeModal();studio()}}"
new="bind('rename-project','click',()=>{modal(`<h2>Nome do projeto</h2>${field('Nome','edit-project-name',p.name)}<br><button class=\"dark\" id=\"save-project-name\">Salvar</button>`);bind('save-project-name','click',async()=>{p.name=$('#edit-project-name').value.trim()||p.name;await save();closeModal();studio()})});"
assert old in s
s=s.replace(old,new)
s=s.replace("await save();editorSettings();drawPoints();toast('Sequência conectada.","await save();studio();toast('Sequência conectada.")
s=s.replace("await save();closeModal();editorSettings();drawPoints()", "await save();closeModal();studio()")
s=s.replace("function selectScene(i){if(i<0", "function selectScene(i){const fade=project()?.transition==='fade'&&!matchMedia('(prefers-reduced-motion: reduce)').matches;if(i<0")
s=s.replace("sceneIndex=i;studio()}","sceneIndex=i;studio();if(fade)$('#pano')?.animate([{opacity:0},{opacity:1}],{duration:400,easing:'ease-out'})}")
s=s.replace("function applySkin(){const p=project();", "function applySkin(){const p=project();")
s=s.replace("if(!el)return;el.style.background", "if(!el)return;el.style.right='18px';el.style.maxWidth='none';el.style.background")
s=s.replace("p.floorplan=await readData(e.target.files[0]);await save();editorSettings()", "p.floorplan=await readData(e.target.files[0]);p.floorplanSize=await imageDimensions(p.floorplan);await save();editorSettings()")
# Pin marker coordinates use the rendered image bounds, matching object-fit:contain.
needle="bind('maparea','click',async e=>"
insert="if(p.floorplan){const image=$('#plan-image');const syncPins=()=>{const r=image.getBoundingClientRect(),dim=p.floorplanSize;if(!dim)return;const scale=Math.min(r.width/dim.width,r.height/dim.height),w=dim.width*scale,h=dim.height*scale;$$('#maparea .pin').forEach((el,i)=>{const pin=p.pins[i];el.style.left=((r.width-w)/2+pin.x*w)+'px';el.style.top=((r.height-h)/2+pin.y*h)+'px'})};image.onload=syncPins;requestAnimationFrame(syncPins);}"
assert needle in s
s=s.replace(needle,insert+needle)
p.write_text(s,encoding='utf-8')
