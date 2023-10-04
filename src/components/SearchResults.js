import React from "react";
import {
  SearchResultsContainer,
  SearchResultsWrapper,
  SearchResultsTitle,
} from "./SearchResults.Styled";
import { Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchResults = ({ data = {} }) => {
  return (
    // main div
    <SearchResultsContainer>
      {/* about number of results and time */}
      <Typography
        variant="p"
        component="p"
        sx={{
          whiteSpce: "nowrap",
          fontFamily: "Google Sans, Roboto, arial, sans-serif",
          paddingTop: "8px",
          fontSize: "0.875rem",
          color: "#bdc1c6",
        }}>
        About {data?.searchInformation?.formattedTotalResults} results{" "}
        {data?.searchInformation?.searchTime} seconds
      </Typography>
      {/* about number of results and time ends */}

      {/* display search results */}
      {data?.items?.map((item) => (
        <SearchResultsWrapper key={item?.cacheId}>
          <div>

            {/* Title for the search */}
            <SearchResultsTitle href={item?.link}>
              {item?.pagemap?.cse_image?.length > 0 &&
                item?.pagemap?.cse_image[0]?.src && (
                  <img src={item?.pagemap?.cse_image[0]?.src} alt="thumbnail" />
                )}
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#bdc1c6",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}>
                {item?.displayLink}
              </Typography>
            </SearchResultsTitle>
            
            <SearchResultsTitle href={item?.link}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  color: "c58af9",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                }}>
                {item?.title}
              </Typography>
            </SearchResultsTitle>
            <Typography
              variant="body1"
              component="body1"
              sx={{
                marginTop: "16px",
                fontSize: ".875rem",
                fontFamily: "Roboto sans=serif",
                fontWeight: "normal",
                color: "bdc1c6",
              }}>
              {item?.snippet}
            </Typography>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon sx={{ fontSize: "0.875rem", color: "#bdc1c6" }} />
            </IconButton>
          </div>
        </SearchResultsWrapper>
        // search results ends
      ))}
    </SearchResultsContainer>
    // amin div ends
  );
};

export default SearchResults;
