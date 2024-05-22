import React, {useState} from "react";
import "./all_projects.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function all_projects(){
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
    return (
        <div className="second_section">
        <div className="testt">
        {/* <div class="card-container"> */}
  <div className="all_projects">
    <br/>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
       <div  className="card1">
        <Typography variant="h5" component="div">
           <h3>   All Projects</h3>
        </Typography>
        </div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <div className="text_style">
          <h4>Here you can find more details about your project. Keep your user engaged by providing meaningful information.</h4></div>
        </Typography>
      </CardContent>

    <br/>
    </Card>
    <br/>
    <div class="all_projects_card">
<br/>
 <div class="container">
 <div>
  <h4><b>Technology behind Blockchain</b></h4> 

   <p>Architect & Engineer</p> 
   </div>
 </div>
</div>
<br/>
<div class="all_projects_card">
 
 <div class="container">
    <br/>
   
   <h4><b>Technology behind Blockchain</b></h4> 
   <p>Architect & Engineer</p> 
 </div>
</div>
<br/>
<div class="all_projects_card">
 
 <div class="container">
    <br/>
   
   <h4><b>Technology behind Blockchain</b></h4> 
   <p>Architect & Engineer</p> 
 </div>
</div>
   <br/>
   </div>
   
    <div className="second_card1">
    <br/>
          <br/>
        <Card sx={{ minWidth: 275 }}>
       
      <CardContent>
        <Typography variant="h5" component="div">
           <h3> General Information</h3>
           
           
        
        </Typography>
        <div className="card1">
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <div className="text_style">
          <h4>As we live our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</h4>
          </div>
        </Typography>
        </div>
      </CardContent>

    
    </Card>
    <br/>
    {/* <div className="test"> */}
        <div className="card-container">
    <div class="small_card">
    <br/>
   <div para_style>
   <p>Education</p> </div>
   <h4><b>Standford University</b></h4> 

</div>
<div class="small_card">
    <br/>
   
    <p>Languages</p> 
   <h4><b>English, Spanish, Italian</b></h4> 

</div>
</div>
<br/>





{/* <div className="test"> */}
        <div className="card-container">
    <div class="small_card">
    <br/>
   
    <p>Department</p> 
   <h4><b>Product Design</b></h4> 
</div>
<div class="small_card">
    <br/>
   
    <p>Work History</p> 
   <h4><b>English, Spanish, Italian</b></h4> 

</div>
</div>
<br/>
{/* </div> */}




{/* <div className="test"> */}
        <div className="card-container">
    <div class="small_card">
    <br/>
   
    <p>Organization</p> 
   <h4><b>Simmmple Web LLC</b></h4> 

</div>
<div class="small_card">
    <br/>
   
    <p>Birthday</p> 
   <h4><b>20 July, 1986</b></h4> 

</div>
</div>
<br/>
{/* </div> */}

    </div>
   
   
  
 
</div>
</div>

  
    )
}

export default all_projects;