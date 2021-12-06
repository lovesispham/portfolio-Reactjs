import React from 'react'
import bg from '../assets/img/slide-1.jpg'
import ReactRotatingText from "react-rotating-text";

const Home = () => {
    return (
        <div className="section section-hero-1"
            style = {{backgroundImage:`url(${bg})`}}
        >
            <div className="box-center">
                <div className="container">
                <div className="box-heading">
                    <div className="heading-sm"> <span className="cicon-circle"></span> I'm Huong Duong</div>
                    <h1 className="heading">I'm a  
                    <ReactRotatingText
                            
                            
                            items={[
                            ' Web Developer ',
                            ' Graphic Designer '
                            ]}
                        />
                    <br />
                    I've lived in Hanoi, Vietnam
                    </h1>
                    <a href="https://i.topcv.vn/duongthuhuong?ref=4871584" target="_blank" className="btn bg-org">My CV</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
