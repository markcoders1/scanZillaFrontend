import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import "../../Pages/UserManagement/Usermanagement.css";
import SearchIcon from "../../assets/images/searchIcon.png";
import array from "../../utilis/value.json";
import array1 from "../../utilis/value2.json";


const Liscenced = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("frontend");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle tab change for filtering licenses
  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  const licensesToFilter = filter === "frontend" ? array : array1;

  // Filtered licenses based on search and filter
  const filteredLicenses = licensesToFilter.filter((license) => {
    const matchesSearch =
      license.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (license.publisher?.toLowerCase() || "").includes(
        searchTerm.toLowerCase()
      ) ||
      (license.email?.toLowerCase() || "").includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <Box
      sx={{
        top: {
          lg: "0px",
          xs: "80px",
        },
        height: "70vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "20px 0px",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#DFDFDF",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "black",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#b30000",
        },
      }}
    >
      {/* Search and Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexDirection:{
            md:"row",
            xs:"column"
          },
          gap:"30px"
        }}
      >
        <Box sx={{ position: "relative", width: "350px" }}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            style={{
                color: "#A0A4A9",
                fontSize: "18px",
                padding: "9px 47px 9px 27px",
                borderRadius: "44px",
                boxShadow: "4px 3px 10px 0px #C8C8C8 ",
                border: "none",
                outline: "none",
                position: "relative",
                width: "100%",
                
              }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img
            src={SearchIcon}
            alt="Search"
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
            }}
          />
        </Box>
        <Tabs value={filter} onChange={handleFilterChange}>
          <Tab label="Frontend Licenses" value="frontend" />
          <Tab label="Backend Licenses" value="backend" />
       
        </Tabs>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table
           sx={{ minWidth: 650, padding: "0px 15px" }}
              aria-label="user table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#1A0049",
                  color: "#FDFDFD",
                  fontWeight: "500",
                  padding: "10px 0px",
                  fontSize: "14px",
                  textAlign: "center",
                  borderRadius: "8px 0px 0px 8px",
                  minWidth: "260px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1A0049",
                  color: "#FDFDFD",
                  fontWeight: "500",
                  padding: "10px 10px",
                  fontSize: "14px",
                  textAlign: "center",
                  minWidth: "160px",
                }}
              >
                Licenses
              </TableCell>

              <TableCell
                sx={{
                  backgroundColor: "#1A0049",
                  color: "#FDFDFD",
                  fontWeight: "500",
                  padding: "10px 10px",
                  fontSize: "14px",
                  textAlign: "center",
                  minWidth: "160px",
                }}
              >
                Publisher
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1A0049",
                  color: "#FDFDFD",
                  fontWeight: "500",
                  padding: "10px 10px",
                  fontSize: "14px",
                  textAlign: "center",
                  minWidth: "160px",
                }}
              >
                Repository
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1A0049",
                  color: "#FDFDFD",
                  fontWeight: "500",
                  padding: "10px 10px",
                  fontSize: "16px",
                  textAlign: "center",
                  borderRadius: "0px 8px 8px 0px",
                }}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLicenses.map((license, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "14px",
                    textAlign: "start",
                    padding: "10px !important",
                    color: "#333333",
                    fontWeight: "500",
                    border: "none",
                    borderRadius: "10px 0px 0px 10px",
                    width:"fit-content !important"
                  }}
                >
                  {license.name || "N/A"}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "20px !important",

                    color: "#333333",
                    fontWeight: "500",
                    border: "none",
                  }}
                >
                  {license.licenses || "N/A"}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "20px !important",

                    color: "#333333",
                    fontWeight: "500",
                    border: "none",
                  }}
                >
                  {license.publisher || "N/A"}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "20px !important",

                    color: "#333333",
                    fontWeight: "500",
                    border: "none",
                    
                  }}
                >
                  <a
                    href={license.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {license.repository || "N/A"}
                  </a>
                </TableCell>
                <TableCell
                 sx={{
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "20px !important",

                    color: "#333333",
                    fontWeight: "500",
                    border: "none",
                    borderRadius: "0px 10px 10px 0px !important",
                  }}
                >{license.email || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Liscenced;
