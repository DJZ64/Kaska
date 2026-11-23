# KASKA

Site estático (HTML, CSS e JavaScript puro). Sem build e sem dependências.

## Estrutura
- `index.html`: página única; as 5 páginas e as receitas são rotas por hash (`#receitas`, `#r-bolo-casca-banana`).
- `css/styles.css`, `js/data.js` (conteúdo), `js/app.js` (interface).
- `assets/logo.png` (versão web 1000 px), `assets/logo-original.png` (arquivo oficial, mantido intacto).

## Editar conteúdo (js/data.js)
- Nova receita: copie um objeto de `R` e troque os campos. O `id` vira o link `#r-<id>`.
- Foto no lugar do emoji: coloque o arquivo em `assets/img/` e adicione `img:'assets/img/nome.jpg'` à receita ou ao ingrediente.
- Redes sociais: preencha `SOCIAL`. Itens vazios não aparecem.

## Rodar localmente
`python3 -m http.server 8000` e abra http://localhost:8000 (não abra o index.html com duplo clique: os caminhos começam em "/" e exigem um servidor, como na Vercel)

## Publicar na Vercel
1. Com Git: suba esta pasta para um repositório no GitHub, entre em vercel.com, "Add New > Project", importe o repositório. Framework: "Other". Sem build command. Output: raiz.
2. Ou pela CLI: `npm i -g vercel`, depois `vercel login` e, na pasta do projeto, `vercel --prod`.
