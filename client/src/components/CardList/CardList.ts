import styled from 'styled-components'

export const CardListContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-evenly;
`

export const CardListSection = styled.div`
  margin: 2px;
  height: 60px;
  width: 100px;
  border-top: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  /* border-radius: 10px; */
  cursor: pointer;
  :hover{
    color: aqua;
  }
`

export const List = styled.p`
  font-size: medium;
  font-weight: bolder;
  text-align: center;
`

export const NotesCreateButton = styled.button`
  
`
