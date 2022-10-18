import styled from "styled-components";

export const SearchInputWrapper = styled.div`
    height: 3.1rem;
    width: 12.3rem;
    border: 2px solid white;
    display: flex;
    justify-conten: space-around;
    align-items: center;
    color: white;
`

export const SearchInput = styled.input`
    width: 80%;
    height: 2rem;
    display: flex;
    border: 0px;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`