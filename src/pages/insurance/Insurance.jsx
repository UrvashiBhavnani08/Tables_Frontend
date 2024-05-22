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
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'company_name', headerName: 'Company Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'insurance_no', headerName: 'Insurance No.', width: 200 },
    { field: 'issued_date', headerName: 'Issued Date', width: 150 },
    { field: 'last_date', headerName: 'Last Date', width: 150 },
    { field: 'remarks', headerName: 'Remarks', width: 200 },
    { field: 'insurance_company', headerName: 'Insurance Company', width: 200 },
    { field: 'pic_name_phone_num', headerName: 'PIC Name/Phone No.', width: 200 },
    { field: 'created_by', headerName: 'Created By', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
  ];

const Insurance = () => {
  const [licenceData, setLicenceData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://vimpex-admin-git-main-development197.vercel.app/api/insurance/get');
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
          axios.delete(`https://vimpex-admin-git-main-development197.vercel.app/api/insurance/delete/${sr_no}`);
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
              onClick={() => navigate(`/insurance/edit/${params.row.id}`)}
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
        <h1>Insurance</h1>
        <Link to="/insurance/add">
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

export default Insurance;

