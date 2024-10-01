
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";
import { Link } from "react-router-dom";



function BemVindoOption(){
    return(
       <div className="seccao-option">
           <Link to="/htmlPage" className="d-block itens"><FaHtml5 className="fs-3" style={{color:"orange"}}/>&nbsp;&nbsp;HTML</Link>
           <Link to="/cssPage" className="d-block itens"><FaCss3Alt  className="fs-3 text-danger"/>&nbsp;&nbsp;CSS</Link>
           <Link to="/sassPage" className="d-block itens"><SiSass className="fs-3 text-success"/>&nbsp;&nbsp;Sass</Link>
           <Link to="/bootstrapPage" className="d-block itens"><FaBootstrap className="fs-3 text-primary"/>&nbsp;&nbsp;Bootstrap</Link>
           <Link to="tailwindPage" className="d-block itens"><RiTailwindCssFill className="fs-3 text-light"/>&nbsp;&nbsp;Tailwind CSS</Link>
           <Link to="/jsPage" className="d-block itens"><TbBrandJavascript className="fs-3 text-warning"/>&nbsp;&nbsp;JAVASCRIPT</Link>
           <Link to="/reactPage" className="d-block itens"><FaReact className="fs-3 text-info"/>&nbsp;&nbsp;React.js</Link>
           <Link to="/angularPage" className="d-block itens"><FaAngular className="fs-3" style={{color:"#66ff66"}}/>&nbsp;&nbsp;Angular</Link>
           <Link to="vuePage" className="d-block itens"><FaVuejs className="fs-3" style={{color:"#b366ff"}}/>&nbsp;&nbsp;Vue.js</Link>
       </div>
    )
}


function BemVindoText(){

    return(
        <div className="seccao-text">
            <h1><span>Bem ao vindo</span><br />Quiz  Front-End</h1>

            <span>Pronto para começar?</span>
        </div>
    )
}


export default function BemVindo(){

    return(
       <section className="seccao-home text-white">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-6">
                        <BemVindoText />
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <BemVindoOption />
                    </div>
                </div>
            </div>
       </section>
    )
}