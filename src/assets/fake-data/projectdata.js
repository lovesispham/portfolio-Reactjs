import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";


import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

import i_project_1 from "../../assets/img/project/nomos-reactjs.png";
import i_project_2 from "../../assets/img/project/portfolio-reactjs.png";
import i_project_3 from "../../assets/img/project/cosso-html.png";
import i_project_4 from "../../assets/img/project/ecome-shopify.jpg";
import i_project_5 from "../../assets/img/project/zoa-shopify.jpg";

const data = {
    project : [
        {
            id:1,
            name : "Nomos - Ecommerce",
            img :i_project_1,
            language : "Reactjs",
            link :"nomos-reactredux.herokuapp.com/"
        },
        {
            id:2,
            name : "My Portfolio",
            img :i_project_2,
            language : "Reactjs",
            link :"dazzling-hopper-781624.netlify.app/"
        },
        {
            id:3,
            name : "Cosso - Clean, Minimal Responsive HTML Template",
            img : i_project_3,
            language : "HTML, CSS, Javascript",
            link :"landing.engotheme.com/html/cosso/demo/home_bestselling.html"
        },
        {
            id:4,
            name : "Ecome - Ecommerce Shopping Cart",
            img :i_project_4,
            language : "Shopify",
            link :"e-come-store.myshopify.com/"
        },
        {
            id:5,
            name : "Zoa - Minimalist Shopify Theme",
            img :i_project_5,
            language : "Shopify",
            link :'zoa-store-demo.myshopify.com/'
        }
    ],
    education : [
        {
            year:"2011 - 2016",
            name:"Hoa Binh University",
            degree:"ENGINEERING DEGREE",
            desc:"Study Information and Technology"
        }
    ],
    exp: [
        {
            year:"2017-2019",
            name:"Engotheme",
            career:"Web developer",
            desc:"Create creative template Shopify"
        },
        {
            year:"2019-2021",
            name:"Dai Viet Group",
            career:"HTML CSS markup",
            desc:"Build interfaces using wireframe, Figma, Photoshop desgin ... for projects of Dai Viet Group"
        }
    ],
    skills:[
        {
            id:1,
            name:"HTML5",
            img:L_HTML5
        },
        {
            id:2,
            name:"CSS",
            img:L_CSS3
        },
        {
            id:3,
            name:"Bootstrap",
            img:L_BOOTSTRAP
        },
        {
            id:6,
            name:"Javascript",
            img:L_JAVASCRIPT
        },
        {
            id:4,
            name:"ReactJS",
            img:L_REACT
        },
        {
            id:5,
            name:"Redux",
            img:L_REDUX
        },
       
        {
            id:7,
            name:"Git",
            img:L_GITHUB_PAGES
        },
        {
            id:8,
            name:"Sass",
            img:L_SASS
        }
    ]
}

export default data