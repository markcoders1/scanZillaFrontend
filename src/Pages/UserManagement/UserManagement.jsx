import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Usermanagement.css'; // Make sure to create this CSS file for custom styles

import CustomButton from '../../Components/CustomButton/CustomButton';
import { Box } from '@mui/material';

const UserTable = () => {
    const users = [
        { name: 'Samantha', package: 'Pro', action: 'Block' },
        { name: 'Adiana', package: 'Basic', action: 'Unblock' },
        { name: 'Samuel', package: 'Pro', action: 'Block' },
        { name: 'Johnson', package: 'Enterprise', action: 'Block' },
        { name: 'Mathews', package: 'Pro', action: 'Unblock' },
        { name: 'Stephen', package: 'Basic', action: 'Block' },
        { name: 'Chris', package: 'Pro', action: 'Block' },
        { name: 'Nick', package: 'Basic', action: 'Unblock' }
    ];

    const actionBodyTemplate = (rowData) => {
        const isBlock = rowData.action === 'Block';
        return (
            <Box sx={{ display: 'flex', gap: '2rem' }}>
                <CustomButton
                    ButtonText={isBlock ? 'Block' : 'Unblock'}
                    border={`2px solid ${isBlock ? '#EE1D52' : '#31BA96'}`}
                    borderRadius="10px"
                    fontSize="14px"
                    color={isBlock ? '#EE1D52' : '#31BA96'}
                    fontWeight="600"
                    width="100px"
                />
                <CustomButton
                    ButtonText="View Details"
                    border="2px solid #333333"
                    borderRadius="10px"
                    fontSize="14px"
                    color='#333333'
                    fontWeight="600"
                    width="134px"
                />
            </Box>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <DataTable value={users} className="p-datatable-responsive" >
                <Column field="name" header="All Users" />
                <Column field="package" header="Package" />
                <Column header="Action" body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}

export default UserTable;
