import styled from 'styled-components'

const Background = styled.form`
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const PokestoreLogo = styled.img`
    width: 100px;
    height: 100px;
`

const Label = styled.div`
    color: #fff;
`

const Input = styled.input`

`
const Button = styled.button`
    background-color: darkred;
    margin-top: 20px;
`


export {Background, PokestoreLogo, Label, Input, Button}