import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
`

export const LinkButton = styled.a`
  display: inline-block;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  background: #5e82a7;
  color: #ffffff;
  font: inherit;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;

  &:hover,
  &:focus {
    background: #a6bace;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
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
`
