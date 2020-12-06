import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import styles from "./NoteList.module.css";

function NoteList({ key, id, message,  deleteNote,updateNote, input}) {
  return (
    
      <ul className={styles.list} key={key}>
        <li>
          <div className={styles.title}>
            <h3>{message} </h3>
          </div>

          <div>
            <Button onClick={() => deleteNote(id)}>
              <DeleteIcon />
            </Button>
            <Button onClick={() => updateNote(id, input)}>
              <UpdateIcon />
            </Button>
          </div>
        </li>
      </ul>
    
  );
}

export default NoteList;
