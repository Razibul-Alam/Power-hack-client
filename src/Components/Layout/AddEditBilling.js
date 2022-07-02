import React,{useState,useEffect} from 'react';
import{Modal} from 'react-bootstrap'
import axios from 'axios'

const AddEditBilling=({show,setShow,handleClose,isUpdate,singleInfo,setIsUpdate})=>{

  const{name,email,phone,ammount,_id}=singleInfo;
  const [defaultval,setDefaultVal]=useState({
    name:'',email:'',phone:null,ammount:null
  })
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        phone: null,
        ammount: null,
      });
console.log(isUpdate,defaultval)
      // update billing
      useEffect(()=>{
        if(singleInfo && isUpdate==true){
            setBillingInfo({name:name,email:email,phone:phone,ammount:ammount,_id:_id})
        }
        },[singleInfo,isUpdate])
      // update billing
      useEffect(()=>{
        if(isUpdate==true){
            setDefaultVal({name:name,email:email,phone:phone,ammount:ammount})
        }else{
          setDefaultVal({name:'',email:'',phone:null,ammount:null})
        }
        },[isUpdate,singleInfo])

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isUpdate){
axios.put(`https://nameless-wave-74906.herokuapp.com/api/update-billing/${_id}`,billingInfo)
.then(result=>{
  setShow(false)
  setIsUpdate(false)
  alert('Updated successfully')
})
        }else{
          axios.post("https://nameless-wave-74906.herokuapp.com/api/add-billing", billingInfo)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Created successfully");
            setShow(false)
          }
        });
        }

    }
    const handleChange=(e)=> setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
    return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdate?'Update':'Create'} Bill Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {/* <div className="d-flex">
        {isLoading && <h5 className="text-primary">updating.....</h5>}
      </div> */}
      <div className="">
          <div className="my-4">
            <form onSubmit={handleSubmit}>
              <div className=" form-group row d-md-flex">
                  <label className="form-label">Name</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="name"
                    defaultValue={defaultval.name}
                  />
                  <label className="form-label">Email</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="email"
                    name="email"
                    defaultValue={defaultval.email}
                  />
                  <label className="form-label">Phone</label>
                  <input
                    required
                    defaultValue={defaultval.phone}
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    name="phone"
                  />
                  <label className="form-label">Paid Ammount</label>
                  <input
                  defaultValue={defaultval.ammount}
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    name="ammount"
                  />
              </div>
              <div className="mt-5 mx-auto input-icon">
                <input
                  className="form-control update-btn py-2 px-3"
                  style={{
                    backgroundColor: "purple",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  type="submit"
                  value='Submit'
                />
              </div>
            </form>
          </div>
      </div>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </>
    );
};

export default AddEditBilling;