const Bio = () => {
return (
    <section id="aboutSlide">
    <h1 id="About-Me">About Me</h1>
    <div className="card mb-3 mt-5 border-0" style={{ backgroundColor: "#0D1317" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="./assets/images/picofme.jpg" className="img-fluid rounded-start" alt="profile picture" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Hello!</h5>
            <p className="card-text"> My name is Amy Lipscomb. I’m a full-stack web developer based in Philadelphia. I love to code and enjoy working on both the front and back-end. I’ve always been interested in design, and through coding, I’ve been able to lean into my passion, while solving complex problems. When I’m not coding, I like to write, go to spin classes, wine and dine at Philly restaurants or play with my two adorable cats!
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
)
}


export default Bio;