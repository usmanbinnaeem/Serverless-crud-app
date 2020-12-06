import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createStyles, Theme } from "@material-ui/core/styles";
import NoteList from "./NoteList";
import styles from "./NoteForm.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "60%",
      margin: "0% 25%",
      padding: "5% 0 0 0",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

function NoteForm() {
  const classes = useStyles();
  const [data, setData] = useState<any>([]);
  const [notee, setNotee] = useState<string>("");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    (async () => {
      console.log("fetch called");
      await fetch("/.netlify/functions/get")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    })();
  }, [notee]);

  console.log(data, "save");
  const createNote = (val) => {
    fetch(`/.netlify/functions/create`, {
      method: "POST",
      body: JSON.stringify(val),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ref["@ref"].id, "from add call");
        setNotee(data);
        setInput("");
      });
  };
  const deleteNote = (id) => {
    console.log(id, "from del");
    fetch(`/.netlify/functions/delete`, {
      method: "POST",
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ref["@ref"].id, "from add call");
        setNotee(data);
      });
  };

  const updateNote = (id, note) => {
    console.log(id + note, "from update");
    const newData = {
      id,
      note,
    };
    fetch(`/.netlify/functions/update`, {
      method: "PATCH",
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ref["@ref"].id, "from add updata");
        setNotee(data);
        setInput("");
      });
  };

  return (
    <div className={classes.root}>
      <div>
        <form>
          <input
            style={{
              width: "50%",
              padding: "12px 20px",
              margin: "1rem 0",
              boxSizing: "border-box",
              border: "1px solid #555",
              outline: "none",
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>

          <Button variant="contained" color="primary"  style = {{margin: "10px"}} onClick={() => createNote(input)}>Add Note</Button>
        </form>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Notes List
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: "block" }}>
            {data?.map((title) => (
              <NoteList
                deleteNote={deleteNote}
                updateNote={updateNote}
                input={input}
                key={title.ref["@ref"].id}
                id={title.ref["@ref"].id}
                message={title.data.note}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default NoteForm;
