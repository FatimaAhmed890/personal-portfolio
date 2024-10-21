import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FaPython, FaDocker, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPowerbi, SiFlask, SiPandas, SiOpencv, SiNumpy, SiMicrosoftexcel, SiTypescript, SiScikitlearn, SiSpacy, SiPowershell } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript, IoInfinite } from "react-icons/io5";
import { GrCycle } from "react-icons/gr";
import { GiCycle } from 'react-icons/gi';
import { FcLinux } from 'react-icons/fc';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} className="owl-carousel owl-theme skill-slider" autoPlay={true} autoPlaySpeed={950} infinite={true}>
                            <div className="item">
                                <FaPython size={100} color="#3572A5" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <BiLogoPostgresql size={100} color="#6188B8" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <FaDocker size={100} color="#0080FF" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <SiPowerbi size={100} color='#F2C71B' />
                                <h5>PowerBI</h5>
                            </div>
                            <div className="item">
                                <SiMongodb size={100} color="#4DB331" />
                                <h5>Mongodb</h5>
                            </div>
                            <div className="item">
                                <SiFlask size={100} color="#3572A5" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <FaGitAlt size={100} color="#F24D27" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <SiPandas size={100} color="#ffff" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <SiOpencv size={100} color="#F79F1A" />
                                <h5>OpenCv</h5>
                            </div>
                            <div className="item">
                                <SiNumpy size={100} color="#3572A5" />
                                <h5>Numpy</h5>
                            </div>
                            <div className="item">
                                <SiMicrosoftexcel size={100} color="#21A366" />
                                <h5>MS Excel</h5>
                            </div>
                            <div className="item">
                                <FaReact size={100} color="#00D8FF" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <FaNodeJs size={100} color="#68a063" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <SiExpress size={100} color="#EE6C4D" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <SiScikitlearn size={100} color="#F7931E" />
                                <h5>Scikit-Learn</h5>
                            </div>
                            <div className="item">
                                <SiSpacy size={100} color="#3572A5" />
                                <h5>Spacy</h5>
                            </div>
                            <div className="item">
                                <IoInfinite size={100} color="#89CFF0" />
                                <h5>DevOps</h5>
                            </div>
                            <div className="item">
                                <FcLinux size={100} />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <SiPowershell size={100} color="#000000" />
                                <h5>Shell Scripting</h5>
                            </div>
                            {/* <div className="item">
                                <GiCycle size={100} color="#FF4433" />
                                <h5>Software Development</h5>
                            </div> */}
                            <div className="item">
                                <TbBrandCpp size={100} color="#00599C" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <IoLogoJavascript size={100} color="#F7DF60" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <SiTypescript size={100} color="#007acc" />
                                <h5>Typescript</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
