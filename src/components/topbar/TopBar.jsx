
import "./topbar.css"
import navLogo from "../../images/steppingStoneNavbar.svg";
import headerImage from "../../images/humanAtStepping.svg"
import courseIcon from "../../images/react icon.png"
 import React, { useState } from 'react';

import headerLogo from "../../images/headerLogoGREY.svg";

// export default function TopBar(){
//     return (
//         <>
//             <div className="main">
//                 <div className="container nav__container">
//                     <a href="index.js"><h4>Stepping stone</h4></a>
//                     <ul className="nav__menu">
//                         <li><a href="index.js">home</a></li>
//                         <li><a href="index.js">home</a></li>
//                         <li><a href="index.js">home</a></li>
//                         <li><a href="index.js">home</a></li>
//                         <li><a href="index.js">home</a></li>
//                     </ul>
//                     <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
//                     <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
//                 </div>
//             </div>
//             <header>
//                 <div class="container header_container">
//                     <div class="header_left">
//                         <h1>Grow your skills to andvance your career path</h1>
// <p>
// Lorem ipsum dolor sit amet consectetur adipisicing
// elit. Quisquam saepe animi, ad quis et atque iste
// placeat minus ipsa rem?
// </p>
// <a href="courses.html" class="btn btn"> </a>
// </div>
// <div class="header_right">
// </div>
// </div>
// </header>
            
//         </>
//     );
// }

export default function TopBar() {
   
    const [clicked,setClicked]=useState(false);
    const [searchText,setSearchText]=useState({});
    const handleClick=()=>{
      setClicked(!clicked);
    }
  return (
    <>
        {/* <div className="top">
            <div className="topLeft">
              
                 
                <div className="stepping-stone valign-text-middle Montserrat-bold-black-20px ">
                    <span className="Montserrat-bold-black-20px"> Stepping stone</span>
                </div>
            </div>



            <div className="topCenter">
                <div id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                <ul className="topList">
                    <li className="topListItem place active">HOME</li>
                    <li className="topListItem place">CHATROOM</li>
                    <li className="topListItem place">COURSE</li>
                    <li className="topListItem place">LOGIN</li>
                </ul>
                </div>
                <div id="mobile">
                <i id="bar" onClick={()=>handleClick()} className={clicked ? "fas fa-times" : "fas fa-bars"}>
                    
                </i>
                </div>
            </div>

            <div className="topRight">
            <img 
            className="topImg"
            src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
        />
            </div>
        </div> */}


        <nav>
        <div className="topLeft">
              <span className="Montserrat-bold-black-20px"><a href="index.html">Stepping stone</a></span>
                
            </div>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="index.html"> Chatroom </a>
            </li>
            <li>
              <a href="index.html"> Course </a>
            </li>
            <li>
              <a href="index.html"> Logout </a>
            </li>
            <li>
              {/* <a href="index.html"> Contact </a> */}
            </li>
          </ul>
        </div>
        <input type="text" name="" id="" className={clicked? "input clicked":"input"} />
        
        <img 
            className="topImg"
            src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
        />
        <div id="mobile">
          <i
            id="bar"
            onClick={()=>handleClick()}
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
       
       
      </nav>

        {/* ==================header============== */}
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


        <section className="categories">
            <div className="container categories_container">
                <div className="categories_left">
                    <h1>Categories</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum ab in corporis quis molestiae
                        possimus vel temporibus error. Voluptatem cum harum ipsum facilis ducimus veritatis optio, nihil qui
                        provident.
                    </p>
                    <a href="index.html" className="btn" >Learn More </a>
                </div>
                <div className="categories__right">
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-palette"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-usd-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-megaphone"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                        
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-music"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                        
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                    </div>
                
            </div>
        </section>


        <section className="courses">
            <h2>Our Popular Courses</h2>
            <div className="container courses_container">
                <article className="course">
                    <div className="course_image">
                        <img src={courseIcon} alt=""/>
                    </div>
                   <div className="course_info">
                   <h4>Responsive Social Media Website UI Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam
                        deserunt eaque quos iure ad debitis.
                    </p>
                    <a href="course.html" className="btn btn-primary"> Learn More </a>
                   </div>
               </article>
                <article className="course">
                    <div className="course_image">
                        <img src={courseIcon} alt=""/>
                    </div>
                   <div className="course_info">
                   <h4>Responsive Social Media Website UI Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam
                        deserunt eaque quos iure ad debitis.
                    </p>
                    <a href="course.html" className="btn btn-primary"> Learn More </a>
                   </div>
               </article>
                <article className="course">
                    <div className="course_image">
                        <img src={courseIcon} alt=""/>
                    </div>
                   <div className="course_info">
                   <h4>Responsive Social Media Website UI Design</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam
                        deserunt eaque quos iure ad debitis.
                    </p>
                    <a href="course.html" className="btn btn-primary"> Learn More </a>
                   </div>
               </article>
            </div>
        </section>



        {/* =========footer===== */}

        <footer >
            <div className="container footer_container">
                <div className="footer_1">
                    <a href="index.html" className="footer_logo"><h4>Stepping stone</h4></a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum nobis ratione.
                    </p>
                </div>
                <div className="footer_2">
                    <h4>Permalinks</h4>
                    <ul className="permalinks light_color">
                        <li><a href="index.html"> Home </a></li>
                        <li><a href="about.html"> About </a></li>
                        <li><a href="courses.html"> Courses </a></li>
                        <li><a href="contact.html"> Contact </a></li>
                    </ul>
                </div>
                <div className="footer_3">
                    <h4>Primacy</h4>
                    <ul className="primacy">
                        <li><a href="index.html"> Home </a></li>
                        <li><a href="about.html"> About </a></li>
                        <li><a href="courses.html"> Courses </a></li>
                        <li><a href="contact.html"> Contact </a></li>
                    </ul>
                </div>
                <div className="footer_4">
                    <h4>Contact Us</h4>
                    <div>
                        <p>stepping_stone@gmail.com</p>
                    </div>
                </div>

                <ul class="footer_socials">
                    <li>
                    <a href="index.html"><i class="uil uil-facebook-f"></i></a>
                    </li>
                    <li>
                    <a href="index.th"><i class="uil uil-instagram-alt"></i></a>
                    </li>
                    <li>
                    <a href="index.html"><i class="uil uil-twitter"></i></a>
                    </li>
                    <li>
                    <a href="index.html"><i class="uil uil-linkedin-alt"></i></a>
                    </li>
                </ul>

            <div className="footer_copyright">
                <small>Copyright &copy; Stepping stone</small>
            </div>
                
            </div>

        </footer>
         
    </>
  )
}


// export default function TopBar(){
    

// const AnimatedMenu = () => {
//     const [isOpen, setOpen] = useState(false);
  
//     const animationEndHandler = ({ animationName }) => {
//       if (animationName === 'open-menu') {
//           setOpen(true);
//       }
  
//       if (animationName === 'close-menu') {
//           setOpen(false);
//       }
//     };
//     return (
//         <>
//           <div 
//             onAnimationEnd={(event) => animationEndHandler(event)}
//             className={isOpen ? 'mainStyles open' : 'mainStyles close'}
//           >
//     <h1>heelllooo</h1>
//           </div>
//           <button onClick={() => setOpen(!isOpen)}>click me</button>
//         </>
//       );
//     };
// }
 

