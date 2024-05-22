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
  { field: 'license_type', headerName: 'License Type', width: 200 },
  { field: 'license_number', headerName: 'License Number', width: 200 },
  { field: 'issue_date', headerName: 'Issue Date', width: 150,
    valueGetter: (params) => moment(params.row.issue_date).format('MMM DD, YYYY')},
  { field: 'last_date', headerName: 'Last Date', width: 150,
    valueGetter: (params) => moment(params.row.last_date).format('MMM DD, YYYY')},
  { field: 'amount_payable', headerName: 'Amount Payable', width: 200 },
  { field: 'payment_terms', headerName: 'Payment Terms', width: 200 },
  { field: 'remarks', headerName: 'Remarks', width: 300 },
  { field: 'note', headerName: 'Note', width: 300 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'paid', headerName: 'Paid', width: 200 },
  { field: 'created_by', headerName: 'Created By', width: 200 },
  { field: 'created_at', headerName: 'Created At', width: 200,
    valueGetter: (params) => moment(params.row.created_at).format('MMM DD, YYYY HH:mm:ss')},
  { field: 'updated_at', headerName: 'Updated At', width: 200,
    valueGetter: (params) => moment(params.row.updated_at).format('MMM DD, YYYY HH:mm:ss')},
];

const License = () => {
  const [licenceData, setLicenceData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://vimpex-admin-git-main-development197.vercel.app/api/licenses/get');
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
          axios.delete(`https://vimpex-admin-git-main-development197.vercel.app/api/license/delete/${sr_no}`);
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
              onClick={() => navigate(`/license/edit/${params.row.id}`)}
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
        <h1>License</h1>
        <Link to="/license/add">
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

export default License;

