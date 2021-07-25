import React from 'react'
import "./_header.scss"
import { FiMenu } from "react-icons/fi";
import { SiYoutubetv } from "react-icons/si";
import { MdLocationSearching , MdApps } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";

const header = ({ c }) => {
    return (
        <div className ="border border-info header" >
            <div  >
            <FiMenu className="log" size= {26} onClick={() => c()}></FiMenu>
            <SiYoutubetv  className="logo" size= {32}></SiYoutubetv>
            </div>
            <form>
                <input type="text" placeholder="search" />
                <button type="submit">
                    <MdLocationSearching size= {26} />
                </button>
            </form>
            <div className="header__logos">
                <MdApps size= {29}/>
                <BsBellFill size= {29}/>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c32d77e4-b9b4-4314-9364-ca309ddbc196/d8wc71w-d7b4b86b-a50d-4dac-90cb-b91afe5ecbd7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzMmQ3N2U0LWI5YjQtNDMxNC05MzY0LWNhMzA5ZGRiYzE5NlwvZDh3Yzcxdy1kN2I0Yjg2Yi1hNTBkLTRkYWMtOTBjYi1iOTFhZmU1ZWNiZDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AKta26b_GclhSfC3U3VoSJ5MI65HBSPGPSMhIHGTnOY" alt="jay's avatar" width="29" height="29" />
            </div>
        </div>
    )
}

export default header
