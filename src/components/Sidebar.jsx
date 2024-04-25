import React from 'react'
import { FaBuilding, FaCalendarAlt, FaDesktop, FaRegQuestionCircle, FaSearch } from "react-icons/fa"; 
import {BiSolidDollarCircle} from 'react-icons/bi'
import {SlEarphones } from 'react-icons/sl'
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <div>
        <nav>
            <div>Logo</div>
        <div className='middle-icons'>
            <i>
                <FaSearch />
            </i>
            <i>
                <FaDesktop />
            </i>
            <i>
                <FaRegQuestionCircle />
            </i>
            <i>
                <FaCalendarAlt />
            </i>
            <i>
                <FaBuilding />
            </i>
            <i>
                <BiSolidDollarCircle />
            </i>
            <i>
                <SlEarphones />
            </i>    
        </div>
        <div>
            <i>
                <IoMdSettings/>
            </i>
        </div>
        </nav>
    </div>
  )
}

export default Sidebar
