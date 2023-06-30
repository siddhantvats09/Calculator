import React, { useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './App.css';

function App() {

  const [result, setresult] = useState("")
  const [text, settext] =useState('')
  const [object, setobject] = useState([])
  const [resultshow, setresultshow] = useState("")
  const [number, setnumber] = useState("")
 


  const hendelclick = (e)=>{
    
    setresult(result.concat(e.target.name))
  }
  const clear=()=>{
    setresult("")
  }
  const backspace=()=>{
    setresult(result.slice(0, -1 ));
  }
  const calculate=(e)=>{
  try{
    setnumber(result.concat(e.target.name))
    setresult(eval(result).toString());
    setresultshow(eval(result).toString())
  }
  catch(err){
setresult("Error")
  }
  }

  const handelsubmitclick =(e)=>{
    e.preventDefault();
    const newobj= [{number,resultshow,text}]
    setobject([...object,newobj])
    console.log(object)
    setnumber('')
    settext('')
    setresultshow('')
  }
  const handleChange1 = (event) =>{
    settext(event.target.value)
    
    }
    
  return (
    <>
      
      <div className="container">

      <form>
    <input className='input' type="text"  value={result}/>
      </form>
      <div className="keypad">
        <button className='highlite' onClick={clear} id="clear" >Clear</button>
        <button className='highlite' onClick={backspace} id="backspace" >C</button>
        <button className='highlite' name="/"  onClick={hendelclick}>&divide;</button>
        <button name="7"  onClick={hendelclick}>7</button>
        <button  name="8" onClick={hendelclick}>8</button>
        <button name="9"  onClick={hendelclick}>9</button>
        <button className='highlite' name="*"  onClick={hendelclick}>&times;</button>
        <button  name="4" onClick={hendelclick}>4</button>
        <button  name="5" onClick={hendelclick}>5</button>
        <button name="6"  onClick={hendelclick}>6</button>
        <button className='highlite' name="-"  onClick={hendelclick}>&ndash;</button>
        <button name="3"  onClick={hendelclick}>3</button>
        <button name="2"  onClick={hendelclick}>2</button>
        <button  name="1" onClick={hendelclick}>1</button>
        <button className='highlite'  name="+"  onClick={hendelclick}>+</button>
        <button name="0"  onClick={hendelclick}>0</button>
        <button name="."  onClick={hendelclick}>.</button>
        <button className='highlite'  id='result' onClick={calculate}>=</button>


      </div>
      <div className="inputbox">
      <form>
        <h1>Calculation Name</h1>
        <input
        className='textbox'
         type="text"
         name="text" 
         value={text}
         placeholder='write here....'
         onChange={handleChange1}
        />
        
      </form>
      <button className='submit' onClick={handelsubmitclick}>
            Store Result
        </button>
      </div>

      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of Calculation</TableCell>
            <TableCell align="right">Operation</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          console.log("number",number)
        }
          {object.map((ro,index) => (
            <TableRow
              key={index}>
              <TableCell align="right">{ro.text}</TableCell>
              <TableCell align="right">{ro.number}</TableCell>
              <TableCell align="right">{ro.resultshow}</TableCell>
              <TableCell align="right">delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </>
  );
}

export default App;


