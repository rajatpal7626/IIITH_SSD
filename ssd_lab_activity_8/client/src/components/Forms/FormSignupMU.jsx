import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";



function FormSignupMU(props) {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const stuObj = {
    rollno: "",
    password: "",
    role: "",
  };

  const [stuLogin, setStuLogIn] = useState(stuObj)

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    setStuLogIn({
      ...stuLogin,
      [key]:value
    })
    console.log(stuLogin);
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const slectRole= ["student", "ta"]
  

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(stuLogin)
      .then(() => {
        stuLogin.rollno="";
        stuLogin.password="";
        stuLogin.role="";
        props.history.push("/signup");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSigninSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(stuLogin)
      .then((data) => {
        props.context.setUser(data);
        setIsLoginSuccess(true);
        props.history.push("/feedback")
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

    return  (
      <Container maxWidth="sm" sx={{ fontSize: 30 , paddingTop:"20px", paddingBottom:"20px",  minHeight: '100vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center" }} >
        <Card  sx={{ border: "1px solid #000", textAlign:"center" }} >
        <form >
          <CardContent>
            <Typography sx={{ fontSize: 30 , fontWeight:600 }} color="text.secondary" gutterBottom>
              Re-Eval Portal
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ m: 1, minWidth: 300 }} 
                  label="RollNumber"
                  type="number"
                  name="rollno"
                  onChange={handleChange}
                  value={stuLogin.rollno}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                sx={{ m: 1, minWidth: 300 }} 
                  required
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={stuLogin.password}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
                  <InputLabel id="demo-select-small">Select Role</InputLabel>
                  <Select
                      name="role"
                     label="Select Role"
                     onChange={handleChange}
                     value={stuLogin.role}
                   >
                  {slectRole.map(x=>{
                      return <MenuItem value={x}>{x}</MenuItem>
  
                  })}      
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ "& button": { m: 1 } }}>
                  <Button variant="contained" onClick={handleSigninSubmit}>LogIn</Button>
                  <Button variant="contained" href="#outlined-buttons" onClick={handleSignupSubmit}>
                    SignUp
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardActions>
          </form>
        </Card>
     
   </Container>
    );
  }
  

export default withRouter(withUser(FormSignupMU));
