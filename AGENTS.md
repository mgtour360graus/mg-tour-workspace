# Orientações de desenvolvimento

- O produto é um protótipo MG Tour com player próprio; não afirmar integração nativa 3DVista sem comprovação.
- `dist/` é o frontend atual. Os scripts Python históricos na raiz não são instaladores.
- Preservar o ID em `.openai/hosting.json` e a audiência privada existente. Atualizações do GitHub não autorizam publicação pública automática.
- Preservar originais, backups e exportações anteriores. Não versionar dados ou panorâmicas de clientes, tokens ou `.env`.
- Testes de CI devem usar dados sintéticos; não depender da pasta local `evidencias/` como entrada.
- Para alterações de código, executar `npm run verify` e revisar visualmente os fluxos afetados quando aplicável.
- Desenvolvimento em branches curtas, com revisão por pull request. Não reescrever histórico publicado.
- Interface em português, navegação clara e responsiva, mantendo a identidade MG Tour.
- Distinguir testes automatizados/emulação de validação em aparelhos físicos.
