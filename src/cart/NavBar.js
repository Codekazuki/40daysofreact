import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h4>UseReducer</h4>
        <div className='nav-container'>
          <FaCartPlus />
          <div className='amount-container'>
            <p className='total-amount'>2</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
