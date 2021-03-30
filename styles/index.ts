import styled, { css } from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
`

export const LinkButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-self: center;
  max-width: 90vw;
`

const buttonAndLinkStyles = css`
  display: inline-block;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  background: var(--light-primary);
  color: #ffffff;
  font: inherit;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;

  &:hover,
  &:focus {
    background: var(--orange);
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`

export const LinkButton = styled.a`
  ${buttonAndLinkStyles}
`

export const DownloadButton = styled.button`
  ${buttonAndLinkStyles}
  place-self: center;
`

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    margin-top: 1rem;
  }
  .green,
  .yellow {
    width: 20px;
    height: 20px;
    margin: 0 1rem;
  }

  .green {
    border: 1px solid var(--green);
  }

  .yellow {
    border: 1px solid var(--yellow);
  }
`

export const Title = styled.p`
  font-weight: 700;
`

export const Container = styled.div`
  width: max-content;
  max-width: 98vw;
  height: 100vh;
  margin: 0 1vw;

  height: auto;
  display: grid;
  grid-gap: 2em;
  h1 {
    place-self: center;
  }
`

export const Weekend = styled.div`
  margin: 1em 0;
  display: flex;
  flex-wrap: wrap;

  .single-day {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid var(--green);
    padding: 1em;
    margin: 0 1px;

    &.bridge-day {
      border: 1px solid var(--yellow);
    }
  }
`

export const SingleWeekendContainer = styled.div``
