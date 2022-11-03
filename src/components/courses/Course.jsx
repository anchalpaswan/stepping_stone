import React from 'react'
import courseIcon from "../../images/react icon.png"
function Course() {
  return (
        <>
            
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

        </>
  )
}

export default Course