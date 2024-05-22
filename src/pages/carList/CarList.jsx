import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
// import { Button, IconButton } from '@material-ui/core';
// import { Delete, Edit } from '@material-ui/icons';
import axios from 'axios';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { DeleteColumnOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'car_number', headerName: 'Car Number', width: 150 },
    { field: 'book_wheelTax', headerName: 'Book/Wheel Tax', width: 200 },
    { field: 'agreement_contract', headerName: 'Agreement Contract', width: 200 },
    { field: 'extension_date', headerName: 'Extension Date', type: 'date', width: 150 },
    { field: 'take_by', headerName: 'Taken By', width: 150 },
    { field: 'insurance', headerName: 'Insurance', width: 150 },
    { field: 'insurance_issue', headerName: 'Insurance Issue', type: 'date', width: 150 },
    { field: 'insurance_last', headerName: 'Insurance Last', type: 'date', width: 150 },
    { field: 'model_year', headerName: 'Model Year', width: 150 },
    { field: 'tax', headerName: 'Tax', width: 150 },
    { field: 'created_by', headerName: 'Created By', width: 150 },
    { field: 'created_at', headerName: 'Created At', type: 'date', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', type: 'date', width: 150 },
  ];


const CarList = () => {
  const [licenceData, setLicenceData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://vimpex-admin-git-main-development197.vercel.app/api/car/get');
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
          axios.delete(`https://vimpex-admin-git-main-development197.vercel.app/api/car/delete/${sr_no}`);
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
              onClick={() => navigate(`/car/edit/${params.row.id}`)}
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
        <h1>Car List</h1>
        <Link to="/car/add">
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

export default CarList;

