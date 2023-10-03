import React from "react";
import { Link } from "react-router-dom";
import {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledLogo,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
} from "./SearchPage.Styled";
import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";

const SearchPage = () => {
  return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchHeader>
        <StyledHeaderLeft>
          <Link to="/">
            <StyledLogo
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
              alt="googlelogo"
            />
          </Link>
          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              <StyledOptions>
                <SearchIcon />
                <Link to="/all">All</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
      </StyledSearchHeader>
    </StyledSearchPageHeaderContainer>
  );
};

export default SearchPage;
