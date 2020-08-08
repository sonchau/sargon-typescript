import * as React from 'react'
import styled from "styled-components"
import SeachForm from './SearchForm'

const MainStyled = styled.main`
  padding: 2rem;
`;

const Main:React.FC = () => (
  <MainStyled>
    <SeachForm />
  </MainStyled>
)

export default Main
