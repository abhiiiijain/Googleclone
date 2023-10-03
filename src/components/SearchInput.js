import React, { useState } from "react";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./Searchinput.Styled";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchInput = ({showButtons = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <StyledInputWrapper>
          <StyledSearchIcon />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Tooltip title="Search by voice">
            <StyledMicIcon />
          </Tooltip>
        </StyledInputWrapper>
        <StyledButtonContainer showButtons={showButtons}>
          <Button variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </StyledButtonContainer>
      </div>
    </form>
  );
};

export default SearchInput;
