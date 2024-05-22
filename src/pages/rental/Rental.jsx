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
    { field: 'rental_type', headerName: 'Rental Type', width: 200 },
    { field: 'outlet', headerName: 'Outlet', width: 200 },
    { field: 'contract_start_date', headerName: 'Contract Start Date', width: 200 },
    { field: 'contract_end_date', headerName: 'Contract End Date', width: 200 },
    { field: 'payment_terms', headerName: 'Payment Terms', width: 200 },
    { field: 'amount_payable', headerName: 'Amount Payable', width: 200 },
    { field: 'monthly_amount', headerName: 'Monthly Amount', width: 200 },
    { field: 'next_payment', headerName: 'Next Payment', width: 200 },
    { field: 'company', headerName: 'Company', width: 200 },
    { field: 'remark', headerName: 'Remark', width: 200 },
    { field: 'created_by', headerName: 'Created By', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
  ];

const Rental = () => {
  const navigate = useNavigate()
  const [licenceData, setLicenceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://vimpex-admin-git-main-development197.vercel.app/api/rental/get');
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
          axios.delete(`https://vimpex-admin-git-main-development197.vercel.app/api/rental/delete/${sr_no}`);
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
              onClick={() => navigate(`/rental/edit/${params.row.id}`)}
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
        <h1>Rental</h1>
        <Link to="/rental/add">
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

export default Rental;

