import React from 'react';
import './RightSideBar.scss';
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Ubora1_img from '../../Assets/Ubora1_img.png';

const RightSideBar = () => {
    return (
        <div className = "Right-SideBar">
          <div className = "Right-SideBar-Nav-Main">
            <div className = "Right-SideBar-nav">
                <i className = "md1"><IoMdNotifications/></i>
                <i><MdOutlineMoreHoriz/></i>
            </div>
         </div>
           
        <div className = "Right-side-Bar-Content-Main">
            <div className = "Right-SideBar-Content">
                <img src = {Ubora1_img} alt = ""/>
                <h3>Jane Doe</h3>
                <p>Cardiology</p>
            </div>
        </div>
     </div>
     
    )
}



export default RightSideBar;