import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation'; //not sure where to put the navigation in the code
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">

        <div className="container text-center mainSlide">
          <div className="row align-items-start">
            <div className="col">
              <p className="verticalName">AMY</p>
            </div>
          </div>
        </div>
      </div>

      <section id="aboutSlide">
        <h1 id="About-Me">About Me</h1>
        <div className="card mb-3 mt-5 border-0" style={{ backgroundColor: "#f2e2d2" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./assets/images/picofme.jpg" className="img-fluid rounded-start" alt="profile picture" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Hi, I'm Amy</h5>
                <p className="card-text">I’m a Philly native, and as a result, a major foodie. I don’t mean to be
                  cliché, but I do enjoy a good hoagie and cheesesteak every once in a while. I wouldn’t say
                  I’m too picky, however, when it comes to cheesesteaks, so far my favorite is from
                  Dalessandro's Steaks! If you’re a food lover like me, I would recommend running, not walking
                  to try them. I’m also an animal lover, and have had four amazing cats in my lifetime so far.
                  I prefer tea to coffee, and a night in, just as much as a night out. You’re probably
                  wondering, what led me to web development. I’ve always had an interest in coding, and was
                  exposed to it a little bit in college. However, it wasn’t until I interned at a company,
                  that I truly discovered I had an appetite for it! As a web developer, I’m not only able to
                  be part of a field, that is an integral part of society, but I also have found a creative
                  outlet that’s suitable for me. I mean, I literally created and designed this website, my
                  website, and that’s pretty cool!

                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Project />
      <Footer />


    </div>
  );
}

export default App;
