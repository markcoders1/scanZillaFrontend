import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TableSortLabel,
} from "@mui/material";
import "./Usermanagement.css"; // Make sure to create this CSS file for custom styles
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/images/searchIcon.png";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import LoaderMain from "../../Components/Loader/LoaderMain";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("createdAt");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toggleBlock = async (userId) => {
    try {
      const response = await axiosInstance({
        url: appUrl + "/toggleuseraccount",
        method: "get",
        params: {
          userId,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/getallusers",
        method: "get",
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [toggleBlock]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    const sortedUsers = [...users].sort((a, b) => {
      if (property === "createdAt") {
        const dateA = new Date(a[property]);
        const dateB = new Date(b[property]);
        return isAsc ? dateA - dateB : dateB - dateA;
      } else {
        if (a[property] < b[property]) {
          return isAsc ? -1 : 1;
        }
        if (a[property] > b[property]) {
          return isAsc ? 1 : -1;
        }
        return 0;
      }
    });
    setUsers(sortedUsers);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.credits.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderActionButtons = (userId) => {
    const user = users.find((u) => u._id === userId);
    const active = user && user.active === true;
    // console.log("active", active);
    return (
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <CustomButton
          border={active ? "2px solid #EE1D52" : "2px solid #31BA96"}
          borderRadius="10px"
          fontSize="14px"
          color={active ? "#EE1D52" : "#31BA96"}
          fontWeight="600"
          width="100px"
          ButtonText={active ? "Block" : "Unblock"}
          onClick={() => toggleBlock(userId)}
        />
        <CustomButton
          border="2px solid #333333"
          borderRadius="10px"
          fontSize="14px"
          color="#333333"
          fontWeight="500"
          width="134px"
          ButtonText="View Details"
          onClick={() => navigate(`userdetails/${userId}`)}
        />
      </Box>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
    
        <Box
          sx={{
            position: "relative",
            top: {
              lg: "0px",
              xs: "80px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-60px",
              right: {
                xs: "0px",
                sm: "20px",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <input
                type="search"
                name="search"
                id="search"
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
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <img
                src={SearchIcon}
                alt=""
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "20px",
                }}
              />
            </Box>
          </Box>

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
                      padding: "15px 20px",
                      fontSize: "22px",
                      textAlign: "center",
                      borderRadius: "8px 0px 0px 8px",
                    }}
                  >
                    All Users
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      padding: "15px 20px",
                      fontSize: "22px",
                      textAlign: "center",
                    }}
                  >
                    Credits
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      padding: "15px 20px",
                      fontSize: "22px",
                      textAlign: "center",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === "createdAt"}
                      direction={orderBy === "createdAt" ? order : "asc"}
                      onClick={() => handleRequestSort("createdAt")}
                      sx={{
                        color: "#FDFDFD",
                        "&.MuiTableSortLabel-root.Mui-active": {
                          color: "#FDFDFD",
                        },
                        "& .MuiTableSortLabel-icon": {
                          color: "#FDFDFD !important",
                        },
                      }}
                    >
                      Signed up on
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      padding: "15px 20px",
                      fontSize: "22px",
                      textAlign: "center",
                      borderRadius: "0px 8px 8px 0px",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user._id} sx={{ marginTop: "12px" }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontSize: "22px",
                        textAlign: "center",
                        padding: "12px",
                        color: "#333333",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "10px 0px 0px 10px",
                      }}
                    >
                      {user.userName}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "20px",
                        textAlign: "center",
                        padding: "10px",
                        color: "#333333",
                        fontWeight: "500",
                        border: "none",
                      }}
                    >
                      {user.credits}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "20px",
                        textAlign: "center",
                        padding: "10px",
                        color: "#A0A4A9",
                        fontWeight: "500",
                        border: "none",
                      }}
                    >
                      {formatDate(user.createdAt)}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        padding: "10px",
                        border: "none",
                        borderRadius: "0px 10px 10px 0px",
                      }}
                    >
                      {renderActionButtons(user._id)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      
    </>
  );
};

export default UserTable;
