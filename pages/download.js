import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Stack } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container} from "react-bootstrap";
import { Col} from "react-bootstrap";
import Table from "../component/table";
import { CSVLink } from "react-csv";
const Download =()=>
{
const filename="testdata_csv"
const [selectname,setSelectName] =useState("")  
const[count,setCount] =useState([])
const[list,setlist] =useState([])
const [head,setHead] =useState("")  
const[headlist,setHeadlist] =useState([])
const[data,setData] =useState([])



const headers = [
  { label: "Name", key: "name" },
  { label: "Salary", key: "Salary" },
  { label: "Country", key: "Country" },
  { label: "Phonenumber", key: "Phonenumber" }

];

const handleClick=(e)=>{
  e.preventDefault();
  const newItem={id:new Date().getTime().toString(),title:selectname}
  setlist([...list,newItem])
  setSelectName(selectname)
}

 const removeItem=(id)=>{
  setlist(list.filter((item)=>item.id!==id))
 }


  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("/database",{
      method:'POST',
      mode:"cors",
      headers : {
        'Content-Type':'application/json'
  },
      body:JSON.stringify(list)
      }) .then(response => response.json()).catch(error => console.log(error))
    console.log(JSON.stringify(list))
    console.log(typeof(list))
   
    }
    
    
  

  return (
        <Container fluid>
        <Form className="d-flex flex-column align-items-spacebetween my-5 " method="POST"   id="form">
 
            <Container >
                <Row   className="d-flex  ml-5">
                    <Col className="form-group py-2 " md={12} lg={6}>
                        
                            <Col  className=" mt-4 justify-content-center" md={12} lg={6} >
                            <h3 className="text-capitalize text-center mb-4" >Select field</h3>
                            </Col>

                            <Col className=" py-3" md={12} lg={6}>
                            <select className="form-control w-100 " name="feild" id="selectfield"   value={selectname}  onChange={(e)=>setSelectName(e.target.value)}  >
                                    <option value="--select field--"  disabled selected='true'>--select field--</option>
                                    <option value="ID">ID</option>
                                    <option value="NAME">NAME</option>
                                    <option value="EMAIL">EMAIL</option>
                                    <option value="PHONENUMBER">PHONENUMBER</option>
                                    <option value="PROFESSION">PROFESSION</option>
                                    <option value="SALARY">SALARY</option>
                                    <option value="DATE_OF_JOINING">DATE_OF_JOINING</option>
                                    <option value="YEARS_OF_EXPERIENCE">YEARS_OF_EXPERIENCE</option>
                                    <option value="COUNTRY">COUNTRY</option>
                                    <option value="CARD_NUMBER">CARD_NUMBER</option>
                                    <option value="COUNTRY_CODE">COUNTRY_CODE</option>
                                    <option value="BOOLEAN">BOOLEAN</option>
                                    <option value="GENDER">GENDER</option>
                                    <option value="HEX_COLORCODE">HEX_COLORCODE</option>
                                    <option value="CURRENCY">CURRENCY</option>

                            </select>
                            </Col>
                            <Col className="py-3" lg={3} md={12}>
                            <a id="add" className="text-uppercase text-decoration-none" href="#" onClick={handleClick}>add field</a>
                            </Col>

                            <Col  id="tableform"  className="form-group  pb-3 col-lg-6 col-md-12 " md={12} lg={6}>
                            
                            <label className="text-uppercase" >Enter the number of user</label>
                            <input  type="number"  value={count}  onChange={(e)=>setCount(e.target.value)} lg={6} id="alert" name="alert" required />
                            <br m/><br />
                            <Col className="py-2 m-5" lg={3}  md={12}>
        <button class="text-uppercase"  onClick={handleSubmit}  >preview</button><br></br>
        </Col>
                            </Col>
  

                    </Col>
                    <Col className=" form-group py-2  " md={12} lg={6}>
                        <Row    >
                        <Col className=" mt-4 justify-content-center"  md={12} lg={4}>
                        <h3 className="text-capitalize text-center mb-4">field name</h3>
                        </Col>
                        <Col className="  mt-4 justify-content-center" md={12} lg={4}>
                        <h3 className="text-capitalize text-center mb-4">type</h3>
                        </Col>
                        </Row>
                        <Col  className=" py-2 justify-content-center" md={12} lg={6}>
                          
                          <Table items={list} removeItem ={removeItem} head={head} setHead={setHead} headlist={headlist} setHeadlist={setHeadlist}></Table>                       
                       
                        </Col>



                    </Col>
                </Row>


            </Container>

        </Form>


    <Container id="tablepreview">
    <Stack gap={4}>
    <Form>
        <Col id="rowpreview">
              
                 
                 
                  <table className="table  my 5 " id="preview" >
                    <thead>
                   <tr>
                        {headers.map(row => {
                          return (
                          
                            
                                <td >{row.label}</td>
                            
                           
                           );
                        }
                        )}
                        </tr>
                    
                </thead>
                <tbody>
                {data.map((item)=>{ 
                  return(
                  <tr key={item.ID}>
                  <td >
                  {item.NAME}
                  </td><td>
                  {item.SALARY}
                </td>
                <td>
                  {item.COUNTRY}
                </td><td>
                  {item.PHONENUMBER}
                </td>
                </tr>
                );
                  })}
                </tbody>
                 </table>

            <div>
           
    </div>    
    
                
               
        </Col>


        <footer>
        <Row lg={12}>
            <Col lg={{span:6, offset:3}}>
            <Stack direction="horizontal" gap={4}>
            <button
                
                className="text-uppercase text-decoration-none"
            >           
               <CSVLink className=" btn  text-decoration-none" id="csvlinkbtn"
                        data={data} filename={filename}>Download as csv</CSVLink>        
               
               

            </button>
           
            <a id="tabledelete" className="text-uppercase text-decoration-none"  href="#">clear table</a>
            </Stack></Col>
        </Row>
        </footer>           
    </Form>
    </Stack>  
    </Container>
    	
    </Container>  
   
     )
    }
export default Download;
