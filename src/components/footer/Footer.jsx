import React from 'react'

function Footer() {
  return (
   <>
        
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

export default Footer