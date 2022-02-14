import styled from 'styled-components'

const Background = styled.form`
    width: 100%;
    height: 100%;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const PokestoreLogo = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -20px;
    margin-bottom: 50px;
`

const Label = styled.div`
    color: #fff;
    font-weight: 700;
`

const Input = styled.input`
    width: 303px;
    height: 52px;
    border: none;
    border-radius: 5px;
    border-color: ${props => props.validity ? '#000' : '#EC362D'};
    border-style: solid;
    padding-left: 15px;
    font-size: 20px;
`
const Button = styled.button`
    background-color: #8b0000;
    height: 50px;
    width: 150px;
    margin-top: 20px;
    font-weight: 700;
`


export {Background, PokestoreLogo, Label, Input, Button}