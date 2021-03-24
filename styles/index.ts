import styled from "styled-components";


export const Layout = styled.div`
  min-height: 100vh;
`


export const Container = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-gap: 2em;
  place-items: center;
`

export const Weekend = styled.div`
  margin: 1em 0;
  display: flex;
  align-self: center;
  flex-wrap: wrap;

  .single-day {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid green;
    padding: 1em;

    &.bridge-day {
      border: 1px solid yellow;
    }
  }
`;
