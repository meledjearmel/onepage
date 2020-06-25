import React from 'react';
import logo from './logo.svg';
import bootstrapImg from './img/Bootstrap4.jpg';
import taskImg from './img/undraw_accept_tasks_po1c.svg'
import eolImg from './img/undraw_product_teardown_elol.svg'
import meImg from './img/WhatsApp Image 2020-06-24 at 16.46.00.jpeg';
import reactImg from './img/undraw_react_y7wq.svg';
import semanticImg from './img/semantic.png';
import './css/aos.css';
import './css/bootstrap.min.css';
import './lib/Semantic/semantic.css';
import './css/style.css';
import AOS from 'aos';
import Composant from './Composant';
import Nav from './Nav';

AOS.init()

function App() {
  return (
    <>
      <div id="first-bloc" class="first-bloc">
        <nav class="navbar navbar-light">
            <a class="navbar-brand">onePage</a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>

        <div class="container mt4 inner-bloc d-flex justify-content-end align-items-center">

            <div class="text-back">
                <h1 data-aos="fade-left" data-aos-delay="50" data-aos-duration="3000">React UIX</h1>

                <p data-aos="zoom-in" data-aos-delay="150" data-aos-duration="3000">Design for lifenet lookoms</p>

                <div class="d-flex justify-content-end">
                    <div data-aos="flip-left" data-aos-delay="250" data-aos-duration="3000" class="ui labeled button" tabindex="0">
                        <div class="ui button"> <i class="heart icon"></i> Like</div>
                        <a class="ui basic label">2,048</a>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="250" data-aos-duration="3000" class="ui left labeled button" tabindex="0">
                        <a class="ui basic label">1,048</a>
                        <div class="ui icon button"><i class="fork icon"></i></div>
                    </div>
                </div>
            </div>

            <div class="viewButton absolute">
                <div class="d-flex justify-content-center align-items-center">
                    <a href="#second-bloc" data-aos="fade-up" data-aos-delay="350" data-aos-duration="3000" style={{position: 'relative'}} class="scroll-btn d-flex justify-content-center align-items-center">
                        <i class="angle down icon"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>

      <div id="second-bloc" class="second-bloc container">
        <Nav/>
        <div class="container inf-inner mt-5 d-flex justify-content-center align-items-center flex-column">
          <div class="container content d-flex align-items-center">
            <div class="img">
                <img src={taskImg}/>
            </div>
            <div class="text d-flex justify-content-end align-items-start flex-column">
                <h1>Realisation d'une onepage</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora perferendis quis asperiores ducimus beatae praesentium nesciunt, minima accusamus voluptates nulla est consequatur sit doloribus porro et quaerat odit soluta ex! Nemo laudantium quisquam nulla exercitationem voluptate facilis nisi quas vel et, repellendus voluptates? Distinctio, reiciendis. Aut repellat natus ex nesciunt. Distinctio, dolore nulla molestiae recusandae, dolorem quos laborum doloremque placeat cumque cupiditate quo aperiam pariatur! Nihil ut ducimus fuga similique asperiores, autem enim commodi architecto nobis reprehenderit distinctio, veniam modi ipsa perspiciatis expedita illo cupiditate? Doloribus ut rem ipsa autem perferendis. Blanditiis natus inventore nesciunt magni aliquid consectetur, id provident!</p>
            </div>
          </div>
          <div class="container content d-flex justify-content-between align-items-center">
              <div class="text">
                  <h1>Realisation d'une onepage</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis autem reiciendis inventore dolorum quidem a <br/> voluptatum! Sit nobis excepturi aut eius soluta, illum cumque eveniet ipsum maiores ut, quo mollitia. <br/> avec ReactJS</p>
              </div>
              <div class="img d-flex justify-content-end">
                  <img src={eolImg}/>
              </div>
          </div>
        </div>
      </div>
    
      <div id="third-bloc" class="third-bloc">
        <Nav/>
        <div class="container inf-inner mt-3 d-flex justify-content-center align-items-center flex-column">
            <div class="container content d-flex justify-content-center align-items-center">
                <h1 class="text-center">Presentation des composants utiliser</h1>
            </div>
            <div class="container content d-flex justify-content-between align-items-center">
              <Composant aosname="flip-left" image={reactImg} title="React JS" explain="React JS est un framework JavaScript"/>
              <Composant aosname="flip-up" image={bootstrapImg} title="Bootstrap" explain="Bootstrap est un framework CSS"/>
              <Composant aosname="flip-right" image={semanticImg} title="Semantic UI" explain="Semantic UI est un framework CSS"/>
            </div>
        </div>
      </div>
    
      <div id="fourth-bloc" class="fourth-bloc">
        <div class="auth">
            <div class="img-auth">
                <img src={meImg} alt=""/>
            </div>
            <div class="presentation">
                <h3>Armel</h3>
                <h1>Meledje</h1>
            </div>
        </div>

        <div class="ui celled horizontal list">
          <div class="item"><a href="#first-bloc">Acceuil</a></div>
          <div class="item"><a href="#second-bloc">Tache</a></div>
          <div class="item"><a href="#third-bloc">Composants</a></div>
        </div>

        <div class="remote">
          <div class="d-flex justify-content-center align-items-center">
            <a href="#first-bloc" style={{position: 'relative'}} title="Remonter" class="scroll-btn d-flex justify-content-center align-items-center">
              <i class="angle up icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
