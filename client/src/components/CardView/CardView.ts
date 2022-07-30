import styled from 'styled-components'

export const CardViewContainer = styled.div`
  display: flex;
  flex-direction: column;

`

export const CardViewTitleContainer = styled.div`
  margin: 3px;
  padding: 4px;
`

export const CardTitle = styled.input`
  font-size: medium;
  font-weight: normal;
`

export const CardViewDescriptionContainer = styled.div `
  margin: 3px;
  padding: 4px;
` 

export const CardDescription = styled.textarea`
  font-size: medium;
  font-weight: normal;
  width: 100%;
  height: 300px;
  overflow: scroll;
` 

export const CardViewSettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
` 

export const CardUpdate = styled.button`
  width: 70px;
  border-radius: 3px;
  margin: 3px;
`

export const CardDelete = styled.button`
  width: 70px;
  border-radius: 3px;
  margin: 3px;
`

export const CardViewForm = styled.form`

`