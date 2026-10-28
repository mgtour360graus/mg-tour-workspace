# MG Tour 360 Workspace — V0.2

Projeto próprio iniciado em 28/10/2026 a partir de pesquisa funcional autorizada. O código da plataforma Sphere, seu motor, sua base comercial e seus arquivos de skins não foram incorporados.

## Abrir e continuar

Sirva `dist/` por HTTP e abra o endereço no navegador. A prévia desta sessão usa `http://127.0.0.1:8794/`. O Site registrado está em `.openai/hosting.json`; seu ID deve ser reutilizado em atualizações. Nunca criar outro Site para esta pasta.

O armazenamento ativo usa IndexedDB no navegador e na origem corrente. Localhost e o Site hospedado têm armazenamentos distintos. Use o backup para transportar os dados. Os materiais originais em D: e os tours publicados não foram alterados.

## Implementado

- Projetos individuais, seleção do projeto ativo e duplicação com remapeamento de IDs de cenas e hotspots.
- Identidade, logotipo, contatos, objetivo, cenas, pontos, planta, composição e estado separados por projeto.
- Galeria de 15 composições próprias, busca, filtro por segmento, aplicação e referências históricas.
- Coleção pessoal: salvar visual atual, criar skin nova com editor de geometria, importar e exportar JSON validado. Limite local: 50 skins pessoais.
- Visualização esférica própria em WebGL, navegação entre cenas, zoom, pontos de navegação, informação e links HTTPS/HTTP.
- Importação JPG/PNG/WebP; dimensões e proporção conferidas; arquivos originais preservados.
- Conexão sequencial sem reconhecimento automático de portas; auditoria de proporção, saídas e destinos.
- Planta com pinos normalizados; radar angular e múltiplos pavimentos ainda pendentes.
- Exportação JSON editável e ZIP de prévia independente, com panoramas, logotipo, player, manifesto e instruções.
- Backup completo e backup criptografado por senha com AES-GCM 256/PBKDF2-SHA256. Senhas e chaves derivadas não são persistidas.
- CRM local, formulário de briefing, composição de proposta imprimível, catálogo de URLs e checklists de preparação.

## Limites que não podem ser omitidos

Não é uma integração final ao 3DVista. O player da prévia é próprio. Não gera `.vtp` e não traduz automaticamente XML krpano para 3DVista. Os controles precisam ser ligados ao export 3DVista real e validados por panorama/câmera antes de alegar integração nativa.

Não há backend de produção, autorização por usuário/projeto, cobrança, Google OAuth, Street View Publish, costura PTGui, editor de fotos ou editor PDF integrados. As áreas correspondentes identificam esses limites.

O backup criptografado protege o arquivo fechado. O IndexedDB ativo e os dados em memória não estão criptografados nesta versão. HTML/CSS/JS, imagens e fontes exibidos no navegador podem ser inspecionados. Não prometer código cliente impossível de copiar.

## Testes e evidências

`evidencias/` contém os relatórios locais, capturas e a prévia BMW extraída. Essa pasta não entra no repositório do Site nem no template. As fontes das 14 capturas históricas usadas na biblioteca estão em `evidencias/referencias-fontes.json`, com hashes. A biblioteca agrupa 11 famílias de projetos; variações próprias são rotuladas, sem afirmar que 15 projetos antigos distintos foram recuperados.

Consulte `docs/PLANO-DIRETOR.md`, `docs/MATRIZ-DE-COBERTURA.json` e `docs/SEGURANCA.md` para o estado por capacidade.

## Arquivos de implementação

- `dist/app.js`: núcleo local, módulos, player e exportador.
- `dist/skins.js`: catálogo e geometria das 15 bases.
- `dist/workspace-v2.js`: projetos individuais, coleção de skins e backups protegidos.
- `dist/style.css` e `dist/workspace-v2.css`: interface e adaptação responsiva.
- `dist/references/`: miniaturas históricas da galeria, sem executáveis ou credenciais de terceiros.

Os scripts de desenvolvimento na raiz não devem ser reexecutados como instaladores. Os arquivos em `dist/` constituem o resultado atual.
