# Proteção do produto e dos projetos

Posição da V0.2: protótipo local. Esta documentação distingue implementação, arquitetura prevista e impossibilidades do cliente web.

## Modelo de ameaça

1. Um visitante pode inspecionar os arquivos e conteúdos que seu navegador recebe.
2. Uma pessoa com acesso ao perfil do navegador pode ler o armazenamento local desta versão.
3. Um arquivo de backup pode ser copiado, perdido ou adulterado.
4. Um importador de skins/backup pode receber dados malformados ou maliciosos.
5. Uma versão futura com vários usuários precisa impedir acesso entre organizações e projetos.

## Controles já implementados

- Identidades e arquivos de clientes separados por projeto no modelo de dados.
- Nenhuma chave de API ou credencial externa embutida no frontend.
- Saída de texto escapada nas interfaces e protocolos de link limitados a HTTP/HTTPS.
- Importação de coleções com limite de tamanho, enumeração de campos, validação de hexadecimais, limites numéricos e rejeição de geometria fora da área.
- Backup por senha usando Web Crypto: AES-GCM 256 bits, IV aleatório de 96 bits, salt aleatório de 128 bits e PBKDF2-SHA256 com 600.000 iterações. Cabeçalho de versão autenticado como AAD.
- Senha e chave derivada não são gravadas no projeto ou no backup.
- Testes automáticos de ida/volta, senha incorreta, adulteração, IV/salt distintos e ausência do texto de teste no envelope.

Esses testes não substituem auditoria externa de segurança. Uma senha fraca continua vulnerável a tentativas offline. A perda da senha impede a recuperação do backup protegido.

## O que a criptografia desta versão não protege

O backup protegido não criptografa o IndexedDB ativo. Ao abrir o arquivo, o editor precisa dos dados em memória. O JS/CSS enviado ao cliente, as imagens visíveis e as fontes carregadas podem ser inspecionados. Minificação/ofuscação pode dificultar leitura casual, mas não é controle de confidencialidade.

## Arquitetura requerida antes de produção multiusuário

- Backend próprio, repositório privado e segredos em cofre/variáveis de servidor.
- Autenticação e autorização em cada operação; escopo de organização e projeto no servidor.
- Sessões em cookies HttpOnly/Secure/SameSite; nenhuma credencial de sessão em IndexedDB/localStorage.
- Criptografia de dados em repouso com chaves gerenciadas separadamente; rotação e plano de recuperação.
- Armazenamento privado de originais; URLs temporárias limitadas ao conteúdo e usuário autorizados.
- Exportações versionadas, trilha de auditoria, hashes, limitação de requisições e backups restauráveis.
- Validação completa de arquivos, tamanhos, tipos e destinos no servidor.
- CSP e demais cabeçalhos de segurança, revisão de dependências e testes de autorização cruzada.
- Separação entre área de criação e player público: publicar apenas o pacote que o visitante precisa receber.
- Política de propriedade/licença e marcas de autoria. Nenhum mecanismo técnico garante impedir captura de tela ou reprodução visual.

## Fontes técnicas consultadas

- [OWASP — Web Frontend Security](https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html)
- [OWASP — Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [OWASP — HTML5 Security](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)
- [MDN — SubtleCrypto.encrypt](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt)
- [MDN — SubtleCrypto.deriveKey](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey)
