# Plano diretor do MG Tour Workspace

Versão 0.2 — 28 de outubro de 2026.

## Resultado desta etapa

Uma base funcional própria, com projetos individuais e biblioteca ampliável. A prioridade corrigida durante o trabalho foi a galeria de skins: 15 composições visuais distintas, referências de trabalhos MG Tour, aplicação preservando dados do cliente e criação de novos visuais sem editar código.

## Levantamento dos projetos anteriores

Foram consultados o registro de memória, a listagem de chats acessíveis e pastas locais diretamente relacionadas a tours/skins. Não é alegada uma busca exaustiva de todas as conversas privadas do usuário: as ferramentas expõem apenas o histórico acessível e a listagem disponível.

Capturas históricas conferidas localmente: BMW Barigüi Maringá, Glória Collection Studios, Almarias, Amaia Hotel, Avitá Cabral, Abraão Tour, Praça e Igreja de Lídice, Igreja Matriz Rio Claro, Capela da Fazenda da Grama, Parque São João Marcos, Toyotani, Equatorial, Sesc Araguaína e Sesc Palmas.

Essas 14 capturas representam 11 famílias de projetos. Os quatro destinos Rio Claro compartilham sistema editorial. Sesc Palmas e Araguaína compartilham linhagem institucional. A galeria não apresenta essas repetições como novos projetos independentes de design. As 15 bases são composições próprias orientadas por essas referências, e cada variação tem seu rótulo.

Registros encontrados, com incorporação visual ainda pendente: Castro Car Skin 2026, M3 Veículos, Armazém Vida Saudável, AVA/Dorata e Babitonga. Os links antigos `sandbox:` dos chats não foram tratados como arquivos locais recuperados. A tipografia Cairo atual de Almarias foi confirmada no chat recente, superando as fontes registradas no primeiro protótipo.

## Biblioteca e personalização

- 15 modelos com marca, localização, menu e controles em posições distintas.
- Busca por nome, projeto e segmento; filtro por família.
- Captura histórica separada da miniatura do novo modelo.
- Aplicação preservando identidade, imagens e pontos do projeto ativo.
- “Minhas skins”: salvar o visual atual, importar/exportar coleção JSON e criar novas composições.
- Compositor com posição X/Y, largura, altura, cor, transparência, desfoque e cantos.
- Validação de limites e prévia antes de salvar. Limite local de 50 visuais pessoais nesta versão.

## Projeto individual

Cada projeto tem ID, cliente, identidade, contatos, objetivo, cenas, pontos, planta, layout e estado próprios. O estado ativo permite trocar entre projetos. Duplicar remapeia IDs de cenas e os destinos dos hotspots. Criar a partir de um modelo copia a composição, sem copiar imagens, contatos ou marcas de outro cliente.

Os módulos comerciais ainda são globais do workspace nesta versão. A ligação de CRM/proposta/briefing com o projeto por IDs e o isolamento de permissões de servidor são evoluções necessárias.

## Estúdio e entrega

O estúdio usa um player WebGL próprio para panoramas equiretangulares. A importação preserva os bytes das imagens armazenadas e usa uma textura reduzida apenas para renderização quando o limite da GPU exige. A prévia de dois panoramas BMW foi testada com arquivos 13.368 × 6.684 e 13.356 × 6.678. A diferença entre imagem original e textura de visualização não deve ser omitida.

Pontos de navegação, texto e links usam coordenadas esféricas. A montagem sequencial não reconhece portas ou a relação espacial real. A auditoria verifica proporção, saídas e existência de destinos, sem substituir revisão visual.

O ZIP independente contém `index.html`, `runtime.js`, `project.json`, `LEIA-ME.txt`, panoramas e logotipo. Foi gerado um teste BMW de 66.778.122 bytes com sete arquivos, dois panoramas e dois pontos. CRC e sintaxe do runtime passaram. A navegação do primeiro para o segundo panorama foi comprovada no pacote extraído.

## Referência Sphere/Órbita

Todos os módulos principais foram abertos e inventariados. Alguns fluxos foram apenas inspecionados, outros exercitados. A matriz JSON registra essa distinção.

No Órbita, o tour de teste com cinco imagens recebeu identificação BMW, contatos confirmados, composição, um ponto manual e montagem sequencial com oito ligações adicionais. Os saltos 1→2 e 2→3 foram comprovados. “Marcar como pronto” foi testado; a plataforma informou que publicar ainda exige exportar e hospedar. A auditoria informou zero erros críticos e cinco avisos de proporção.

A geração do ZIP do Órbita foi iniciada e observada em progresso. O arquivo permaneceu como download parcial `.crdownload` no último exame de arquivos; não há comprovação de ZIP final íntegro. Não repetir a exportação automaticamente, pois a conta tem uma única cota. O logotipo local no Órbita depende da permissão de arquivos da extensão Edge; no player próprio ele foi importado e conferido.

## Critérios para integração 3DVista

1. Selecionar o export correto e registrar hashes dos arquivos protegidos.
2. Extrair nomes e IDs reais da playlist dessa exportação, sem reutilizar índices genéricos.
3. Instalar uma ponte isolada de skin, mantendo os arquivos gerados e as mídias.
4. Provar cada comando de cena, zoom, orientação, áudio e VR no player nativo.
5. Testar tradução, menus persistentes, contatos, plantas e caminhos.
6. Validar em HTTP/HTTPS e distinguir emulação de dispositivo físico.
7. Publicar com backup, conferência por hash e teste na URL definitiva.

Nenhuma dessas etapas foi alegada como concluída para este novo produto.

## Próximos ciclos

1. Completar CRUD e histórico por projeto, restauração robusta e tratamento de arquivos grandes.
2. Ampliar o editor de pontos com edição, exclusão recuperável, mídias, tamanhos, animação e chegada por cena.
3. Ligar o adaptador 3DVista e validar um cliente piloto em export isolado.
4. Implementar backend, autenticação, armazenamento privado, criptografia e trilha de auditoria.
5. Evoluir mapas/radar por pavimento, multilíngue, áudio, guia, comparativo e apresentação.
6. Ligar CRM, proposta, briefing, catálogo e entregas a IDs de projeto/cliente.
7. Integrar serviços externos autorizados e instituir testes físicos de Safari/iOS/Android/VR.

## Evidências e limites

As 15 bases foram aplicadas por UI ao mesmo projeto: 15 geometrias distintas, identidade/logotipo/cenas/pontos preservados, sem overflow horizontal na largura usada. Galeria e estúdio também foram medidos em Chromium a 320×568, 390×844, 768×1024 e 1440×900. Esses testes não certificam dispositivos físicos nem Safari.

O backup protegido passou testes de senha incorreta e adulteração. Não houve auditoria externa de segurança, teste de invasão ou certificação de produto pronto para produção. A proteção do código executado no navegador tem limites físicos descritos em `SEGURANCA.md`.
