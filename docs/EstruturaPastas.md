## Estrutura de Pastas e Arquivos do Projeto

Dentro da pasta do seu projeto, você encontrará estes arquivos e pastas:

### `node_modules/`
A "caixa de ferramentas" do projeto.  
Contém o código de todas as dependências que instalamos.  
⚠️ Nunca mexa nesta pasta!

---

### `public/`
Para arquivos estáticos que não mudam, como imagens (`logo.svg`), fontes e o `favicon.png`.

---

### `src/`
O coração do seu projeto!  
É aqui que vamos passar **99% do nosso tempo**, escrevendo nossos componentes e estilos.

---

### `.gitignore`
Uma lista de arquivos e pastas que o sistema de controle de versão (**Git**) deve ignorar.

---

### `index.html`
A "casca" principal da nossa página.  
É um HTML simples com uma `<div id="root"></div>`.  
É aqui que o React vai **se encaixar**.

---

### `package.json`
O "documento de identidade" do projeto.  
Lista as dependências, scripts (`npm run dev`) e outras informações.

## Um Tour pela Pasta `src/`

✨ **Onde a Mágica Acontece** ✨  
Vamos olhar os arquivos mais importantes dentro da pasta `src/`:

### `main.jsx`
É o ponto de entrada do nosso código React.  
Ele encontra a `<div id="root">` no `index.html` e diz ao React para renderizar nosso componente principal lá dentro.

---

### `App.jsx`
Nosso primeiro componente React.  
É o componente **"pai"** que envolve toda a nossa aplicação.  
É aqui que vamos começar a construir nossa página.

---

### `App.css` e `index.css`
Arquivos de **CSS** para estilizar nossos componentes.  
Podemos apagar o conteúdo deles para começar **do zero**.
