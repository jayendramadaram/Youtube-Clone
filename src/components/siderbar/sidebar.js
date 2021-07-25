import React from 'react'
import "./_sidebar.scss"
import { AiFillHome , AiFillLike } from "react-icons/ai";
import { MdExplore , MdSubscriptions , MdVideoLibrary , MdWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { logout } from '../../redux/actions/auth.action';
import { useDispatch } from 'react-redux';



const Sidebar = ({ sidebar,c }) => {

    const dispatch = useDispatch()

    const handlelogin = () => {
        dispatch(logout())
    }




    return (
        <div className = {sidebar ? "sidebar  change" : "sidebar"}>
            <ul>
                <li>
                    <AiFillHome onClick={() => c()}/>
                    <span>Home</span>
                </li>
                <li>
                    <MdExplore onClick={() => c()}/>
                    <span>Explore</span>
                </li>
                <li>
                    <MdSubscriptions onClick={() => c()}/>
                    <span>Subscriptions</span>
                </li>
                <hr />
                <li>
                    <MdVideoLibrary onClick={() => c()}/>
                    <span>VideoLibrary</span>
                </li>
                <li>
                    <AiFillLike onClick={() => c()}/>
                    <span>Liked vedios</span>
                </li>
                <li>
                    <FaHistory onClick={() => c()}/>
                    <span>History</span>
                </li>
                <li>
                    <MdWatchLater onClick={() => c()}/>
                    <span>WatchLater</span>
                </li>
                <hr/>
                <li>
                    <FiLogOut onClick={() => handlelogin()} on/>
                    <span>LogOut</span>
                </li>
                <hr/>
                
            </ul>
        </div>
    )
}

export default Sidebar
