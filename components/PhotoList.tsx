import * as React from 'react'
import ListItem from './ListItem'
import { User, Photo } from '../interfaces'
import styled from "styled-components"
import {useRecoilValue} from 'recoil'
import {photoListState} from '../recoil/state';

const PhotoListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  list-style: none;
`;

type Props = {
  items: Photo[]
}

const PhotoList = ({ items }: Props) => {
  const photoList = useRecoilValue(photoListState);
  console.log('photoList state', photoList)
  return (<ul>
    
    </ul>)
}
  


export default PhotoList
