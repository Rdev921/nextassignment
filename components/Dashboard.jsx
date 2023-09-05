import React, { useState, useEffect } from 'react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'


const initialState = {
  fullname: '',
  email: '',
  phone: '',
  instagram: '',
  youtube: ''
}
const Dashboard = () => {


  const [modal, setModal] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [show, setshow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  

  const fetchData = async () => {
    try {
      const response = await fetch('https://users-data-z5mj.onrender.com/users');
      const data = await response.json();
      setUsers(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setFormState({ ...formState, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://users-data-z5mj.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      })
      .catch((error) => console.log(error));

  }
  const { fullname, email, phone, instagram, youtube } = formState;
  const toggleModal = () => {
    setModal(!modal);
  }

  const showData = () => {
    setshow(!show);
  }



  return (
    <>

      <div className="flex-container">
        {/* ---------------Sidebar-------------------- */}
        <div className='sidebar' style={{width : isOpen ? "15%"  : "110px"}}>
          <ul>
            <div className="bars" style={{marginLeft : isOpen ? "0px"  : "0px"}}>
            <FaBars onClick={toggle} />
            </div>
            <h2 className='header'>Board.</h2>
            <li><img src="images/dashboard.png" alt="Dashboard" /><p>Dashboard</p></li>
            <li><img src="images/reports.png" alt="Transactions" /><p>Transactions</p></li>
            <li><img src="images/projects.png" alt="Schedules" /><p>Schedules</p></li>
            <li><img src="images/members.png" alt="Users" /><p>Users</p></li>
            <li><img src="images/setting.png" alt="Settings" /><p>Settings</p></li>
          </ul>

          <ul>
            <li><p>Help</p></li>
            <li><p>Contact Us</p></li>
          </ul>
        </div>




        {/* ---------------Dashboard-------------------- */}
        <div className='user-info'>
          <div className="dashboard-header">
            <h2 style={{ fontWeight: 'bold', marginTop: '10px' }}>Dashboard</h2>
            <div className="right-section">
              <input type="text" placeholder='Search..' />
              <MdOutlineNotificationsNone size={'22px'} className='notification' />
              <img className="profile" src="images/profile.png" alt="" />
            </div>
          </div>

          <div className="cards">
            <div className="card">
            <i class="fa-solid fa-money-check-dollar"></i>
              <p className='title'>Total Revenues</p>
              <div className="price">
                <h2>$2,129,450</h2>
                <p>+2.5%</p>
              </div>
            </div >
            <div className="card">
            <i class="fa-solid fa-right-left"></i>
              <p className='title'>Total Transactions</p>
              <div className="price">
                <h2>1,520</h2>
                <p>+4.2%</p>
              </div>
            </div>
            <div className="card">
            <i class="fa-regular fa-thumbs-up"></i>
              <p className='title'>Total Likes</p>
              <div className="price">
                <h2>9,721</h2>
                <p>+1.4%</p>
              </div>
            </div>
            <div className="card">
              <i class="fa-regular fa-user"></i>
              <p className='title'>Total Users</p>
              <div className="price">
                <h2>9,721</h2>
                <p>+1.7%</p>
              </div>
            </div>
          </div>



          {/* chart */}




          {/* end section */}

          <div className="product-card">
            <div className="top-products">
              <div className="product-info1">
                <h1>Top Products</h1>
                <p>May-June 2021</p>
              </div>

              <div className="product-info2">
                <img className="chart-img" src="images/circle.png" alt=""  />
                <div className="chart-info">
                  <div>
                    <h2>Basic Tees</h2>
                    <p>55%</p>
                  </div>
                  <div>
                    <h2>Custom Short Pants</h2>
                    <p>31%</p>
                  </div>
                  <div>
                    <h2>Super Hoodies</h2>
                    <p>14%</p>
                  </div>

                </div>
              </div>

            </div>


            {show ? (
              users.map((user) => (
                <div className="show-user-data" key={user.id}>
                  <div className="personal-info">
                    <h1>{user.fullname}</h1>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                  </div>

                  <div className="social-handle">
                    <p>{user.instagram}</p>
                    <p>{user.youtube}</p>
                  </div>
                </div>

              ))
            ) : (
              <div className="add-profile">
              <i class="fa-solid fa-plus" onClick={toggleModal}></i>
                <p>Add Profile</p>
              </div>

            )}
          </div>

          {/* modal */}

          {modal && (
            <div className="modal">
              <div className="overlay" onClick={toggleModal}></div>
              <div className="modal-content">
                <div id='user-details'>
                  <form onSubmit={handleSubmit}>
                    <h2 style={{fontWeight:'bold',marginBottom:'20px'}}>Add New Profile</h2>
                    <i class="fa-solid fa-xmark" onClick={toggleModal}></i> 
                    <label >Enter Name:</label>
                    <input type="text"
                      placeholder='Enter you name'
                      name='fullname'
                      value={fullname} onChange={handleChange}
                    />

                    <label >Email:</label>
                    <input type="text"
                      placeholder='Enter you email'
                      name='email'
                      value={email} onChange={handleChange}
                    />

                    <label>Phone:</label>
                    <input type="text"
                      placeholder='Enter you phone'
                      name='phone'
                      value={phone} onChange={handleChange}
                    />
                    <label >Instagram Link:</label>
                    <input type="text"
                      placeholder='Enter you social link'
                      name='instagram'
                      value={instagram} onChange={handleChange}
                    />
                    <label >Youtube Link:</label>
                    <input type="text"
                      placeholder='Enter you social link'
                      name='youtube'
                      value={youtube} onChange={handleChange}
                    />

                    <button className='submit-btn' type='submit' onClick={showData}>Done</button>
                    
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* modal end */}

        </div>
      </div>

    </>
  )
}

export default Dashboard