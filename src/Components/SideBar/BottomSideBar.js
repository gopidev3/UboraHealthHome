import React from 'react';
import './BottomSideBar.scss';
import { IoMdMore } from "react-icons/io";
import Ubora3_img from '../../Assets/Ubora3_img.png';
import Ubora4_img from '../../Assets/Ubora4_img.png';
import { FiCircle } from "react-icons/fi";

const BottomSideBar = () => {
    return (
       <div className = "Bottom-SideBar-Main">
           <div className = "Bottom-SideBar">
               <div className = "Bottom-SideBar-Nav">
                   <div className = "Nav-Content1">
                       <span className = "tkt">Open Tickets</span>
                       <span className = "tkt1"><IoMdMore/></span>
                   </div>
               </div>
               <div className = "Bottom-SideBar-Content">
                   <div className = "Bottom-content2">
                       <img src = {Ubora3_img} alt = ""/> <i><FiCircle/></i>
                       <span>Support (Admin)</span>
                       <p>Ubora has been such a</p>    
                   </div>
                   <div className = "Bottom-content2">
                       <img src = {Ubora4_img} alt = ""/>
                       <span>Tom Halland</span>
                       <p>Ubora has been such a</p>
                       <i><FiCircle/></i>
                   </div>
                   <div className = "Bottom-content2">
                       <img src = {Ubora4_img} alt = ""/>
                       <span>Kevin J</span>
                       <p>Ubora has been such a</p>
                       <i><FiCircle/></i>
                   </div>
                   <div className = "Bottom-content2">
                       <img src = {Ubora4_img} alt = ""/>
                       <span>Steven</span>
                       <p>Ubora has been such a</p>
                       <i><FiCircle/></i>
                   </div>
                   <div className = "Bottom-content2">
                       <img src = {Ubora4_img} alt = ""/>
                       <span>Henry</span>
                       <p>Ubora has been such a</p>
                       <i><FiCircle/></i>
                   </div>
                   <label>view all</label>
               </div>
           </div>
       </div>
     
    )
}



export default BottomSideBar;