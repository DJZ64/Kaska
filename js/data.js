// ====== CONTEÚDO (edite aqui para adicionar receitas, imagens e redes) ======
// Redes sociais: preencha com os links reais (ex.: Instagram:'https://instagram.com/seuperfil'). Itens vazios não aparecem no site.
const SOCIAL={Instagram:'',YouTube:'',Pinterest:''};
const DESC={inicio:'KASKA: receitas e educação alimentar para aproveitar cascas, talos, folhas e sementes.',receitas:'Biblioteca de receitas de aproveitamento integral dos alimentos, com filtros e busca.',aproveitamento:'Cascas, talos, folhas e sementes: o que pode ser aproveitado, com alertas de segurança.',conscientizacao:'Entenda o desperdício de alimentos, veja dicas práticas e a meta 12.3 da ODS 12.',sobre:'Propósito, missão, visão e valores da KASKA.'};
const REFS={
anvisa:['Anvisa: para desinfetar frutas e verduras, use água e uma solução própria para alimentos','https://www.gov.br/anvisa/en/updates/to-disinfect-produce-use-water-and-a-proper-solution-specifically-designed-for-food'],
saneantes:['Anvisa: consulta de produtos saneantes registrados','https://consultas.anvisa.gov.br/#/saneantes/produtos/'],
onu:['ONU Brasil: meta 12.3 e o desperdício global de alimentos','https://brasil.un.org/pt-br/114718-onu-17-de-todos-os-alimentos-dispon%C3%ADveis-para-consumo-s%C3%A3o-desperdi%C3%A7ados'],
pnuma:['PNUMA: Índice de Desperdício de Alimentos 2021','https://www.unep.org/pt-br/resources/relatorios/indice-de-desperdicio-de-alimentos-2021'],
glos:['ONU Brasil: glossário da ODS 12 (texto da meta 12.3)','https://www.undp.org/sites/g/files/zskgke326/files/migration/br/glossario_ODS12.pdf']};
const PAGES=[['inicio','Início'],['receitas','Receitas'],['aproveitamento','Aproveitamento integral'],['conscientizacao','Conscientização'],['sobre','Sobre a KASKA']];
// campo "img": coloque o caminho de uma foto para substituir o emoji
const R=[
{id:'bolo-casca-banana',nome:'Bolo de casca de banana',ing:'Banana',parte:'Casca',cats:['Frutas','Cascas'],e:'🍌',c:'#D8A94D',t:'55 min',y:'10 fatias',
d:'Bolo úmido e aromático, com a casca batida junto da massa.',
h:'A casca da banana madura é macia e adocicada depois de batida. Ela dá cor, umidade e um sabor que lembra o do bolo de banana comum.',
i:['3 cascas de banana madura, de preferência orgânica','3 ovos','½ xícara de óleo','1 xícara de açúcar mascavo','½ xícara de leite','2 xícaras de farinha de trigo','1 colher (sopa) de fermento em pó','1 colher (chá) de canela'],
p:['Lave bem as cascas com água corrente e uma escovinha. Retire as pontas.','Bata no liquidificador as cascas, os ovos, o óleo, o açúcar e o leite até ficar liso.','Misture a farinha, o fermento e a canela. Junte o líquido e mexa só até incorporar.','Asse em forma untada, a 180 °C, por cerca de 35 a 40 minutos, até o palito sair limpo.'],
dica:'Use bananas bem maduras. Se não for orgânica, lave com mais cuidado, pois a casca fica em contato direto com agrotóxicos.',av:'Lave bem a casca em água corrente, escovando. Como o bolo vai ao forno, o cozimento completa o preparo.'},
{id:'pesto-talos',nome:'Pesto de talos',ing:'Brócolis',parte:'Talos',cats:['Verduras e legumes','Talos'],e:'🥦',c:'#78904B',t:'20 min',y:'1 pote pequeno',
d:'Pasta verde e cremosa para massas, torradas e sanduíches.',
h:'O talo do brócolis é macio e levemente adocicado. Cozido rápido e batido com azeite, vira a base de um pesto simples.',
i:['1 xícara de talos de brócolis picados','½ xícara de folhas de manjericão','⅓ xícara de castanhas ou nozes','1 dente de alho','⅓ xícara de azeite','Suco de ½ limão','Sal a gosto'],
p:['Descasque a parte mais fibrosa do talo e corte em cubos pequenos.','Cozinhe em água fervente por 3 minutos e escorra. Deixe esfriar.','Bata todos os ingredientes até obter a textura desejada. Acerte o sal e o limão.','Guarde em pote limpo, coberto com azeite, na geladeira.'],
dica:'Congele em forminhas de gelo e use porções individuais em massas e molhos.',av:'Higienize o manjericão e o que for consumido cru com água corrente e solução própria para alimentos. Guarde refrigerado, consuma em poucos dias e descarte se notar mudança de cheiro, cor ou textura.'},
{id:'chips-casca-batata',nome:'Chips de casca de batata',ing:'Batata',parte:'Casca',cats:['Verduras e legumes','Cascas'],e:'🥔',c:'#E97835',t:'30 min',y:'2 porções',
d:'Crocantes, com azeite e páprica, assadas no forno.',
h:'Quando a batata é descascada para um purê, a casca vira um petisco crocante em poucos minutos.',
i:['Cascas de 4 batatas bem lavadas','2 colheres (sopa) de azeite','1 colher (chá) de páprica','Sal a gosto'],
p:['Esfregue bem as batatas sob água corrente antes de descascar.','Misture as cascas com azeite, páprica e sal.','Distribua em uma só camada numa assadeira.','Asse a 200 °C por 15 a 20 minutos, virando na metade, até dourar.'],
dica:'Sirva logo após assar. Elas perdem a crocância com o tempo.',av:'Não use batatas esverdeadas ou brotadas. Descarte a casca delas.'},
{id:'geleia-casca-maca',nome:'Geleia de casca de maçã',ing:'Maçã',parte:'Casca',cats:['Frutas','Cascas'],e:'🍎',c:'#E97835',t:'50 min',y:'1 pote médio',
d:'Geleia rosada e perfumada, com cascas que iriam para o lixo.',
h:'As cascas da maçã são ricas em pectina, que ajuda a geleia a ganhar corpo, e soltam uma cor bonita ao cozinhar.',
i:['Cascas de 6 maçãs bem lavadas','2 xícaras de água','1 xícara de açúcar','Suco de ½ limão','1 pau de canela (opcional)'],
p:['Cozinhe as cascas na água, em fogo médio, por 20 minutos.','Coe, pressionando as cascas, e leve o líquido de volta à panela.','Junte o açúcar, o limão e a canela. Cozinhe, mexendo de vez em quando, até engrossar.','Coloque em pote de vidro previamente esterilizado e feche ainda quente. Guarde na geladeira.'],
dica:'Para testar o ponto, pingue um pouco num prato frio. Se escorrer devagar, está pronto.',av:'Use pote de vidro limpo e esterilizado em água fervente. Guarde refrigerado e descarte se notar mofo, cheiro ou aspecto alterado.'},
{id:'farofa-talos-couve',nome:'Farofa de talos de couve',ing:'Couve',parte:'Talos',cats:['Verduras e legumes','Talos','Folhas'],e:'🥬',c:'#78904B',t:'20 min',y:'4 porções',
d:'Farofa crocante, com talos picados bem fino.',
h:'Os talos da couve são firmes e ganham sabor quando salteados. Picados fino, ficam crocantes no meio da farofa.',
i:['1 xícara de talos de couve picados bem fino','2 colheres (sopa) de óleo ou manteiga','½ cebola picada','2 dentes de alho','1½ xícara de farinha de mandioca','Sal a gosto'],
p:['Refogue a cebola e o alho no óleo até dourar.','Junte os talos e salteie por cerca de 5 minutos, até ficarem macios.','Acrescente a farinha aos poucos, mexendo sempre.','Acerte o sal e sirva ainda morna.'],
dica:'Use as folhas da couve em outra preparação, como refogado ou caldo.',av:'Lave bem as folhas e os talos, um a um, em água corrente.'}];
const I=[
{g:'Cascas',n:'Banana',e:'🍌',p:'Casca',x:'Cozida ou batida na massa de bolos e doces.',r:'bolo-casca-banana',a:'Lave bem. Prefira orgânica.'},
{g:'Cascas',n:'Batata',e:'🥔',p:'Casca',x:'Assada como chips ou frita em airfryer.',r:'chips-casca-batata',a:'Descarte se estiver verde ou brotada.'},
{g:'Cascas',n:'Maçã',e:'🍎',p:'Casca',x:'Geleias, chás e compotas.',r:'geleia-casca-maca',a:'Lave e escove antes de usar.'},
{g:'Talos',n:'Brócolis',e:'🥦',p:'Talo',x:'Pesto, refogados, sopas e recheios.',r:'pesto-talos',a:'Retire a camada mais fibrosa.'},
{g:'Talos',n:'Couve',e:'🥬',p:'Talo',x:'Farofas, refogados e caldos.',r:'farofa-talos-couve',a:'Pique bem fino para amolecer.'},
{g:'Folhas',n:'Cenoura',e:'🥕',p:'Folhas',x:'Pesto, farofas e omeletes, em pequenas porções.',a:'Use só folhas frescas e bem lavadas.'},
{g:'Folhas',n:'Beterraba',e:'🟣',p:'Folhas',x:'Refogadas como couve, em tortas e recheios.',a:'Não confunda com folhas de tomate: elas não devem ser consumidas.'},
{g:'Sementes',n:'Abóbora',e:'🎃',p:'Sementes',x:'Lave, seque e asse. Servem de petisco ou topping de saladas.',a:'Seque bem antes de assar e guarde em pote fechado.'}];
