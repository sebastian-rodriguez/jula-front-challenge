import React from "react";
import { SearchInputWrapper, SearchInput} from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return(
        <SearchInputWrapper>
            <SearchInput />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchInputWrapper>
    )
}

export default Search;