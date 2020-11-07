import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Link} from "react-router-dom";

function Logout(){
    const [open, setOpen] = useState(false);

    function handleClickOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    return(
        <div>
            <li>
                <Link className="nav-links" onClick={handleClickOpen}>LOGOUT</Link>
            </li>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <h5>LOGOUT</h5>
                <p className="logout">ARE YOU SURE?</p>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Disagree</Button>
                    <Button onClick={handleClose} color="secondary">Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Logout;