(function (root) {
  'use strict';
  const modules = [
    ['comece', 'Comece com clareza', 'Entenda a entrega e prepare uma base segura.'],
    ['direcao', 'Transforme intenção em direção', 'Marca, referência e uma composição própria.'],
    ['experiencia', 'Desenhe a experiência', 'O mesmo conteúdo. A apresentação certa em cada tela.'],
    ['integracao', 'Conecte ao seu programa', 'Escolha um caminho técnico e comprove o funcionamento.'],
    ['qualidade', 'Revise com evidência', 'Corrija a causa e preserve o que já funciona.'],
    ['producao', 'Crie um padrão reutilizável', 'Variações, entrega e continuidade para o próximo projeto.']
  ];
  const commands = [
    ['iniciar','Começar meu projeto','Direção','Organize o briefing do nosso tour usando o contexto disponível. Identifique público, objetivo do visitante, programa, materiais e ações essenciais. Reaproveite decisões já fornecidas e pergunte apenas o que impede a próxima entrega. Não invente ambientes, contatos ou dados comerciais. Entregue uma ficha curta, lacunas essenciais e o próximo resultado verificável.'],
    ['referencia','Entender uma referência','Direção','Analise a referência que forneci por estados: entrada, menu, escolha de ambiente, informação e retorno. Diga o que conseguiu observar e o que não acessou. Extraia critérios de hierarquia, leitura e navegação para nossa identidade. Não copie marcas, textos ou materiais exclusivos da referência. Uma imagem estática não comprova uma interação.'],
    ['marca','Definir minha identidade','Direção','Use os materiais autorizados do projeto para definir paleta, contraste, tipografia, iconografia e hierarquia. Traduza adjetivos em critérios observáveis. Não afirme identificar a fonte exata pela aparência. Preserve espaço para a panorâmica e diferencie as regras reutilizáveis dos dados específicos do cliente.'],
    ['compor','Criar a primeira skin','Criação','Crie uma composição própria para três ambientes de estudo, com título do ambiente, menu, acesso às informações e retorno. Produza desktop e mobile. Comece pelo percurso representativo: abrir o menu, escolher ambiente, abrir informação, fechar e retomar a exploração. Identifique ações simuladas e mostre como revisar. Não apresente o protótipo como integração ao player.'],
    ['navegacao','Mapear ações e destinos','Criação','Mapeie cada controle em uma tabela: rótulo, identificador real, ação, destino, estado atual e retorno. Diferencie aparência, implementação e teste. Confira o que ocorre ao navegar pelo menu e pelos hotspots. Resolva destinos essenciais ausentes antes de conectá-los, sem inventar IDs ou APIs.'],
    ['adaptar','Adaptar desktop e mobile','Experiência','Crie a matriz de equivalência funcional da skin. Para cada função, defina apresentação desktop, apresentação mobile, botão de acesso, abertura, fechamento e resultado esperado. Use painéis ou gavetas quando ajudarem a leitura. Um painel oculto precisa de acesso identificável. Preserve seleção, idioma e estado do tour. Verifique retrato e paisagem; não apenas reduza a escala do desktop.'],
    ['paineis','Revisar janelas e painéis','Experiência','Inspecione abertura, fechamento, rolagem, foco e gestos dos painéis. Ao abrir, mantenha o botão de fechar acessível e impeça cliques nos hotspots atrás da janela. Ao fechar, devolva foco e restaure o estado anterior do player quando sua API permitir. Controles ocultos não devem receber foco. Teste também rotação com uma janela aberta.'],
    ['ios','Verificar Safari e iPhone','Experiência','Prepare e execute somente os testes possíveis em Safari/iPhone, mantendo iOS 18 como alvo solicitado e verificando também a versão atual. Confira áreas seguras, barras do navegador, orientação, retorno à aba, teclado quando presente, rolagem e gestos. Recursos de áudio, giroscópio, tela cheia e VR exigem capacidade real e alternativa. Registre aparelho, versão, passos e resultado. Emulação Chromium não comprova Safari ou iPhone; marque os ambientes indisponíveis como pendentes.'],
    ['integrar','Integrar ao programa escolhido','Integração','Inspecione a versão e os arquivos reais do programa escolhido. Determine se a entrega é skin nativa ou camada externa conectada. Trabalhe em cópia, preserve mídia, núcleo e licença. Use documentação do fabricante para ações e eventos. Não reutilize APIs de outra plataforma por analogia. Conecte o percurso aprovado e teste troca por menu e hotspot, título e seleção. Sem acesso aos arquivos ou player, entregue o mapa técnico e registre a integração como pendente.'],
    ['sincronizar','Sincronizar a navegação','Integração','No player real, confira se panorama ativo, título, menu e hotspot permanecem sincronizados. Teste ida e volta por caminhos diferentes. Localize a fonte real do estado e os eventos disponíveis no programa. Não crie IDs duplicados para desktop e mobile. Corrija apenas a causa e registre passos, resultado esperado e observado.'],
    ['corrigir','Corrigir sem reconstruir','Qualidade','Revise o defeito que descrevi. Identifique versão, dispositivo, orientação, ação, resultado esperado e observado. Separe defeito de nova preferência. Corrija o menor conjunto de componentes responsável pelo problema e preserve as decisões aprovadas. Se o erro já se repetiu, diagnostique antes de tentar novamente. Confira os estados adjacentes e amplie os testes se a alteração afetar um componente compartilhado.'],
    ['desempenho','Revisar peso e fluidez','Qualidade','Meça o comportamento disponível antes de mudar a skin: carregamento, tamanho de assets e interação dos painéis. Investigue camadas, blur e animações somente quando houver evidência de custo. Respeite movimento reduzido e preserve a qualidade dos panoramas originais. Compare antes e depois no mesmo cenário. Não invente notas, métricas ou compatibilidade física não testada.'],
    ['reexportar','Conferir nova exportação','Qualidade','Teste a personalização depois de gerar uma nova saída do projeto. Use outra cópia e preserve a versão funcional. Confira IDs, nomes, mídias e pontos de aplicação reais. Reaplique somente o necessário pelo procedimento documentado. Execute o percurso representativo novamente e registre o que sobreviveu, o que precisou de reaplicação e como restaurar a versão anterior.'],
    ['variar','Criar uma variação controlada','Produção','Crie uma cópia da base aprovada e altere somente a variável visual que indiquei, por exemplo posição do menu ou hierarquia do botão principal. Preserve conteúdo, destinos e funcionalidades. Identifique A-base e B-variação e registre a hipótese. Compare o mesmo percurso nas duas versões. Não conclua que uma delas converte mais sem dados de uso.'],
    ['cliente','Adaptar para outro cliente','Produção','Reutilize as regras visuais aprovadas em uma cópia independente. Faça o inventário dos dados do novo projeto: marca, ambientes, contatos, idiomas, destinos e mídia. Substitua o conteúdo específico do cliente anterior e confirme o que estiver ausente. Teste novamente desktop e mobile. Não transporte dados, contatos ou imagens do projeto anterior.'],
    ['entregar','Organizar a entrega','Produção','Organize projeto editável, assets referenciados, saída de teste, versão anterior e instruções de retomada. Registre alterações, ambientes realmente testados, evidências, pendências e procedimento de reexportação e restauração. Distinga protótipo, camada conectada e skin nativa. Não declare entrega integrada se ela não foi verificada no programa de destino. Publicação exige o destino autorizado.']
  ].map(([id,title,category,prompt])=>({id,title,category,prompt}));
  const lesson = (id,module,title,result,steps,checks,cmds,platform='ambos')=>({id,module,title,result,steps,checks,commands:cmds,platform});
  const lessons = [
    lesson('comecar','comece','O tour que você vai criar','Uma ficha do projeto e três entregas definidas: skin funcional, variação e padrão reutilizável.',[
      ['Escolha o exercício','Use o projeto fictício Espaço Horizonte: recepção, sala principal e área externa. Se já tiver materiais próprios autorizados, use uma cópia. O guia não fornece panoramas de clientes nem um tour nativo pronto.'],
      ['Defina a experiência','O visitante deve reconhecer o ambiente, escolher outro, consultar informações e voltar à exploração. Escolha a plataforma no contexto do laboratório.'],
      ['Reconheça as entregas','Protótipo visual, integração com o player e saída entregue são etapas diferentes. Concluir uma aula aqui registra sua conferência; não executa nem certifica o tour.']
    ],['Objetivo e público definidos','Programa escolhido','Entregas e limites compreendidos'],['iniciar']),
    lesson('preparar','comece','Prepare e retome seu projeto','Uma pasta organizada e uma prévia mínima que você consegue reabrir.',[
      ['Confira o ambiente','Identifique ferramentas já disponíveis. Não reinstale o que funciona. O caminho de briefing no chat é diferente de um agente com acesso aos arquivos locais. Node.js e Git dependem do fluxo escolhido.'],
      ['Separe os materiais','Mantenha originais, assets autorizados, projeto, saídas e evidências em pastas claras. Uma exportação pode depender de mídias que ficam em outro caminho. Preserve essas referências.'],
      ['Reabra o mesmo trabalho','Abra uma prévia simples, feche e retome a mesma pasta. Registre programa, versão, arquivo de entrada e como iniciar o teste. Não crie um projeto novo a cada sessão.']
    ],['Original preservado','Caminhos identificados','Projeto reaberto sem reinstalação'],['iniciar']),
    lesson('briefing','direcao','Uma marca, uma intenção','Um briefing com critérios que podem ser conferidos na tela.',[
      ['Comece pelo visitante','Defina público, informação principal e próximo passo. Contato opcional ausente não impede um primeiro desenho; um botão real precisa de destino confirmado.'],
      ['Transforme estilo em regras','Indique cores, tipografia, rótulos e informações prioritárias. “Elegante” pode significar poucas cores, respiro e uma hierarquia clara. Blur e transparência são escolhas, não requisitos.'],
      ['Guarde o contexto','Preencha o contexto do laboratório para reutilizar esses dados nos comandos. Exporte o progresso se precisar transportar o rascunho para outro navegador.']
    ],['Dados reais separados dos exemplos','Critérios visuais descritos','Informações opcionais e essenciais distinguidas'],['iniciar','marca']),
    lesson('referencias','direcao','Leia a referência antes de criar','Critérios transferíveis sem copiar a identidade de outro projeto.',[
      ['Observe estados','Veja entrada, menu, troca de ambiente, janela e retorno. Uma captura demonstra aparência, não comportamento.'],
      ['Descreva a função','Registre como o visitante encontra o menu, identifica onde está e retorna ao tour. Observe também o que muda no celular.'],
      ['Adapte à sua marca','Aproveite hierarquia e lógica de navegação. Use materiais autorizados do seu projeto. Textos e contatos de outro cliente ficam fora da adaptação.']
    ],['Estados observados registrados','Limites da observação declarados','Direção própria definida'],['referencia']),
    lesson('primeira-skin','experiencia','Sua primeira composição','Um pequeno percurso interativo para avaliar antes de ampliar.',[
      ['Construa o essencial','Comece com título do ambiente, menu de três destinos e painel de informações. Sem mapas, animações e funções adicionais que não ajudem o exercício.'],
      ['Faça o percurso completo','Abra o menu, escolha outro ambiente, abra uma informação, feche e retome a exploração. Teste a saída do painel, não apenas a abertura.'],
      ['Identifique a simulação','No protótipo, indique quais ações ainda não controlam um player real. Uma tela bonita não prova integração com 3DVista ou Pano2VR.']
    ],['Percurso demonstrável','Desktop e mobile representados','Ações simuladas identificadas'],['compor','navegacao']),
    lesson('adaptativo','experiencia','Desktop e mobile com a mesma função','Uma matriz de equivalência e duas composições adequadas ao espaço.',[
      ['Reorganize a informação','Menu lateral no desktop pode virar uma gaveta no celular. A informação continua acessível por um botão identificável.'],
      ['Trabalhe com estados','Defina aberto, fechado, ativo, rolagem e retorno. Compartilhe os dados e preserve seleção e idioma entre as apresentações.'],
      ['Confira toque e orientação','Considere alvos de toque de 44 × 44 CSS px como ponto de partida, espaço entre botões e ausência de dependência de hover. Teste retrato e paisagem; a medida sozinha não certifica acessibilidade.']
    ],['Toda função essencial tem acesso mobile','Fechamento e retorno definidos','Retrato e paisagem conferidos'],['adaptar']),
    lesson('paineis','experiencia','Janelas que abrem e fecham bem','Painéis que preservam leitura, toque e continuidade do tour.',[
      ['Organize as camadas','Evite que um toque atravesse a janela e acione um hotspot atrás. O controle deve respeitar o que o player permite.'],
      ['Cuide do foco','Ao abrir, leve o foco à janela. Ao fechar, retorne ao controle de origem. Conteúdo oculto não deve continuar no caminho do teclado.'],
      ['Teste o estado difícil','Role um conteúdo longo, gire o aparelho com o painel aberto e confira se ainda consegue fechar. Preserve o estado anterior da panorâmica.']
    ],['Fechar sempre acessível','Foco e gestos conferidos','Retorno preservado'],['paineis']),
    lesson('3dvista','integracao','Caminho 3DVista','Um percurso conectado e testado em uma cópia do export real.',[
      ['Inspecione os arquivos','Identifique versão, entrada realmente exportada, mídias e IDs. Não renomeie index.htm por hábito e não exija uma pasta que não existe.'],
      ['Escolha a forma de integração','Distinga skin nativa de camada externa. Use ações e eventos comprovados na documentação e no projeto. Preserve núcleo, licença e mídias.'],
      ['Comprove no player','Troque por menu e por hotspot. Confira panorama, título e seleção. Se as mídias não estiverem acessíveis, registre o teste como incompleto.']
    ],['Cópia e mídias preservadas','Tipo de integração identificado','Menu e hotspot testados no player'],['integrar','sincronizar'],'3dvista'),
    lesson('pano2vr','integracao','Caminho Pano2VR','Um percurso conectado e testado no projeto e na saída do Pano2VR.',[
      ['Leia o projeto real','Identifique versão, nós, skin e configuração de saída. Use a documentação correspondente ao programa disponível.'],
      ['Mapeie ações e estados','Determine como menu, nó ativo e painéis se relacionam. Não traduza APIs ou pastas do 3DVista por semelhança.'],
      ['Confira a saída gerada','Teste navegação, salvamento, reabertura e geração de nova saída. Declare integração pendente enquanto essas verificações não forem realizadas.']
    ],['Nós e ações identificados','Saída testada no player','Projeto salvo e reaberto'],['integrar','sincronizar'],'pano2vr'),
    lesson('safari','qualidade','Safari e iPhone desde o início','Uma ficha com testes reais, evidências e pendências identificadas.',[
      ['Separe os ambientes','Emulação no Chromium ajuda a revisar dimensões. Safari em iPhone físico é uma verificação diferente. Registre modelo e versão, mantendo iOS 18 entre os alvos e consultando também a versão atual.'],
      ['Execute os cenários críticos','Abra e feche painéis com barras visíveis, gire o aparelho e retorne à aba. Confira áreas seguras e teclado quando houver campo de texto.'],
      ['Ofereça alternativas','Áudio, orientação, tela cheia e VR dependem do navegador. Verifique permissões e capacidades reais. Um aparelho indisponível fica pendente, nunca aprovado por suposição.']
    ],['Ambientes reais distinguidos da emulação','Cenários críticos registrados','Pendências e alternativas declaradas'],['ios']),
    lesson('revisar','qualidade','Corrija a causa, preserve a base','Uma correção localizada com comparação e testes pertinentes.',[
      ['Descreva o defeito','Registre versão, tela, orientação, componente, ação e resultado esperado e observado. Um botão cortado é um problema concreto; “melhore tudo” não delimita a correção.'],
      ['Teste uma hipótese','Se o problema voltou, investigue a causa antes de repetir mudanças amplas. Não regenere panoramas nem reconstrua a skin para deslocar um botão.'],
      ['Confira o efeito da alteração','Verifique os estados antes e depois. Um componente compartilhado pode afetar várias cenas; amplie os testes quando isso ocorrer. Registre desempenho apenas quando medido.']
    ],['Defeito reproduzível descrito','Decisões válidas preservadas','Correção e efeitos adjacentes conferidos'],['corrigir','desempenho']),
    lesson('reexportacao','qualidade','Sobreviva à próxima exportação','Um procedimento testado para gerar a saída novamente e retomar a personalização.',[
      ['Preserve o ponto de retorno','Guarde a saída funcional e faça a nova geração em outra cópia. Não teste em um tour de cliente publicado.'],
      ['Reconheça o que mudou','Confira IDs, destinos, caminhos e alterações que a ferramenta sobrescreve. Reaplique apenas os pontos necessários.'],
      ['Repita o percurso','Teste menu, hotspot, painel, título e seleção. Documente restauração e o que depende de reaplicação.']
    ],['Versão funcional preservada','Nova saída comparada','Procedimento de reaplicação conferido'],['reexportar']),
    lesson('variacoes','producao','Uma base, novas possibilidades','Uma variação controlada e regras separadas dos dados do cliente.',[
      ['Mude uma variável','Preserve A-base e crie B com outra posição do menu, por exemplo. Compare o mesmo conteúdo e o mesmo percurso.'],
      ['Registre a hipótese','Explique o que espera melhorar: acesso ao menu, leitura ou área livre para o panorama. Preferência visual não comprova conversão.'],
      ['Prepare o próximo cliente','Reutilize regras de identidade e componentes. Atualize contatos, ambientes, mídia e destinos em um projeto separado e revise novamente.']
    ],['Base e variação separadas','Variável e hipótese identificadas','Dados de clientes separados das regras'],['variar','cliente']),
    lesson('entrega','producao','Entregue para continuar','Uma saída conferida, um padrão próprio e instruções de retomada.',[
      ['Conclua com evidência','Confira a saída fora do protótipo e no destino de teste autorizado. Liste funções e ambientes realmente verificados.'],
      ['Guarde o padrão','Documente composição, equivalência mobile, componentes, integração, reexportação e restauração. Preserve todos os arquivos referenciados.'],
      ['Registre o esforço','Anote tempo ativo, espera e gastos confirmados. Diferencie licença, assinatura, API, hospedagem e trabalho humano. Não converta percentuais de limite em um preço exato por tour.']
    ],['Saída e pendências identificadas','Padrão e retomada documentados','Esforço registrado com dados observados'],['entregar'])
  ];
  function activeLessons(platform){return lessons.filter(l=>l.platform==='ambos'||l.platform===platform);}
  function commandText(id,context={}){
    const c=commands.find(c=>c.id===id); if(!c)throw Error('Comando desconhecido');
    const clean=v=>typeof v==='string'?v.trim().slice(0,1200):'';
    return `MÁQUINA DE TOUR 360 · ${c.title}\n\nCONTEXTO DO PROJETO\nProjeto: ${clean(context.project)||'Projeto de estudo'}\nPrograma: ${context.platform==='pano2vr'?'Pano2VR':'3DVista'}\nObjetivo: ${clean(context.objective)||'Apresentar três ambientes e facilitar a navegação.'}\nIdentidade e materiais: ${clean(context.brand)||'Marca fictícia Espaço Horizonte. Materiais ainda por identificar.'}\n\nPEDIDO\n${c.prompt}\n\nUse os arquivos e decisões já fornecidos no trabalho. Informe limites reais de acesso. Preserve originais e versões aprovadas. Descreva o resultado produzido e o que foi efetivamente verificado. Este texto organiza o pedido; sua execução depende de ferramentas e arquivos acessíveis.`;
  }
  const api={modules,commands,lessons,activeLessons,commandText};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.TourGuide=api;
})(typeof window!=='undefined'?window:globalThis);
