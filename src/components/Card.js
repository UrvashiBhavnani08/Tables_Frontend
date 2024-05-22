import React, {useState} from "react";
import "./Card.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../../src/upload.png";

function ProfileCard(){
    const [name, setName ] = useState('Your Name');
    const [job, setJob ] = useState('Job Title');
    const [about, setAbout ] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.');
    return (
        <div className="test2">
        <div className="test">
          <div className="Card">
            <div className="upper_container">
                <div className="image_container">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80 " alt=" " height=" " width="100px"/>
                </div>
            </div>
            <div className="lower_container">
                <h3>{name}</h3>
                <h4> { job } </h4>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <div class="row">
  <div class="text">
    <h3>
      <b>17</b>  
    </h3>
    <h4>

        Posts
    </h4>
  </div>
  <div class="text">
    <h3><b>9.7K</b></h3>
    <h4>
        Followers
    </h4>
  </div>
  <div class="text">
    <h3>
       <b> 434</b>
    </h3>
    <h4>
        Following
    </h4>
  </div>
</div>
                 
            </div>
        </div>
        <div class="second_card">
  <div class="container">
    <div className="row">
        <div className="side_section">
            <div className="img_section">
            <img src={img} alt=" "/>
           <div className="text_styling">
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">Upload Files</h4></div>
            <div className="para_styling">
            <p className="mt-2 text-sm font-medium text-gray-600">PNG, JPG and GIF files are allowed</p></div>
            </div>
        </div>
        <div className="text_style1">
        <h3><b>Complete Your Profile</b></h3>
   
        <p>
        Stay on pulse of distributed projects with  an  anline  whiteboard to  plan, coordinate and discuss
    </p>
   
        <div class="text_style">
   <div className="textt">
   
    <div className="button_style">
    <button class="button">Publish Now</button></div>
    </div>
  </div>
        </div>
  </div>
  </div>
</div>
</div>
 </div>
       
      
    )
}

export default ProfileCard;