import * as React from 'react'
import styled from "styled-components"
import SeachForm from './SearchForm'
import PhotoList from './PhotoList'

const MainStyled = styled.main`
  padding: 2rem;
`;

const Main:React.FC = () => (
  <MainStyled>
    <SeachForm />
    <PhotoList />
  </MainStyled>
)

export default Main
