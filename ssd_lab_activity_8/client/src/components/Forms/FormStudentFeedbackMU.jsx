import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";


function FormFeedbackMU(props) {

 //var loggedIn=props.context.isLoggedIn;
  var data=props.context.user;

  return !(props.context.isLoggedIn)?
  <Redirect to="/signup" />
  : (
    <div>
      <Container
        maxWidth="md"
        sx={{ fontSize: 30, paddingTop: "20px", paddingBottom: "20px" }}
      >
   
            <Typography
              sx={{ fontSize: 30, fontWeight: 600,display: "flex",
           
              justifyContent: "space-between "  }}
              color="text.secondary"
              gutterBottom
            >
              Feedback
              <Button  variant="contained" color="success">
                <Link style={{color:"#fff", textDecoration:"none"}} to="/addQuery"> Add Query</Link>
            </Button>
            </Typography>
            {data.map(x=>{
                      return (
                        <Box sx={{border:"1px solid #000", padding:"15px"}}>
           
                        <Typography
                        sx={{ fontSize: 16, fontWeight: 600
                        }}
                        color="text.secondary"
                        gutterBottom
                        > 
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"15px"}}>
                            <span> Exam Name : </span>
                            <strong>{x.exam_name}</strong>
                            <span> Course  Name : </span>
                            <strong>{x.course_name}</strong>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"15px"}}>
                            <span> Question Number :</span>
                            <strong>{x.question_num}</strong>
                            <span> TA Roll: </span>
                            <strong>{x.ta_roll}</strong>
                        </div>
                        <div style={{display:"flex", justifyContent:"start", marginBottom:"15px"}}>
                            <span>Your Comment :</span>
                        
                            <Box sx={{border:"1px solid #000", minWidth:"400px" , margin:"10px", padding:"10px", textAlign:"left"}}>
    
                                <p>
                                  {x.std_comment}
                                </p>
                            </Box>
                         
                        </div>
                        <div style={{display:"flex", justifyContent:"start", marginBottom:"15px"}}>
                            <span>TA's Response :</span>
                        
                            <Box sx={{border:"1px solid #000", minWidth:"400px" , margin:"10px", padding:"10px", textAlign:"left"}}>
    
                                <p>
                                {x.ta_comment}
                                </p>
                            </Box>
                         
                        </div>
    
    
                        </Typography>
            </Box>
                      )
  
                  })
            }

      </Container>
    </div>
  );
}

export default withRouter(withUser(FormFeedbackMU));