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
  Tabs,
  Tab,
} from "@mui/material";
import "./Usermanagement.css"; // Make sure to create this CSS file for custom styles
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/images/searchIcon.png";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import LoaderMain from "../../Components/Loader/LoaderMain";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import { useDispatch } from "react-redux";
const appUrl = import.meta.env.VITE_REACT_APP_API_URL;
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("createdAt");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("user");
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState({});
  const [loadingButtonAdmin, setLoadingButtonAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleBlock = async (userId) => {
    try {
      setLoadingButton((prev) => ({ ...prev, [userId]: true }));
      const response = await axiosInstance({
        url: appUrl + "/toggleuseraccount",
        method: "get",
        params: {
          userId,
        },
      });
      console.log(response);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, active: !user.active } : user
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButton((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const toggleAdmin = async (userId) => {
    try {
      setLoadingButtonAdmin((prev) => ({ ...prev, [userId]: true }));
      const response = await axiosInstance({
        url: appUrl + "/makeadmin",
        method: "get",
        params: {
          userId,
        },
      });
      console.log(response);
      dispatch(handleSnackAlert({ open: true, message: response.data.message, severity: "success" }));

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: user.role === "admin" ? "user" : "admin" } : user
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButtonAdmin((prev) => ({ ...prev, [userId]: false }));
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance({
        url: appUrl + "/getallusers",
        method: "get",
      });
      setUsers(response.data);
     
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  const filteredUsers = users.filter(
    (user) =>
      (filter === "all" || user.role === filter) &&
      (user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.credits.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderActionButtons = (userId) => {
    const user = users.find((u) => u._id === userId);
    const active = user && user.active === true;
    const role = user && user.role === "admin";
    return (
      <Box sx={{ display: "flex", gap: ".7rem" }}>
        <CustomButton
          border={active ? "2px solid #EE1D52" : "2px solid #31BA96"}
          borderRadius="10px"
          fontSize="10px"
          color={active ? "#EE1D52" : "#31BA96"}
          fontWeight="600"
          width="70px"
          ButtonText={active ? "Block" : "Unblock"}
          onClick={() => toggleBlock(userId)}
          loading={loadingButton[userId] || false}
        />
        <CustomButton
          border="2px solid #333333"
          borderRadius="10px"
          fontSize="10px"
          color="#333333"
          fontWeight="500"
          width="100px"
          ButtonText="View Details"
          onClick={() => navigate(`userdetails/${userId}`)}
        />
        <CustomButton
          border="2px solid #333333"
          borderRadius="10px"
          fontSize="10px"
          color="#333333"
          fontWeight="500"
          width="100px"
          ButtonText={role ? "Make User" : "Make Admin"}
          onClick={() => toggleAdmin(userId)}
          loading={loadingButtonAdmin[userId] || false}
        />
      </Box>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            height: "70vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoaderMain />
        </Box>
      ) : (
        <Box
          sx={{
          
            top: {
              lg: "0px",
              xs: "80px",
            },
            height: "70vh",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "20px 15px",
            "&::-webkit-scrollbar": {
              width: "8px"
            },
            "&::-webkit-scrollbar-track": {
              background: "#DFDFDF",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b30000"
            },
          }}
        >
          <Box
            sx={{
              display:"flex",
              flexDirection:{md:"row-reverse",xs:"column-reverse"},
              justifyContent:"space-between",
            gap:"1rem"

            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                width:{md:"350px", xs:"100%"}
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

            <Tabs value={filter} onChange={handleFilterChange} start>
              <Tab label="All Users" value="all" />
              <Tab label="Users" value="user" />
              <Tab label="Admins" value="admin" />
            </Tabs>

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
                      padding: "20px 0px",
                      fontSize: "14px",
                      textAlign: "center",
                      borderRadius: "8px 0px 0px 8px",
                      minWidth:"260px"
                    }}
                  >
                    All Users
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      padding: "15px 10px",
                      fontSize: "14px",
                      textAlign: "center",
                      minWidth:"160px"

                    }}
                  >
                    No of Credits
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#1A0049",
                      color: "#FDFDFD",
                      fontWeight: "500",
                      padding: "15px 10px",
                      fontSize: "16px",
                      textAlign: "center",
                      minWidth:"160px"

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
                      padding: "15px 10px",
                      fontSize: "16px",
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
           
                  <TableRow key={user._id} sx={{ marginTop: "12px",  }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontSize: "14px",
                        textAlign: "start",
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
                        fontSize: "14px",
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
                        fontSize: "14px",
                        textAlign: "center",
                        padding: "10px",
                        color: "#333333",
                        fontWeight: "500",
                        border: "none",
                      }}
                    >
                      {user.email}
                    </TableCell>
                    <TableCell
                      className="colorsGivingSpecific"
                      sx={{
                        fontSize: "14px",
                        textAlign: "center",
                        padding: "10px",
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
      )}
    </>
  );
};
   



export default UserTable;
