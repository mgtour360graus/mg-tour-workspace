# Desenvolvimento antes da hospedagem definitiva

## Papel de cada ambiente

| Ambiente | Uso |
| --- | --- |
| GitHub privado | Código, histórico, issues e revisão por pull request |
| Computador local | Desenvolvimento e prévia sem consumo de Codespaces |
| GitHub Codespaces | Ambiente de desenvolvimento no navegador, quando iniciado pelo proprietário |
| GitHub Actions | Verificação de sintaxe, segurança do backup, exportação e servidor de prévia |
| Sites privado existente | Prévia publicada em ciclos deliberados; sem deploy automático neste fluxo |
| Servidor definitivo | Etapa futura, após autenticação, dados persistentes e validação operacional |

## Rotina

1. Escolher um item do backlog e abrir uma branch curta a partir de `main`.
2. Implementar e executar `npm run verify`.
3. Conferir visualmente o fluxo alterado em `npm start`, incluindo largura de celular quando relevante.
4. Abrir pull request com problema, comportamento final e verificação.
5. Integrar após revisão e checks aprovados. Esta é a convenção de trabalho; proteção obrigatória de branch depende de configuração do GitHub e não é imposta por estes arquivos.
6. Publicar uma prévia privada quando houver uma versão útil para avaliação.

## Dados e arquivos

IndexedDB pertence ao perfil e à origem do navegador. Trocar de localhost para Sites ou para outra URL do Codespaces não transporta os projetos automaticamente. Exporte o backup e restaure na nova origem. Não apague o armazenamento anterior antes de conferir a restauração.

Não versionar `.env`, tokens, backups, exportações de clientes, panorâmicas originais ou a pasta `evidencias/`. As miniaturas históricas em `dist/references/` fazem parte da biblioteca visual existente e estão no repositório privado. Os testes geram evidências locais ignoradas pelo Git.

O servidor de desenvolvimento serve somente `dist/`; não é um backend de contas nem um servidor definitivo. Em Codespaces, mantenha a porta 8794 privada. A criação de Codespaces pode consumir a franquia/créditos da conta; o ambiente não foi iniciado automaticamente.

## Comandos

| Comando | Resultado |
| --- | --- |
| `npm ci` | Prepara o projeto a partir do lockfile |
| `npm start` | Prévia HTTP em localhost:8794 |
| `npm run check` | Sintaxe JavaScript e arquivos referenciados no HTML |
| `npm test` | Backup criptografado, importação, exportação e restrições do servidor |
| `npm run verify` | Todas as verificações automáticas |

## Saída para o servidor definitivo

O frontend estático está em `dist/` e pode ser servido por HTTP/HTTPS. A integração nativa 3DVista ainda precisa de um export real e validação. Contas, permissões, sincronização, armazenamento privado, logs e cobrança exigem backend antes de uma operação multiusuário. Não vincular o desenvolvimento a um provedor definitivo antes dessas decisões.

Fontes: [CI Node.js](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs) e [portas do Codespaces](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace).
