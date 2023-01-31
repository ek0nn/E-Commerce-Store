import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              {
                //mb is margin bottom
              }{" "}
              <p className="text-white mb-0">Free Shipping Over £100 </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Call us on: yes</p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Beyond.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py2"
                  placeholder="Search for product here"
                  aria-label="Search for product here"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-right justify-content-between ">
                <div>
                  <Link className="d-flex align-items-right gap-10 text-white float-end">
                    <img
                      className="header-icons"
                      src="images/returns.png"
                      alt="returns"
                    />
                    <p className="mb-0">
                      Returns <br /> & Orders
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-right gap-10 text-white float-end">
                    <img className="header-icons" src="images/wishl.png" alt="wishlist" />
                    <p className="mb-0">
                      {" "}
                      My <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-right gap-10 text-white float-end">
                    <img className="header-icons" src="images/user.png" alt="user" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-right gap-10 text-white float-end">
                    <img className="header-icons" src="images/checkout.png" alt="checkout" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <header className="header-bottom py-3">
        
        <div className="container-xxl">
            
          <div className="row">
            
            <div className="col-12">
                
              <div className="menu-bottom d flex align-items-center gap-30 "> 
               
              
                <div className="menu-links ">
                    
                  <div className="d-flex align-items-center gap-15 ">
                  <div>
                    <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle gap-15 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > 
                    <img className= "menu-img"src="images/menu.png" alt="" />
                      <span> Browse Categories</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item text-white" href="asda">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item text-white" href="#as">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item text-white" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                    </div>
                    </div>
                 
                    <NavLink className='text-white' to="/">Home</NavLink>
                    <NavLink className='text-white' to="/">Our Store</NavLink>
                    <NavLink className='text-white' to="/">Build Process</NavLink>
                    <NavLink className='text-white' to="/contact">Contact</NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
