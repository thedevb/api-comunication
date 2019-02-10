import styled from 'styled-components';
import { Mr } from '../utils/spacing-css'

export const Input = styled.input.attrs((props) => ({
    type: props.Type ? props.Type : 'text',
    id: props.Name_For
  }))`
    border: none;
    background-color: #8a97f2;
  `;

  export const Form_Group = styled.div`
    & label {
        color: red;
        margin-bottom: 4px;
    }
  `;

export const Label = styled.label.attrs((props) => ({
  for: props.Name_For
}))`
    display: block;
`;

export const Submit = styled.button.attrs((props) => ({
  type: 'submit'
}))`
  background-color: red;
`