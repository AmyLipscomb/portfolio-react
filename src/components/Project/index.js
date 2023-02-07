const Project = () => {
  return (
    <section id="workSlide">
      <h2 id="Work">Work</h2>
      <div className="carousel slide" id="carousel-items" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#picture1" data-slide-to="0" className="active"></li>
          <li data-target="#picture2" data-slide-to="1"></li>
          <li data-target="#picture3" data-slide-to="2"></li>
          <li data-target="#picture4" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" id="picture1">
            <a href="https://floating-reef-00120.herokuapp.com/login"><img src="assets/images/Placeholder1.jpeg"
              className="d-block w-100" alt="flower" />  </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Grrrr'inder</h5>
              <p>Grrrrr'inder is a pawsitively new way of connecting your furry friends with friends of
                their own. Here, you can set up doggy play dates with the click of a few buttons! As an
                owner, you must first create an account. Once that's done, you can create your pet's
                profile, add more dogs if they want to get in on the action as well, and ultimately
                reach out to another owner to set up your dog's pup play date.</p>
            </div>

          </div>
          <div className="carousel-item" id="picture2">
            <a href="https://anthony-furjanic.github.io/brewsandchews/"><img
              src="assets/images/Placeholder2.jpeg" className="d-block w-100" alt="flower" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Brews & Chews</h5>
              <p>Brews & Chews is a website designed with both the extrovert and introvert in mind. </p>
            </div>
          </div>
          <div className="carousel-item" id="picture3">
            <a href="https://damp-escarpment-46573.herokuapp.com/"><img src="assets/images/Placeholder3.jpeg"
              className="d-block w-100" alt="flower" />
            </a>

            <div className="carousel-caption d-none d-md-block">
              <h5>Note-Taker</h5>
              <p>Note-Taker is an application available to you to take notes! </p>
            </div>

          </div>
          <div className="carousel-item" id="picture4">
            <a href="https://github.com/AmyLipscomb/orm-e-commerce-back-end"><img
              src="assets/images/Placeholder4.jpeg" className="d-block w-100" alt="flower" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Back End Coding with ORM</h5>
              <p> View my walkthrough video to see how I've used object-relational mapping (ORM) to build the
                back end for an e-commerce site!</p>
            </div>
          </div>
        </div>


        <a href="#carousel-items" role="button" data-slide="prev " className="carousel-control-prev">

          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a href="#carousel-items" role="button" data-slide="next" className="carousel-control-next">

          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </section>
  )
}


export default Project;