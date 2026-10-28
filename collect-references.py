from pathlib import Path
from PIL import Image,ImageOps,ImageDraw,ImageFont
import hashlib,json
root=Path(__file__).parent
out=root/'dist'/'references';out.mkdir(exist_ok=True)
qa=root/'evidencias';qa.mkdir(exist_ok=True)
sources=[
('bmw','BMW Barigüi Maringá','C:/Users/USER/Documents/ChatGPT/BMW MARINGÁ 2026/PUBLICACAO-BMW-20261026-R27/publicado-desktop.png'),
('gloria','Glória Collection Studios','D:/2026/10- Outubro/4- A-.ioshi Glória decorado/QA-Gloria-Integracao/v2-public-desktop-floorplan.png'),
('almarias','Almarias','D:/2026/10- Outubro/11- ALMARIA/work/audit/ajustes-preview-publico.png'),
('amaia','Amaia Hotel','C:/Users/USER/Documents/ChatGPT/Amaia Hotel/amaia-demo-preview.png'),
('avita','Avitá Cabral','C:/Users/USER/Documents/Codex/2026-09-12/precisamos-organizar-um-tour-para-a/outputs/AVITA_3DVISTA/17_PUBLICACAO_2026-10-28/PUBLICADO_DESKTOP.png'),
('abraao','Abraão Tour','C:/Users/USER/.codex/.chatgpt-projects/g-p-6abd6a2293a08191aeeff1b7d4e980b4/ajuste-03-menu-passeios.png'),
('lidice','Praça e Igreja de Lídice','D:/2026/10- Outubro/2- Rio Claro Editora/auditoria-libras-20261026/PUBLICO-praca-lindice-historia.png'),
('matriz','Igreja Matriz Rio Claro','D:/2026/10- Outubro/2- Rio Claro Editora/auditoria-libras-20261026/PUBLICO-igrejamatriz-historia.png'),
('grama','Capela da Fazenda da Grama','D:/2026/10- Outubro/2- Rio Claro Editora/auditoria-libras-20261026/PUBLICO-capela-da-fazenda-da-grama-historia.png'),
('parque','Parque São João Marcos','D:/2026/10- Outubro/2- Rio Claro Editora/auditoria-libras-20261026/PUBLICO-parque-amb-saojose-marcos-historia.png'),
('toyotani','Toyotani Clínica Odontológica','D:/2026/9- SETEMBRO/Clinica Toyotami/12 - Output/ATUALIZACAO-YOUTUBE-20261026/skin-confirmada-recepcao.png'),
('equatorial','Equatorial','D:/2026/10- Outubro/EQUATORIAL/equatorial-postits-skin/PREVIA-PROTOTIPO.png'),
('araguaina','Sesc Araguaína','D:/2026/8- Agosto/TERCERIZAÇÃO JEAN/Centro de Atividades - Araguaína-20261001T204853Z-1-001/Centro de Atividades - Araguaína/AUDITORIA_SKIN_2026-10-05/desktop-publicado.jpg'),
('palmas','Sesc Palmas','D:/2026/8- Agosto/TERCERIZAÇÃO JEAN/Centro de Atividades - Palmas-20261006T162608Z-1-001/Centro de Atividades - Palmas/Projeto3dvistacentro-palmas/AUDITORIA_SKIN_PALMAS_20261006/desktop-tour.png'),
]
manifest=[]
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',20)
sheet=Image.new('RGB',(1200,((len(sources)+2)//3)*260),'#eef1e8');draw=ImageDraw.Draw(sheet)
for n,(key,title,path) in enumerate(sources):
 p=Path(path)
 if not p.exists():manifest.append({'key':key,'title':title,'status':'missing','path':path});continue
 im=Image.open(p).convert('RGB');im.thumbnail((1280,800));im.save(out/f'{key}.jpg',quality=88,optimize=True)
 thumb=ImageOps.contain(im,(384,218));x=(n%3)*400;y=(n//3)*260
 sheet.paste(thumb,(x+(384-thumb.width)//2,y));draw.text((x+8,y+223),title,font=font,fill='#183b31')
 manifest.append({'key':key,'title':title,'source':path,'source_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'preview':f'references/{key}.jpg','original_size':Image.open(p).size,'state':'historical_screenshot_verified_locally'})
sheet.save(qa/'referencias-contact-sheet.jpg',quality=90)
(qa/'referencias-fontes.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),'utf-8')
print(json.dumps({'verified':sum('preview'in m for m in manifest),'missing':[m['title'] for m in manifest if 'preview'not in m]},ensure_ascii=False))
