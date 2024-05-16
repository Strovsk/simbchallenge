![](https://img.shields.io/badge/React-%23fff?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![](https://img.shields.io/badge/Vite-%23007ACC?style=for-the-badge&logo=vite&logoColor=%23EEE)
![](https://img.shields.io/badge/Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=%23EEE)
![](https://img.shields.io/badge/@MUI%20Components-%23fff?style=for-the-badge&logo=material-ui&logoColor=%23EEE)
![](https://img.shields.io/badge/Tippy.js-%23FFCA28?style=for-the-badge&logo=tippy.js&logoColor=%23EEE)
![](https://img.shields.io/badge/Swiper.js-%23000000?style=for-the-badge&logo=swiper&logoColor=%23EEE)

# Simbi Tech Case - Frontend

<p style="text-align: center;">
    <img src="./src/assets/background.svg" alt="Simbi Logo" />
</p>

## Sumário

- [Componentes](#components)
- [Hooks](#hooks)
- [Frameworks e Bibliotecas](#frameworks)

<h2 id="components">Componentes</h2>

Foram criados 3 componentes para a aplicação:

> Adicionei o prefixo `ProjetoRouanet` para facilitar a identificação dos componentes.

- `ProjetoRouanetCard`: Componente que exibe as informações de um item do banco de dados. (src/components/ProjetoRouanet/Card)

      Esse componente é responsável por exibir as informações de um item do banco de dados. Ele é utilizado no `ProjetoRouanetSlider`.

- `ProjetoRouanetSlider`: Componente que exibe os cards em um slider. (src/components/ProjetoRouanet/Slider)

  Esse componente é responsável por gerenciar e exibir os cards utilizando o Swiper.js.

- `ProjetoRouanetFavoriteIcon`: Componente que exibe um item do slider. (src/components/ProjetoRouanet/SliderItem)

  A motivação para ter segregado esse componente é a complexidade de seu conteúdo, com lógica e interação próprias que dizem respeito somente a ele. Para facilitar a manutenção, optei por separá-lo.

<h2 id="hooks">Hooks</h2>

Foram utilizados 2 hooks na aplicação:

- `useEffect`: Hook que foi utilizado para realizar a requisição à API dentro do component App.

        Particularmente, gostaria de ter utilizado o padrão já conhecido `useFetch`. Entretanto, pela complexidade da requisição, optei por manter a lógica no `useEffect` para facilitar a leitura do código a fim de focar nos items requisitados no case.

- `useState`: Hook que foi utilizado para gerenciar o estado dos diferentes componentes da aplicação.

        Esse hook utiliza o design pattern Observer para atualizar os componentes que dependem do estado. Isto é, quando o estado é atualizado, os componentes que dependem dele são atualizados automaticamente.

<h2 id="frameworks">Frameworks e Bibliotecas</h2>

Foram utilizados 6 frameworks / bibliotecas e plugins na aplicação:

- `React`: Como requisitado no case.
- `Vite`: Build tool que serve o código em desenvolvimento com hot reload.
- `Swiper.js`: Biblioteca para criar sliders.
- `Material-UI`: Biblioteca de componentes React.
- `Tippy.js`: Biblioteca para criar tooltips.
- `Docker`: Para facilitar a execução do projeto.
