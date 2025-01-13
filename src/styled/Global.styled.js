import { createGlobalStyle } from 'styled-components'
import BackGround from '../assets/images/backgrounds/moroccan-flower-dark.png'

export const GlobalStyle = createGlobalStyle`

body {
  background: url(${BackGround});
  font-family: 'Verdana';
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1 {
  font-family: 'Luckiest Guy';
  color: white;
  font-size: 3.0rem;
}
`