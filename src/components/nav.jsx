
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {useState} from 'react';
import {Link} from 'react-router-dom';

export const  NavLinks = ()=>{

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div style = {{backgroundColor:"#0d6efd", borderRadius:"15px"}}>
          <FormControl sx={{ m: 1, maxWidth: 120, maxHeight:20}}>
            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
            <Select
              style={{height:"10px", backgroundColor:"#0d6efd"}}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value="portugyues"
              label="teste"
            >
              <MenuItem value={"pt"}><Link to = "/" style={{padding:"10px 65px", margin:"0px"}}>Home</Link></MenuItem>
              <MenuItem value={"pt"}><Link to = "/plano" style={{padding:"10px 35px"}} >Aumentar Clicks</Link></MenuItem>
              <MenuItem value={"pt"}><Link to = "/payment-estatus" style={{padding:"10px 8px"}}>Estados de pagamentos</Link></MenuItem>

            </Select>
          </FormControl>
        </div>
      );
}