import { useState } from 'react'
import './AdminPanelStyles.css'
import adminavatar from '../imgs/adminavatar.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/authSlice';



function AdminPanel() {

  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch()
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="admin-panel-wrapper p-2">
      <div className="row">
        <div className="col-md-2 admin-sider-bar p-2 py-5">
          <h4 className='text-center fw-bold'>Admin</h4>
          <ul className='m-0 p-0 '>
            
            <li className='p-2 my-4'><Link to='users'>Users</Link></li>
            <li className='p-2 my-4'><Link to='orders'>Orders</Link></li>
          </ul>
        </div>
        <div className="col-md-10">
          <h2 className='text-center m-3 '>Admin Panel</h2>
          <h6 className='text-center m-3 fw-semibold '>Categories</h6>

          <div className="d-flex justify-content-between mt-3">
            <div className=" col-md-4 px-4 py-2">
              <Link to='/admin-panel/category/ring'><button className="btn btn-dark">Rings</button></Link>
            </div>
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/bracelet'><button className="btn btn-dark">Bracelets</button></Link>
            </div>
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/pendant'><button className="btn btn-dark">Pendants</button></Link>
            </div>

          </div>

          <div className="d-flex justify-content-between mt-3">
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/chain'><button className="btn btn-dark">Chains</button></Link>
            </div>
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/limitedDrop'><button className="btn btn-dark">Limited Drops</button></Link>
            </div>
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/newRelease'><button className="btn btn-dark">New Releases</button></Link>
            </div>
          </div>
          
          <div className="d-flex justify-content-between mt-3">
            <div className=" col-md-4 px-4 py-2">
              <Link to='/admin-panel/category/shirt'><button className="btn btn-dark">Shirts</button></Link>
            </div>
            <div className="col-md-4 px-4 py-2">
            <Link to='/admin-panel/category/TankTops'><button className="btn btn-dark">TankTops</button></Link>
            </div>
           
          </div>

        </div>

      </div>


    </div>
  );

}

export default AdminPanel