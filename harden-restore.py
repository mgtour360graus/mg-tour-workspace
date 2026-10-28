from pathlib import Path
p=Path(__file__).parent/'dist/workspace-v2.js';s=p.read_text('utf-8')
s=s.replace("async function decodeBackupFile(file){const data=JSON.parse(await file.text());if(data.schema!=='mgtour360.encrypted-backup/v1')return data;", "async function decodeBackupFile(file){if(file.size>512*1024*1024)throw Error('Backup excede o limite local de 512 MB.');const data=JSON.parse(await file.text());if(data.schema!=='mgtour360.encrypted-backup/v1')return validateWorkspaceData(data);")
s=s.replace("const decoded=await decryptBackup(data,$('#unlock-pass').value);closeModal();resolve(decoded)","const decoded=validateWorkspaceData(await decryptBackup(data,$('#unlock-pass').value));closeModal();resolve(decoded)")
s+='''
function validateWorkspaceData(data){
 if(!data||data.version!==1||!Array.isArray(data.projects)||!Array.isArray(data.leads)||!Array.isArray(data.catalog)||!Array.isArray(data.briefings))throw Error('Estrutura de backup inválida.');
 const hex=/^#[0-9a-f]{6}$/i,id=/^[a-zA-Z0-9_-]{1,100}$/,image=/^data:image\\/(jpeg|png|webp);base64,[a-zA-Z0-9+/=]+$/;
 const checkId=value=>{if(typeof value!=='string'||!id.test(value))throw Error('Identificador inválido.');};
 const checkBrand=b=>{if(!b||typeof b.name!=='string'||!hex.test(b.color)||typeof b.logo!=='string'||(b.logo&&!image.test(b.logo)))throw Error('Identidade ou logotipo inválido.');};
 checkBrand(data.brand);
 const ids=new Set();
 for(const p of data.projects){checkId(p.id);if(ids.has(p.id))throw Error('Projeto duplicado.');ids.add(p.id);if(typeof p.name!=='string'||typeof p.client!=='string'||!Array.isArray(p.scenes)||!Array.isArray(p.pins))throw Error('Projeto inválido.');if(p.brand)checkBrand(p.brand);if(p.panel&&!hex.test(p.panel))throw Error('Cor de painel inválida.');if(p.floorplan&&!image.test(p.floorplan))throw Error('Planta inválida.');if(p.layout)validatePersonalSkin({name:'Validação',baseId:p.layoutId,layout:p.layout,panel:p.panel||'#132c29',color:p.brand?.color||'#ffffff',surface:p.surface});const scenes=new Set();for(const scene of p.scenes){checkId(scene.id);if(scenes.has(scene.id))throw Error('Cena duplicada.');scenes.add(scene.id);if(typeof scene.name!=='string'||!image.test(scene.image)||!Array.isArray(scene.hotspots)||!Number.isFinite(scene.width)||!Number.isFinite(scene.height)||scene.width<=0||scene.height<=0)throw Error('Cena ou imagem inválida.');for(const h of scene.hotspots){checkId(h.id);if(!['scene','link','info'].includes(h.type)||typeof h.label!=='string'||typeof h.target!=='string'||!Number.isFinite(h.yaw)||!Number.isFinite(h.pitch))throw Error('Ponto inválido.');if(h.type==='link'&&!safeURL(h.target))throw Error('Link de ponto inválido.');}}for(const pin of p.pins){checkId(pin.scene);if(!Number.isFinite(pin.x)||!Number.isFinite(pin.y)||pin.x<0||pin.x>1||pin.y<0||pin.y>1)throw Error('Pino inválido.');}}
 for(const group of[data.leads,data.catalog,data.briefings])for(const item of group)checkId(item.id);
 if(data.personalSkins){if(!Array.isArray(data.personalSkins)||data.personalSkins.length>50)throw Error('Coleção inválida.');data.personalSkins=data.personalSkins.map(validatePersonalSkin)}
 return data;
}
'''
p.write_text(s,'utf-8')
