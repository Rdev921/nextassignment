// import React, { useState,useEffect } from 'react'

// const modal = () => {
//   const[modal, setModal] = useState(true);
//   const [formState, setFormState] = useState(initialState);
//   const [users, setUsers] = useState([]);

//   const fetchData = async () => {
//     try {
//         const response = await fetch('http://localhost:8080/users');
//         const data = await response.json();
//         setUsers(data);
        
//     } catch (error) {
//       console.log(error)
//     }
// }

// useEffect(() => {
//     fetchData();
// }, [])
//   const handleChange = (e) => {
//         const { name, value } = e.target;
//         // console.log(name,value);
//         setFormState({ ...formState, [name]: value })
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault();

//         fetch('http://localhost:8080/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formState)
//         })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log(data);
//                 fetchData();
//             })
//             .catch(() => console.log(error));
      
//     }
//     const { fullname, email, phone,instagram,youtube } = formState
//   const toggleModal = ()=>{
//     setModal(!modal);
//   }
//   return (
//     <>

//     {modal && (
//       <div className="modal">
//         <div className="overlay" onClick={toggleModal}></div>
//         <div className="modal-content">
//         <div id='product-form'>
//             <form onSubmit={handleSubmit}>
//                 <label >Enter Name:</label>
//                 <input type="text"
//                     placeholder='Enter you name'
//                     name='fullname'
//                     value={fullname} onChange={handleChange}
//                 />
               
//                 <label >Email:</label>
//                 <input type="text"
//                     placeholder='Enter you email'
//                     name='email'
//                     value={email} onChange={handleChange}
//                 />
               
//                 <label>Phone:</label>
//                 <input type="text"
//                     placeholder='Enter you phone'
//                     name='phone'
//                     value={phone} onChange={handleChange}
//                 />
//                 <label >Instagram Link:</label>
//                 <input type="text"
//                     placeholder='Enter you social link'
//                     name='instagram'
//                     value={instagram} onChange={handleChange}
//                 />
//                 <label >Youtube Link:</label>
//                 <input type="text"
//                     placeholder='Enter you social link'
//                     name='youtube'
//                     value={youtube} onChange={handleChange}
//                 />
             
//                 <button type='submit'>Done</button>
//             </form>
//         </div>
//           <button className='close-modal' onClick={toggleModal} >Close</button>
//         </div>
//       </div>
//     )
//     }
//     </>
//   )
// }

// export default modal