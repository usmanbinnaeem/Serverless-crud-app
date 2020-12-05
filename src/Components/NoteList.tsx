import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import styles from "./NoteList.module.css";


interface Props {
    id: string,
    key: string,
    deleteNote : (id : string) => void,
    updateNote : (id: string, completed: boolean) => void,
    input: string,
    message: string
}

function NoteList({ key, id, message,  deleteNote,updateNote, input}: Props) {
  return (
    <>
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
    </>
  );
}

export default NoteList;
