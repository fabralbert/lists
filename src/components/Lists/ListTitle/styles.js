import styled from 'styled-components'

export const ListHeader = styled.div`
  position: relative;
`
export const ListHeaderTitle = styled.h2`
  margin: 0;
  margin-top: 14px;
  background-color: #ff6a55;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  color: #ffffff;
  max-width: 100%;
  word-wrap: break-word;
  ${(props) =>
    !props.toggleList &&
    `
    background-color: #fff;
    color: #000000;
    `}
`

export const ListsCount = styled.span`
  color: rgba(255, 255, 255, 0.8);
  ${(props) =>
    !props.toggleList &&
    `
    color: rgba(0, 0, 0, 0.4);
    `}
`

export const ListHeaderButtonClean = styled.button`
  position: absolute;
  top: 16px;
  right: 64px;
  font-weight: 600;
  font-size: 16px;
  font-family: inherit;
  color: #fff;
  border: none;
  background-color: #ff6a55;
  cursor: pointer;

  ${(props) =>
    !props.toggleList &&
    `
    background-color: #fff;
    color: rgba(0, 0, 0, 0.2);
    `}
`

export const ListHeaderButtonDelete = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 600;
  font-size: 16px;
  font-family: inherit;
  color: #fff;
  border: none;
  background-color: #ff6a55;
  cursor: pointer;

  ${(props) =>
    !props.toggleList &&
    `
    background-color: #fff;
    color: rgba(0, 0, 0, 0.2);
    `}
`
export const VelticalLine = styled.div`
  position: absolute;
  top: 16px;
  right: 51px;
  width: 2px;
  height: 20px;
  background-color: #fff;
  z-index: 10;
  ${(props) =>
    !props.toggleList &&
    `
    background-color: rgba(0, 0, 0, 0.2);
    `}
`
