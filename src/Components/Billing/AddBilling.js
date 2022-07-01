import React,{useState,useEffect} from 'react';
import{Button,Col,Modal} from 'react-bootstrap'
import axios from 'axios'

const AddBilling=({show,setShow,handleClose,isUpdate,singleInfo})=>{
  console.log(isUpdate)
  const{name,email,phone,ammount,_id}=singleInfo;
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        phone: null,
        ammount: null,
      });
      // update
      useEffect(()=>{
        if(singleInfo){
            setBillingInfo({name:name,email:email,phone:phone,ammount:ammount,_id:_id})
        }
        },[singleInfo])
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isUpdate){
axios.put(`http://localhost:5000/updatebill/${_id}`,billingInfo)
.then(result=>alert('result'))
        }else{
          axios.post("http://localhost:5000/api/add-billing", billingInfo)
        .then((res) => {
          if (res.data.insertedId) {
            alert("added successfully");
          }
        });
        }

    }
    const handleChange=(e)=> setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
    // console.log(billingInfo)
    return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delivery Item Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {/* <div className="d-flex">
        {isLoading && <h5 className="test-primary">updating.....</h5>}
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
                    defaultValue={singleInfo?.name}
                  />
                  <label className="form-label">Email</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="email"
                    name="email"
                  />
                  <label className="form-label">Phone</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    name="phone"
                  />
                  <label className="form-label">Paid Ammount</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    name="ammount"
                  />
              </div>
              <div className="mt-5 w-25 mx-auto input-icon">
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
                  value='Create Bill'
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

export default AddBilling;