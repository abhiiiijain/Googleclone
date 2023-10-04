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
  StyledHeaderRight,
} from "./SearchPage.Styled";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { Tooltip, IconButton } from "@mui/material";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    // main div
    <StyledSearchPageHeaderContainer>
      {/* Header Section */}
      <StyledSearchHeader>
        {/* Left Div Start*/}
        <StyledHeaderLeft>
          {/* Google Logo */}
          <Link to="/">
            <StyledLogo
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
              alt="googlelogo"
            />
          </Link>

          {/* Middle Div Start*/}
          <StyledHeaderMiddle>
            {/* Search Bar */}
            <SearchInput />

            {/* Icons Under Search Bar */}
            <StyledSubOptionsLeft>
              <StyledOptions>
                <SearchIcon />
                <Link to="/all">All</Link>
              </StyledOptions>
              <StyledOptions>
                <FeedIcon />
                <Link to="/news">News</Link>
              </StyledOptions>
              <StyledOptions>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </StyledOptions>
              <StyledOptions>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </StyledOptions>
              <StyledOptions>
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </StyledOptions>
              <StyledOptions>
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
            {/* Icons Ends  */}
          </StyledHeaderMiddle>
          {/* Middle Div Ends */}
        </StyledHeaderLeft>
        {/* Left Div Ends */}

        {/* Right Div Start */}
        <StyledHeaderRight>
          {/* Settings Icon */}
          <StyledOptions>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>

          {/* Google Apps Icon */}
          <StyledOptions>
            <Tooltip title="Google Apps">
              <IconButton>
                <AppsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>

          {/* Google Avatar */}
          <StyledOptions>
            <Tooltip title="Google Account">
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "8px",
                }}>
                AJ
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </StyledHeaderRight>
        {/* Right Div Ends */}
      </StyledSearchHeader>
      {/* Header Section Ends */}

      {/* Search Results */}
      {true && <SearchResults />}
      {/* Search Results Ends */}
    </StyledSearchPageHeaderContainer>
    // main div ends
  );
};

export default SearchPage;
