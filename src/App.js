import React from 'react';
import './App.css';
import { Tes2,Tes } from "./Tes" 
import Contoh from "./Module/Contoh";
import Jejak from "./Module/Jejak";
import Input from './Module/Input';
import Button from './Module/Button';
import dayjs from 'dayjs';

function App() {
  let waktu = new Date()
  let [count, setCount] = React.useState(0);
  return (
    <React.Fragment>
     <div className="header">
      <h1 style={{
        color:'red',
        fontSize : '70px',
        fontFamily: "fantasy",
        backgroundColor:'white',
        borderStyle:'groove',
        marginBottom:'0px'
      }}>
       Hello World
      </h1>
      <div class='Example'>
       <h4>{count}</h4>
       <button onClick={() => {
         setCount(count + 1);
         }}
         >
           Tambah
           </button>
       <button onClick={() => {
         setCount(count - 1);
         }}>Kurang</button>
      </div>
      <p style={{color:'black'}}>Waktu saat ini {dayjs(waktu).format('DD-MM-YYYY hh:ss:mm')}</p>
      <Tes nama='Sugih' sekolah='MQ' jurusan='RPL'/>
      <Tes2 mapel='Matematika' nilai={50} color='gray' lulus/>
      {/* <Contoh/>
      <Jejak/>
     <div>only one parent</div> */}
    </div>
    {/* <Input/>
    <Button/> */}
    
     </React.Fragment>
  );
}

export default App;




