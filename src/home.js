import './css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

    return (    
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#home">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">
          Services
        </a>
        
      </li>
    </ul>
  </div>
</nav>

<body className="portfolio-body">
        <div className="main-banner" id="home" >
			<div className='intro-text'>
                <h1>Hello i'm XYZ</h1>
                <p>"I am Front-end web Developer"</p>
            </div>
		</div>

        <div id="about" className="about-section">
        <div className="container">
                    <div className="message-box">                        
                        <h2>About Me.</h2>
                        <p> My background is in .......... </p>
						<p>An “About Me,” also known as a blurb, is a short piece of writing that informs readers about your professional background, key accomplishments, personal values and any brands you may be associated with. Personal websites, social media profiles and company directories often feature “About Me” sections</p>

                        <button className='btn download-btn' ><i>Download CV</i></button>
                    </div>
            </div>
        </div>
        <div className="container">
        <h1>Services</h1>
        <div className="row">
          <div className="service">
            <i className="fas fa-laptop-code"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-chart-line"></i>
            <h2>Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fab fa-sketch"></i>
            <h2>Graphics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-database"></i>
            <h2>Data Analysis</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-mobile-alt"></i>
            <h2>App Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-file-invoice"></i>
            <h2>Accounting</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i className="fas fa-money-check-alt"></i>
            <h2>Payroll</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
          <div className="service">
            <i class="fas fa-network-wired"></i>
            <h2>Networking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              quae?
            </p>
          </div>
        </div>
      </div>
</body>

<footer className="footer-distributed mt-4">
			<div class="footer-right">
				<a href="#"><FontAwesomeIcon icon={faFacebook} /> </a>
				<a href="#"><FontAwesomeIcon icon={faLinkedin} /> </a>
				<a href="#"><FontAwesomeIcon icon={faTwitter} /> </a>
				<a href="#"><FontAwesomeIcon icon={faGithub} /> </a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Contact</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

                    </p>

				<p>XYZ &copy; 2022</p>
			</div>

		</footer>
</div>
     );
}
 
export default Home;