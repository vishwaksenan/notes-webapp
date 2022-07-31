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
margin-top: 10px;
border-color: rgba(33, 37, 41, 0.15);
color: #292b2c;
padding: 12px;
border-radius: 0.25rem;
line-height: 1.5;
vertical-align: middle;
&:focus {
  outline: none;
}
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