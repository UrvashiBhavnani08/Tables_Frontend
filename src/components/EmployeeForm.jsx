import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Field, Label, SelectField, TabContentForm, ChooseFileBtn} from "../components/Form";
import DatePicker from 'react-datepicker';




const Employee = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [startDate, setStartDate] = useState(new Date());


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
  const [updated_at, setupdated_at] = useState("")


  const navigate = useNavigate()
// ----------------------------------------[set input when edit]

  // ----------------------------------------------------------------


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
       ``
      );
      setemp_id(res.data.msg[0].emp_id);
      setemp_address(res.data.msg[0].emp_address);
      setemp_name(res.data.msg[0].emp_name);
      setemp_dept(res.data.msg[0].emp_dept);
      setemp_email(res.data.msg[0].emp_email)
      setjoining_date(res.data.msg[0].joining_date);
      setemp_contractend(res.data.msg[0].emp_contractend);
      setservice_terms(res.data.msg[0].service_terms);
      setemp_img(res.data.msg[0].emp_image);
      setemp_cv(res.data.msg[0].emp_cv);
      setemp_phone(res.data.msg[0].emp_phone);
      setemp_birthday(res.data.msg[0].emp_birthday)
      setcreated_at(res.data.msg[0].created_at);
      setupdated_at(res.data.msg[0].updated_at);
    };
    fetchData();
  }, [path]);



  // ----------------------[submit function]


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(path){

      try {
        await axios.put(
          ` ` ,
          {
            emp_name,
            emp_address,
            emp_birthday,
            emp_contractend,
            emp_cv,
            emp_dept,
            emp_email,
            emp_id,
            emp_image,
            emp_phone,
            created_at,
            updated_at,
            joining_date,
            service_terms,
          }
        );
      
        navigate("/")
      } catch (err) {
        console.log(err);
      }

    }
    else{
      try {
        await axios.post(
         " ",
          {

            emp_name,
            emp_address,
            emp_birthday,
            emp_contractend,
            emp_cv,
            emp_dept,
            emp_email,
            emp_id,
            emp_image,
            emp_phone,
            created_at,
            updated_at,
            joining_date,
            service_terms,
          }
        );
      
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  };

    
  class Employee extends Component {
  state = {

    // Initially, no file is selected
    selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
    
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    
    // Details of the uploaded file
    console.log(this.state.selectedFile);
    
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
    if (this.state.selectedFile) {
      
      return (
      <div>
        <h2>File Details:</h2>
        <p>File Name: {this.state.selectedFile.name}</p>
  
        <p>File Type: {this.state.selectedFile.type}</p>
  
        <p>
        Last Modified:{" "}
        {this.state.selectedFile.lastModifiedDate.toDateString()}
        </p>
  
      </div>
      );
    } else {
      return (
      <div>
        <br />
        <h4>Choose before Pressing the Upload button</h4>
      </div>
      );
    }
    };
  }
  return (
    // <div style={{background: "#24242c"}}>
      <Container>
        <div className="row">
          <div className="col-12">

            <ul className="separator-tabs">
              <li className="separator-tabs-item separator-tabs-item-active">
                <p>Form</p>
              </li>
            </ul>

            <TabContentForm>
                <div className="card">
              <div className="tab-row">
              <div className="card">
                  <div className="card-body">
                    <div className="card-body-content">
                      <div className="mt-5">
                        <Label>Employee Name</Label>
                        <Field
                          value={emp_name}
                          onChange={(e) => setemp_name(e.target.value)}
                          name={emp_name}
                        />
                      </div>
                   
                    <div className="mt-5">
                        <Label>Employee ID</Label>
                        <Field
                          value={emp_id}
                          onChange={(e) => setemp_id(e.target.value)}
                          name={emp_id}
                        />
                      </div>
                    </div>
                  
                   


<div className="card-body-content">
                    <div className="mt-5">
                      <Label>Employee Department</Label>
                      <Field
                        value={emp_dept}
                        onChange={(e) => setemp_dept(e.target.value)}
                        name={emp_dept}
                      />
                    </div>

                 
                    <div className="mt-5">
                      <Label>Joining Date</Label>
                      <Field
                        value={joining_date}
                        onChange={(e) => setjoining_date(e.target.value)}
                        name={joining_date}
                      />
                      {/*  <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
    /> */}
                    </div>


                    </div>
                   
                
                   
                  
                 
                    <div className="card-body-content">
                    <div className="mt-5">
                      <Label>Employee Contract End</Label>
                      <Field
                        value={emp_contractend}
                        onChange={(e) => setemp_contractend(e.target.value)}
                        name={emp_contractend}
                      />
                    </div>

                 
                    <div className="mt-5">
                      <Label>Service Terms</Label>
                      <Field
                        value={service_terms}
                        onChange={(e) => setservice_terms(e.target.value)}
                        name={service_terms}
                      />
                    </div>
                  


                    </div>
                  
                  
                   

                    <div className="card-body-content">
                      <div className="mt-5">
                        <Label>Employee Image</Label>
                        <Field
                        value={service_terms}
                        onChange={(e) => setservice_terms(e.target.value)}
                        name={service_terms}
                      />
                      
                      
                           <div>
                           <input type="file"
       name="avatar"
       accept="image/png, image/jpeg"/>
       </div>
			
                           
                      </div>


                      <div className="mt-5">
                        <Label>Employee CV</Label>
                        <SelectField name='Employee CV' onChange={(e) => setemp_cv(e.target.value)}>
                          <option value="" disabled selected> --Select--</option>
                      
                           </SelectField>
                      </div>
                    


                      </div>
                    
    
                   
                    
                     
                    <div className="card-body-content">
                      <div className="mt-5">
                        <Label>Employee Address</Label>
                        <Field
                          value={emp_address}
                          onChange={(e) => setemp_address(e.target.value)}
                          name={emp_address}
                        />
                      </div>
                      <div className="mt-5">
                        <Label>Employee Phone</Label>
                        <Field
                          value={emp_phone}
                          onChange={(e) => setemp_phone(e.target.value)}
                          name={emp_phone}
                        />
                      </div>
                    


                      </div>
                    

             
                  

                    <div className="card-body-content">
                      <div className="mt-5">
                        <Label>Employee Email</Label>
                        <Field
                          value={emp_email}
                          onChange={(e) => setemp_email(e.target.value)}
                          name={emp_email}
                        />
                      </div>
                 
                      <div className="mt-5">
                        <Label>Employee Birthday</Label>
                        <Field
                          value={emp_birthday}
                          onChange={(e) => setemp_birthday(e.target.value)}
                          name={emp_birthday}
                        />
                      </div>
                   
                      </div>
                    

               
                 
                    

                 
                 
        
                 
                    <div className="card-btn">
                      <button onClick={() => navigate("/")}>Cancel</button>
                      <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    </div>
                
                </div>
                </div>
                </div>
            </TabContentForm>
          </div>
          </div>
      </Container>
    // </div>
  );
};

export default Employee;




