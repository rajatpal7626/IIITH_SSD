import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";

import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

function FormAddQuery(props) {

  const stuQuery = {
    exam_name: "",
    course_name: "",
    question_num: 0,
    ta_roll:"",
    std_roll:"",
    ta_comment: "",
  };
  
  const [addQuery, setAddQuery] = useState(stuQuery);

  const formHandler = (ev) => {

    ev.preventDefault();

    apiHandler
      .createQuery(stuQuery)
      .then(() => {
        props.history.push("/feedback");

      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleInputChange = (ev) => {
    setAddQuery({
      ...addQuery,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleIntChange = (ev) => {
    setAddQuery({
      ...addQuery,
      [ev.target.name]: parseInt(ev.target.value),
    });
  };


  console.log(addQuery)
  const slectRole = ["student", "TA"];
  return (
    <div>
      <Container
        maxWidth="md"
        sx={{ fontSize: 30, paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
          Add Query
        </Typography>
        <Box sx={{ border: "1px solid #000", padding: "15px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                sx={{ m: 1, minWidth: 400 }}
                label="ExamName"
                type="text"
                name="ExamName"
                onChange={handleInputChange}
                value={addQuery.ExamName}
              />
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{ m: 1, minWidth: 400 }}
                  label="CourseName"
                  type="text"
                  name="coursename"
                  onChange={handleInputChange}
                  value={addQuery.coursename}
                />
                <Grid item xs={12}>
                  <TextField
                    required
                    sx={{ m: 1, minWidth: 400 }}
                    label="Question Number"
                    type="number"
                    name="questionNumber"
                    onChange={handleIntChange}
                    value={addQuery.questionNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, minWidth: 400 }} size="medium">
                    <InputLabel id="demo-select-small">Select Role</InputLabel>
                    <Select
                      label="Select Role"
                      onChange={handleInputChange}
                      value={addQuery.selectRole}
                      name="seletcTA"
                    >
                      {slectRole.map((x) => {
                        return <MenuItem value={x}>{x}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    sx={{ m: 1, minWidth: 400 }}
                    label="Comments"
                    type="number"
                    multiline
                    rows={4}
                    name="comments"
                    placeholder="any message from your soul"
                    onChange={handleInputChange}
                    value={addQuery.comments}
                  />
                </Grid>
               
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ "& button": { m: 1 } }}>
                <Button variant="contained" onClick={formHandler}>Post</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default FormAddQuery;
