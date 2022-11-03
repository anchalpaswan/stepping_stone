import React from 'react'
import headerLogo from "../../images/headerLogoGREY.svg";
import headerImage from "../../images/humanAtStepping.svg"
export default function Header() {
  return (
    <>
                <header>
            <div className="container header_container">
                <div className="header_left">
                   <span className="header_left_logo">
                        <div className="header_logo">
                                <img src={headerLogo} alt="" />
                            <h1 id="header_title">Stepping stone</h1>
                            </div>
                   </span>
                    <p>Choose your stone of success today.....
                    </p>
                    <a href="courses.html" class="btn btn-primary"> Get Started </a>
                </div>
            <div className="header_right">
                <div className="header__right-image">
                    <img src={headerImage} alt=""  />
                </div>
            </div>
            </div>
        </header>
    </>
  )
}
