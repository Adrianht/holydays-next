import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --dark-primary: black;
    --light-primary: #2a9d8f;
    --yellow: #e9c46a;
    --orange: #f4a261;
    --red: #e76f51;
    --green: #52b788;
  }

  body {
    background-color: var(--dark-primary);
    margin: 0;
    display: grid;
    place-items: center;
    color: #fff;
    font-family: 'Karla', sans-serif;
    min-height: 100vh;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  #__next{
    display: grid;
    place-items: center;
  }
`
