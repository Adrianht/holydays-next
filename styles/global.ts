import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --primary: #2c3e50;
  }

  body {
    background-color: var(--primary);
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    display: grid;
    place-items: center;
    color: #fff;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`
