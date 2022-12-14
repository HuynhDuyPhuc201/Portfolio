import js from "../assets/img/js.svg";
import html from "../assets/img/html.svg";
import react from "../assets/img/react.svg";
import tailwind from "../assets/img/tailwind.svg";
import gsap from "../assets/img/gsap.svg";
import git from "../assets/img/git.svg";
import pts from "../assets/img/pts.svg";
import grunt from "../assets/img/grunt.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

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
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                            <img src={html} alt="Image" />
                              <h5>HTML, CSS, SCSS</h5>
                          </div>
                          <div className="item">
                            <img src={js} alt="Image" />
                              <h5>JavaScript, jQuery</h5>
                          </div>
                          <div className="item">
                            <img src={react} alt="Image" />
                              <h5>ReactJs, Redux Thunk</h5>
                          </div>
                          <div className="item">
                            <img src={tailwind} alt="Image" />
                              <h5>Tailwind, Bootstrap</h5>
                          </div>
                          <div className="item">
                            <img src={pts} alt="Image" />
                              <h5>Photoshop, Figma</h5>
                          </div>
                          <div className="item">
                            <img src={grunt} alt="Image" />
                              <h5>Grunt, Wordpress</h5>
                          </div>
                          <div className="item">
                            <img src={gsap} alt="Image" />
                              <h5>Gsap 3</h5>
                          </div>
                          <div className="item">
                            <img src={git} alt="Image" />
                              <h5>Git, Backlog</h5>
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
