import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
// import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addCountry } from '../redux/actions';
import {useNavigate} from 'react-router-dom'

export const AddCountry = () => {
    const [state, setState] = useState({
        id: "",
        country: "",
        city: "",
        population: ""
    })

    const [error, setError] = useState("")
    let dispatch = useDispatch()

    const {id,country,city,population} = state
    let navigate = useNavigate()

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id || !country || !city || !population){
            setError("Please fill the input fields")
        } else {
            dispatch(addCountry(state));
            navigate("/")
            setError("")
        }
    }
  return (
    <div>
    <Button variant="contained"
          color="secondary"
          type="submit" onClick={() => navigate("/")}>Go Back
      </Button>
    <h1>Add Country</h1>
    {error && <h3 style={{color: "red"}}>{error}</h3>}
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="standard-basic" label="Id" variant="standard" name="id" value={id} type="number" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Country" variant="standard" value={country} type="text" name="country" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="City" variant="standard" value={city} name="city" type="text" onChange={handleInputChange}/>
      <br />
      <TextField id="standard-basic" label="Population" name="population" variant="standard" value={population} type="number" onChange={handleInputChange}/>
      <br />
      <br />
      <Button variant="contained"
          color="primary"
          type="submit">
          Submit
      </Button>
    </Box>
    </div>
  )
}
