import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Container } from "../Employeeform";
import { Link } from "react-router-dom";
import { Container, Field, Label, SelectField, TabContentForm } from "../components/Form";


const Employee_form = () => {
  const { id } = useParams();
  const [emp_id, setemp_id] = useState("");
  const [emp_name, setemp_name] = useState("");
  const [emp_dept, setemp_dept] = useState("");
  const [joining_date, setjoining_date] = useState("");
  const [emp_contractend, setemp_contractend] = useState("");
  const [service_terms, setservice_terms] = useState("");
  const [emp_image, setemp_img] = useState("");
  const [emp_cv, setemp_cv] = useState("");
  const [emp_address, setemp_address] = useState("");
  const [emp_phone, setemp_phone] = useState("");
  const [emp_email, setemp_email] = useState("");
  const [emp_birthday, setemp_birthday] = useState("");
  const [created_at, setcreated_at] = useState("");
  const [updated_at, setupdated_at] = useState("");
  const handleSubmit = async () => {
    const data = {
        emp_id,
      emp_name,
      emp_dept,
      joining_date,
      emp_contractend,
      service_terms,
      emp_image,
      emp_cv,
      emp_address,
      emp_phone,
      emp_email,
      emp_birthday,
      created_at,
      updated_at,
    };
    console.log(data);
    if (id === undefined) {
      const resp = await axios.post(
        // "http://localhost:5000/api/insurance/insert",
        // data
      );
      console.log(resp);
    } else {
      const resp = await axios.post(
        // `http://localhost:5000/api/insurance/update/${id}`,
        // data
      );
      console.log("updated at", resp);
    }
  };
  useEffect(() => {
    const update = async () => {
      const resp = await axios.post(
        // `http://localhost:5000/api/insurance/getinsurance/${id}`
      );
      const {
        emp_id,
        emp_name,
        emp_dept,
        joining_date,
        emp_contractend,
        service_terms,
        emp_image,
        emp_cv,
        emp_address,
        emp_phone,
        emp_email,
        emp_birthday,
        created_at,
        updated_at,
      } = resp.data[0];
      setemp_name(emp_id);
      setemp_name(emp_name);
      setemp_dept(emp_dept);
      setjoining_date(joining_date);
      setemp_contractend(emp_contractend);
      setservice_terms(service_terms);
      setemp_img(emp_image);
      setemp_cv(emp_cv);
      setemp_address(emp_address);
      setemp_phone(emp_phone);
      setemp_email(emp_email);
      setemp_birthday(emp_birthday);
      setcreated_at(created_at);
      setupdated_at(updated_at);
    };
    if (id !== undefined) {
      update();
    }
  }, [id]);
  return (
    <div className="basic_style">
    {/* <Container> */}
         <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <h1>CompanyName</h1> : <><h1>Add Client</h1></>
              <nav className="breadcrumb">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li className="li-2">
                    <Link to="/clients">Clients</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <ul className="separator-tabs">
              <li className="separator-tabs-item separator-tabs-item-active">
                <p>Form</p>
              </li>
            </ul>
           
            {/* <TabContentForm> */}
              <div className="tab-row">
                <div className="card">
                  <div className="card-body">

                    <div className="card-body-content">
                    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >

                      <div className="mt-5">
                      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_id:</label>
        <input
          type="text"
          value={emp_id}
          onChange={(e) => setemp_id(e.target.value)}
        ></input>
      </Box>
                          </div>
                    
                      <div className="mt-5">
                      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_name:</label>
        <input
          type="text"
          value={emp_name}
          onChange={(e) => setemp_name(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_dept:</label>
        <input
          type="text"
          value={emp_dept}
          onChange={(e) => setemp_dept(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>joining_date:</label>
        <input
          type="date"
          value={joining_date}
          onChange={(e) => setjoining_date(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_contractend:</label>
        <input
          type="date"
          value={emp_contractend}
          onChange={(e) => setemp_contractend(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>service_terms:</label>
        <input
          type="text"
          value={service_terms}
          onChange={(e) => setservice_terms(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_image:</label>
        <input
          type="text"
          value={emp_image}
          onChange={(e) => setemp_img(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_cv:</label>
        <input
          type="text"
          value={emp_cv}
          onChange={(e) => setemp_cv(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_address:</label>
        <input
          type="text"
          value={emp_address}
          onChange={(e) => setemp_address(e.target.value)}
        ></input>
      </Box>
                        </div>

                        <div className="mt-5">
                        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>phone_number:</label>
        <input
          type="text"
          value={emp_phone}
          onChange={(e) => setemp_phone(e.target.value)}
        ></input>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_email:</label>
        <input
          type="text"
          value={emp_email}
          onChange={(e) => setemp_email(e.target.value)}
        ></input>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>emp_birthday:</label>
        <input
          type="text"
          value={emp_birthday}
          onChange={(e) => setemp_birthday(e.target.value)}
        ></input>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>created_at:</label>
        <input
          type="text"
          value={created_at}
          onChange={(e) => setcreated_at(e.target.value)}
        ></input>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <label>updated_at:</label>
        <input
          type="text"
          value={updated_at}
          onChange={(e) => setupdated_at(e.target.value)}
        ></input>
      </Box>
      
    
                        </div>
                        </Box>
                        </div>
                        </div>
                        </div>
                        </div>
{/* </TabContentForm>   */}


            </div>
            </div>
           
                      
   
    {/* </Container> */}
    </div>

  );
};

export default Employee_form;
