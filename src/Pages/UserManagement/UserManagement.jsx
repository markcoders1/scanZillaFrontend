import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, TableSortLabel } from '@mui/material';
import './Usermanagement.css'; // Make sure to create this CSS file for custom styles
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/images/searchIcon.png';

const UserTable = () => {
    const [users, setUsers] = useState([
        { name: 'Samantha', package: 'Pro', signupDate: new Date(2023, 6, 22), action: 'Block' },
        { name: 'Adiana', package: 'Basic', signupDate: new Date(2023, 8, 5), action: 'Unblock' },
        { name: 'Samuel', package: 'Pro', signupDate: new Date(2023, 9, 1), action: 'Block' },
        { name: 'Johnson', package: 'Enterprise', signupDate: new Date(2023, 0, 10), action: 'Block' },
        { name: 'Mathews', package: 'Pro', signupDate: new Date(2023, 2, 7), action: 'Unblock' },
        { name: 'Stephen', package: 'Basic', signupDate: new Date(2023, 7, 19), action: 'Block' },
        { name: 'Chris', package: 'Pro', signupDate: new Date(2023, 5, 9), action: 'Block' },
        { name: 'Nick', package: 'Basic', signupDate: new Date(2023, 11, 22), action: 'Unblock' }
    ]);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('signupDate');
    const navigate = useNavigate();
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        const sortedUsers = [...users].sort((a, b) => {
            if (isAsc) {
                return new Date(a[property]) - new Date(b[property]);
            } else {
                return new Date(b[property]) - new Date(a[property]);
            }
        });
        setUsers(sortedUsers);
    };

    const renderActionButtons = (rowData) => {
        const isBlock = rowData.action === 'Block';
        return (
            <Box sx={{ display: 'flex', gap: '2rem' }}>
                <CustomButton
                    border={isBlock ? '2px solid #EE1D52' : '2px solid #31BA96'}
                    borderRadius='10px'
                    fontSize='14px'
                    color={isBlock ? '#EE1D52' : '#31BA96'}
                    fontWeight='600'
                    width='100px'
                    ButtonText={isBlock ? 'Block' : 'Unblock'}
                />
                <CustomButton
                    border='2px solid #333333'
                    borderRadius='10px'
                    fontSize='14px'
                    color='#333333'
                    fontWeight='500'
                    width='134px'
                    ButtonText='View Details'
                    onClick={() => navigate("userdetails")}
                />
            </Box>
        );
    };

    return (

        <Box
            sx={{
                position: "relative",
                top: {
                    lg: "0px",
                    xs: "80px"
                }
            }}
        >


            <Box
                sx={{
                    position: "absolute",
                    top: "-60px",
                    right: {
                        xs: "0px",
                        sm: "20px"
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        
                    }}
                >
                    <input type="search" name="search" id="search"
                        style={{
                            color: "#A0A4A9",
                            fontSize: "18px",
                            padding: "9px 47px 9px 27px",
                            borderRadius: "44px",
                            boxShadow: "4px 3px 10px 0px #C8C8C8 ",
                            border: "none",
                            outline: "none",
                            
                            position: "relative",
                            width: "100%"
                        }}
                        placeholder='Search'
                    />
                    <img src={SearchIcon} alt=""
                        style={{
                            position: "absolute",
                            top: "14px",
                            right: "20px"
                        }}
                    />
                </Box>
            </Box>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, padding: "0px 15px" }} aria-label="user table">
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ backgroundColor: '#1A0049', color: '#FDFDFD', fontWeight: '500', padding: '15px 20px', fontSize: "22px", textAlign: "center", borderRadius: "8px 0px 0px 8px" }}>All Users</TableCell>
                            <TableCell sx={{ backgroundColor: '#1A0049', color: '#FDFDFD', fontWeight: '500', padding: '15px 20px', fontSize: "22px", textAlign: "center" }}>Package</TableCell>
                            <TableCell sx={{ backgroundColor: '#1A0049', color: '#FDFDFD', fontWeight: '500', padding: '15px 20px', fontSize: "22px", textAlign: "center" }}>
                                <TableSortLabel
                                    active={orderBy === 'signupDate'}
                                    direction={orderBy === 'signupDate' ? order : 'asc'}
                                    onClick={() => handleRequestSort('signupDate')}
                                    sx={{
                                        color: '#FDFDFD',
                                        '&.MuiTableSortLabel-root.Mui-active': {
                                            color: '#FDFDFD',
                                        },
                                        '& .MuiTableSortLabel-icon': {
                                            color: '#FDFDFD !important',
                                        },
                                    }}
                                >
                                    Signed up on
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ backgroundColor: '#1A0049', color: '#FDFDFD', fontWeight: '500', padding: '15px 20px', fontSize: "22px", textAlign: "center", borderRadius: "0px 8px 8px 0px" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ mt: "20px", paddingTop: "40px", backgroundColor: "red", }}>
                        {users.map((user) => (
                            <TableRow key={user.name} sx={{ marginTop: '12px' }}>
                                <TableCell component="th" scope="row" sx={{ fontSize: "22px", textAlign: 'center', padding: '12px', color: '#333333', fontWeight: '500', border: "none", borderRadius: "10px 0px 0px 10px" }}>{user.name}</TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: 'center', padding: '10px', color: '#333333', fontWeight: '500', border: "none" }}>{user.package}</TableCell>
                                <TableCell sx={{ fontSize: "20px", textAlign: 'center', padding: '10px', color: '#A0A4A9', fontWeight: '500', border: "none" }}>{user.signupDate.toLocaleDateString('en-US')}</TableCell>
                                <TableCell sx={{ textAlign: 'center', padding: '10px', border: "none", borderRadius: "0px 10px 10px 0px" }}>{renderActionButtons(user)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>

    );
};

export default UserTable;
