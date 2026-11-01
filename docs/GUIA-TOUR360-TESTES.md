# Máquina de Tour 360 — laboratório V0.1

Protótipo próprio de landing page e guia do aluno, isolado em `dist/guia/`. Não muda a entrada do Workspace, seu armazenamento, sua identidade no Sites ou a publicação atual.

## Testar esta branch

```sh
npm ci
npm run verify
npm start
```

Abra `http://localhost:8794/guia/index.html`. A rota usa o nome do arquivo, pois o servidor atual não resolve índices de subdiretórios.

No GitHub, selecione a branch `feature/guia-tour360` antes de abrir um Codespace. Após iniciar a prévia, abra `/guia/index.html` na porta 8794 e mantenha a porta privada. Codespaces depende da conta e pode ter custos. Este PR não inicia um Codespace nem publica no GitHub Pages ou no Sites.

Os arquivos de `dist/guia/` também funcionam juntos como página estática. Abrir por `file://` pode limitar a área de transferência e o armazenamento conforme o navegador; a interface oferece seleção manual do comando quando copiar não estiver disponível.

## Entregue

- Landing page com composição própria na linha visual do Café Expresso: azul profundo, verde-lima, azul-petróleo e superfícies claras. Ilustração vetorial própria, sem dados ou panoramas de clientes.
- Seis módulos, 14 guias escritos no total, 13 por caminho: a integração específica alterna entre 3DVista e Pano2VR.
- 16 comandos vinculados às práticas, busca por aula/assunto e busca/filtro por comando.
- Contexto reutilizável por projeto e seleção de plataforma.
- Conferências por aula, conclusão manual reversível e progresso local.
- Exportação/importação de progresso JSON com validação e limite de 1 MB. A importação substitui o rascunho atual; exporte antes.
- Briefing JSON, comandos TXT, estrutura de pastas e cinco fichas CSV: adaptação, testes, revisão, custos e variações.
- Guia imprimível com instruções para salvar em PDF pelo navegador.
- Menu móvel em diálogo modal, fechamento por Escape, foco e retorno ao botão de origem; layouts próprios para as dimensões revisadas.

O armazenamento `localStorage` usa a chave exclusiva `mgtour.guia.v1`, sem acesso ao IndexedDB do Workspace. Não há conta de aluno, sincronização entre dispositivos, backend de IA, execução de comandos, pagamento ou certificação. Nenhum vídeo foi inventado: a interface informa que os vídeos e projetos nativos estão em preparação. Um registro de progresso é uma autoconferência, não prova de teste.

## Adaptação da estratégia

Referência metodológica consultada em 01/11/2026: [Guia do Aluno — Máquina de Edição IA](https://edicaomia.com.br/guia/). Foram lidas as seções de orientação, 13 aulas, três instruções extras, bônus e recursos. Foram examinadas as três instruções bônus e o código do instalador baixado, sem executar o instalador. O tutorial de 48 segundos e os vídeos externos não foram assistidos integralmente nesta análise; os PDFs e demais kits não foram auditados. Código, assets, vídeos e textos do curso de referência não foram incorporados.

Adaptações: a amostra curta de vídeo vira um percurso interativo representativo; revisão por intervalo vira revisão por componente, estado e dispositivo; transcrição específica vira inventário real de cenas, nós, IDs e destinos; exportação de MP4 vira saída do tour com mídias referenciadas e teste de reexportação; formato vertical/horizontal vira equivalência funcional entre desktop/mobile.

Referência visual do próprio usuário: [Café Expresso 3D Vista](https://mgtour360.com.br/cafe-expresso-3dvista/). Nenhum dado da conta ou de projetos existentes foi copiado.

## Verificação

`npm run verify` inclui as verificações existentes e `tests/guia.test.cjs`, cobrindo rotas isoladas, arquivos, sintaxe, integridade curricular, contexto de comandos e separação entre plataformas. A revisão visual e funcional em navegador deve registrar as dimensões e os fluxos efetivamente conferidos. Safari/iPhone físico, Android físico e integração com players reais continuam pendentes. O código HTML/CSS/JS publicado no repositório é público; use somente dados sintéticos neste protótipo.

Verificação desta entrega em 01/11/2026: `npm run verify` passou, incluindo sete testes Node (seis do guia e um do servidor), além das verificações preexistentes de exportação, backup e dados do Workspace. No Chromium, foram conferidos a landing page, 13 cartões no caminho ativo, troca para Pano2VR sem mostrar a integração 3DVista, busca por Safari, filtro de integração com dois comandos, cópia do comando com contexto Pano2VR, conclusão condicionada às conferências, persistência após recarregar e desfazer a conclusão. Também foram conferidos a importação válida, a preservação do estado ao rejeitar um JSON de outro formato e a exibição como texto de uma marcação HTML inserida no nome do projeto, sem criar elementos de imagem. O guia imprimível apresentou 13 práticas e 18 ocorrências de comandos (alguns comandos são usados em mais de uma aula).

Na emulação 390 × 844 e 844 × 390, a largura do documento permaneceu menor ou igual à viewport. O menu móvel abriu como diálogo modal com foco no botão de fechar e fechou por botão, Escape e navegação; o fechamento por botão e Escape devolveu foco ao botão de abertura. As capturas locais estão em `qa/`, ignoradas pelo Git. Os testes temporários usaram somente dados sintéticos; o contexto de exemplo foi restaurado e a conferência de progresso de teste foi desfeita. Não houve validação do diálogo de impressão/PDF final nem download de todos os arquivos em navegador nesta sessão.

## Próximas validações do curso

1. Executar o piloto em um projeto real autorizado de cada plataforma.
2. Conferir o fluxo de painéis em Safari/iPhone iOS 18 e versão atual com evidências separadas da emulação.
3. Gravar as demonstrações apenas após o fluxo técnico ficar reproduzível.
4. Avaliar com alunos: tempo para a primeira entrega, erros de navegação e necessidade de ajuda, sem inventar métricas.
