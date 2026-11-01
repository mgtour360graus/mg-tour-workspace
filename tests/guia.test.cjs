'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {once}=require('node:events');
const D=require('../dist/guia/data.js');
const {createServer}=require('../scripts/serve.cjs');
test('trilhas isolam a integração de cada plataforma e preservam as práticas comuns',()=>{
  for(const [platform,own,other] of [['3dvista','3dvista','pano2vr'],['pano2vr','pano2vr','3dvista']]){
    const list=D.activeLessons(platform);
    assert.equal(list.length,13);
    assert.ok(list.some(l=>l.id===own));
    assert.ok(!list.some(l=>l.id===other));
    for(const id of ['adaptativo','paineis','safari','reexportacao','entrega'])assert.ok(list.some(l=>l.id===id));
  }
});
test('toda prática tem entrega, conferências e comandos existentes',()=>{
  assert.equal(new Set(D.lessons.map(l=>l.id)).size,D.lessons.length);
  assert.equal(new Set(D.commands.map(c=>c.id)).size,16);
  assert.equal(D.modules.length,6);
  for(const l of D.lessons){assert.ok(D.modules.some(m=>m[0]===l.module));assert.ok(l.result&&l.steps.length>=3&&l.checks.length>=3);for(const c of l.commands)assert.ok(D.commands.some(x=>x.id===c));}
  assert.deepEqual(new Set(D.lessons.flatMap(l=>l.commands)),new Set(D.commands.map(c=>c.id)));
});
test('comandos utilizam o contexto atual e não transportam os dados de outro projeto',()=>{
  for(const c of D.commands){
    const a=D.commandText(c.id,{project:'Projeto sintético A',platform:'pano2vr',brand:'Marca A',objective:'Objetivo A'});
    const b=D.commandText(c.id,{project:'Projeto sintético B',platform:'3dvista',brand:'Marca B',objective:'Objetivo B'});
    assert.match(a,/Pano2VR/);assert.match(a,/Projeto sintético A/);assert.match(a,/Marca A/);
    assert.match(b,/Programa: 3DVista/);assert.ok(!b.includes('Projeto sintético A'));
    assert.match(a,/execução depende de ferramentas e arquivos acessíveis/);
  }
  assert.throws(()=>D.commandText('inexistente'));
});
test('orientações não confundem emulação com teste físico nem protótipo com integração',()=>{
  assert.match(D.commands.find(c=>c.id==='ios').prompt,/Emulação Chromium não comprova Safari/);
  assert.match(D.commands.find(c=>c.id==='adaptar').prompt,/painel oculto precisa de acesso identificável/i);
  assert.match(D.commands.find(c=>c.id==='integrar').prompt,/integração como pendente/);
  assert.match(D.commands.find(c=>c.id==='reexportar').prompt,/outra cópia/);
  assert.match(D.commands.find(c=>c.id==='cliente').prompt,/Não transporte dados/);
});
test('JavaScript e referências do novo HTML são válidos sem dependências externas',()=>{
  const root=path.resolve(__dirname,'../dist/guia');
  for(const file of ['data.js','app.js'])execFileSync(process.execPath,['--check',path.join(root,file)]);
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  for(const [,asset] of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css|svg))"/g))assert.ok(fs.existsSync(path.join(root,asset)));
  assert.ok(!/https?:/.test(html),'O HTML não carrega scripts ou fontes de terceiros');
  const css=fs.readFileSync(path.join(root,'style.css'),'utf8');
  assert.match(css,/prefers-reduced-motion/);assert.match(css,/@media print/);
});
test('prévia entrega a landing page e seus assets pela rota isolada',async t=>{
  const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const base=`http://127.0.0.1:${server.address().port}/guia/`;
  const html=await fetch(base+'index.html');assert.equal(html.status,200);assert.match(await html.text(),/Máquina de Tour 360/);
  for(const asset of ['data.js','app.js','style.css','cena.svg','marca.svg'])assert.equal((await fetch(base+asset)).status,200);
});
