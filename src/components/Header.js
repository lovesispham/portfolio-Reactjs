import React,{useState} from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Experience from '../pages/Experience'
const Header = () => {
    const [state, setState] = useState("home"); // change state to store string values and default we will store tab1

   
    
    return (
        <div>
            <div className="header">
                <ul className="group-icon">
                    <li id="home"  onClick={()=> setState("home")} className="icon-box"><i className="fa fa-home"></i>
                        <h2>Home</h2>
                    </li>
                    <li id="about" onClick={()=> setState("about")} className="icon-box"><i className="fa fa-user"></i>
                        <h2>About</h2>
                    </li>
                    <li id="exp" onClick={()=> setState("exp")} className="icon-box"><i className="fa fa-graduation-cap"></i>
                        <h2>Experience</h2>
                    </li>
                    <li id="portfolio" onClick={()=> setState("portfolio")} className="icon-box"><i className="fa fa-briefcase"></i>
                        <h2>Portfolio</h2>
                    </li>
                    
                </ul>
            </div>
            
            <div className="tab-content">
            
                <div id="home" className={`tab-panel ${state ==="home" ? "current" : "" }`}>
                
                        {state ==="home" ? <Home /> : null }
                        
                </div>
                
                
                <div id="about" className={`tab-panel ${state ==="about" ? "current" : "" }`}>
                        {state ==="about" ? <About /> : null }
                </div>
                
                <div id="exp" className={`tab-panel ${state ==="exp" ? "current" : "" }`}>
                    {state ==="exp" ? <Experience /> : null }
                </div>
                <div id="portfolio" className={`tab-panel ${state ==="portfolio" ? "current" : "" }`}>
                {state ==="portfolio" ? <Portfolio /> : null }
                </div>
                
                
            </div>
            
        </div>
       
    )

    
}

export default Header
