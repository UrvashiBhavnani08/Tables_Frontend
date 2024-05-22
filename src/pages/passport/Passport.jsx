import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
// import { Button, IconButton } from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
import axios from 'axios';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'


const columns = [
    { field: 'for_person', headerName: 'For Person', width: 150 },
    { field: 'name_on_passport', headerName: 'Name on Passport', width: 200 },
    { field: 'position', headerName: 'Position', width: 200 },
    { field: 'passport_issued', headerName: 'Passport Issued', width: 200 },
    { field: 'passport_expired', headerName: 'Passport Expired', width: 200 },
    { field: 'passport_current_status', headerName: 'Passport Current Status', width: 200 },
    { field: 'original_passport_in_files', headerName: 'Original Passport in Files', width: 200 },
    { field: 'visa_issued', headerName: 'Visa Issued', width: 200 },
    { field: 'visa_expired', headerName: 'Visa Expired', width: 200 },
    { field: 'visa_current_status', headerName: 'Visa Current Status', width: 200 },
    { field: 'visa_copy_in_files', headerName: 'Visa Copy in Files', width: 200 },
    { field: 'frc_issued', headerName: 'FRC Issued', width: 200 },
    { field: 'frc_expired', headerName: 'FRC Expired', width: 200 },
    { field: 'frc_current_status', headerName: 'FRC Current Status', width: 200 },
    { field: 'frc_copy_in_files', headerName: 'FRC Copy in Files', width: 200 },
    { field: 'formc_issued', headerName: 'FORMC Issued', width: 200 },
    { field: 'formc_expired', headerName: 'FORMC Expired', width: 200 },
    { field: 'formc_current_status', headerName: 'FORMC Current Status', width: 200 },
    { field: 'formc_copy_in_files', headerName: 'FORMC Copy in Files', width: 200 },
    { field: 'holiday', headerName: 'Holiday', width: 200 },
    { field: 'company', headerName: 'Company', width: 200 },
    { field: 'remark', headerName: 'Remark', width: 200 },
    { field: 'created_by', headerName: 'Created By', width: 200 },
    
  ];

const Passport = () => {
  const [licenceData, setLicenceData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://vimpex-admin-git-main-development197.vercel.app/api/passport/get');
      setLicenceData(result.data);
    };
    fetchData();
  }, []);

  const handleDelete = (sr_no) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          axios.delete(`https://vimpex-admin-git-main-development197.vercel.app/api/passport/delete/${sr_no}`);
        setLicenceData(licenceData.filter((item) => item.id !== sr_no));
        }
      })
  };

  const actionColumn = [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        sortable: false,
        disableColumnMenu: true,
        renderCell: (params) => (
          <>
            <Button
              aria-label="edit"
              onClick={() => navigate(`/passport/edit/${params.row.id}`)}
            >
              <EditOutlined />
            </Button>
            <Button
              aria-label="delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlined />
            </Button>
          </>
        ),
      },
  ]

  return (
    <>
    <div className="form-main">
        <h1>Passport</h1>
        <Link to="/passport/add">
        <Button type="primary">
          Add Details
        </Button>
        </Link>
      </div> 
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={licenceData}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
    </>
  );
};

export default Passport;

