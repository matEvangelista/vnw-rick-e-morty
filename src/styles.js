import styled from "styled-components"

function colorGender(gender) {
    let result;
    switch(gender[0]){
        case 'M':
            result = 'rgb(26, 147, 190)';
            break;
        case 'F':
            result = 'pink';
            break;
        default:
            result = 'gray';
            break;
    }
    return result;
}

function colorStatus(status) {
    let result;
    switch(status[0]) {
        case 'A':
            result = 'green';
            break;
        case 'D':
            result = 'red';
            break;
        default:
            result = 'gray';
            break;
    }
    return result;
}

export const Button = styled.button`
    background-color: lightgreen;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px darkgreen;
    transition: .2s;

    &:hover {
        cursor: pointer;
        background-color: rgb(8, 120, 0);
        color: white;
    }

    &:disabled {
        background-color: lightgreen;
        cursor: not-allowed;
        color: gray;
    }
`

export const CardItSelf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #22262A;
    color: white;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 5px black;

    h2:first-child {
        font-size: 2rem;
    }

    .gender {
        color: ${props => colorGender(props.gender)}
    }

    .status {
        color: ${props => colorStatus(props.status)};
    }

    img {
        border-radius: 50%;
        margin-top: 1rem;
        max-width: 300px;
    }
`

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 95%;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Tudo = styled.section`
    background-color: rgb(12, 55, 19);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
        width: 100%;
        max-width: 700px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    max-width: 400px;
    justify-content: space-between;
    margin: 2rem;
`