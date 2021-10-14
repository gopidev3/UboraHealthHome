import React from 'react';
import './SideBar.scss';
import Ubora1_img from '../../Assets/Ubora2_img.png';
import Ubora5_img from '../../Assets/Ubora5_img.png';
import Ubora6_img from '../../Assets/Ubora6_img.png';

const SideBar = () => {
    return (
        <div className="Health-main-root">
            <div className="Health-side-Bar">
                    <div className="Health-side-content1">
                        <img src={Ubora1_img} alt="" />
                    </div>
                <div className="Health-side-content-main">
                    <div className="Health-side-content2">
                        <div className = "spec-content">
                            <img src={Ubora6_img} alt="" /><span>Dashboard</span>
                        </div>
                        <div className = "norm-content">
                            <img src={Ubora5_img} alt="" /><span>Appointments</span>
                        </div>
                        <div className = "norm-content">
                            <img src={Ubora5_img} alt="" /><span>Bookings</span>
                        </div>
                        <div className = "norm-content">
                            <img src={Ubora5_img} alt="" /><span>Patient List</span>
                        </div>
                        <div className = "norm-content">
                            <img src={Ubora5_img} alt="" /><span>Payments</span>
                        </div>
                        <div className = "norm-content">
                            <img src={Ubora5_img} alt="" /><span>Reports</span>
                        </div>
                        <div className = "norm-content">
                          <img src={Ubora5_img} alt="" /><span>Settings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SideBar;