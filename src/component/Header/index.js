import React from 'react'
import img from '../../Asset/image/developer.png'
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className={style.img} >
      <img src={img}  />
      </div >
      <div className={style.nav}>
          <ul>
            <h4>Main Menu</h4>

            <li>
              < Link to="/Dashboard" >Dashboard</ Link>
            </li>
            <li>
              < Link to="/StudentList" className='link'>Student List</ Link>
            </li>
            <li>
              < Link to="/StudentView" className='link'>Student View</ Link>
            </li>
            <li>
              <Link  to="/StudentAdd" className='link'>Student Add</Link >
            </li>
            <li>
              <Link  to="/StudentEdit" className='link'>Student Edit</Link>
            </li>
          </ul> 
      </div>

    </>
  )
}

export default Header;
