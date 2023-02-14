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
          <li data-target="#picture5" data-slide-to="4"></li>
          <li data-target="#picture6" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" id="picture1">
            <a href="https://amylipscomb.github.io/password-generator/"><img src="assets/images/passwordgenerator-2.jpg"
              className="d-block w-100" alt="computer" />  </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Password Generator</h5>
              <p>Do you ever get set sick of thinking of new passwords? Or do you find yourself using the same password for all of your accounts? If either scenario sounds like you, then hopefully you'll find this password-generator helpful! The link to my repo is "https://github.com/AmyLipscomb/password-generator".</p> */}
            </div>

          </div>
          <div className="carousel-item" id="picture2">
            <a href="https://anthony-furjanic.github.io/brewsandchews/"><img
             src="assets/images/brews&chews-2.jpg" className="d-block w-100" alt="beer" />
              {/* src="assets/images/Placeholder2.jpeg" className="d-block w-100" alt="flower" /> */}
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Brews & Chews</h5>
              <p>Brews & Chews is a website designed with both the extrovert and introvert in mind. Check out my repo at "https://github.com/Anthony-Furjanic/brewsandchews".</p> */}
            </div>
          </div>
          <div className="carousel-item" id="picture3">
            <a href="https://note-taker-amy.herokuapp.com/"><img src="assets/images/note-taker-2.jpg"
            // src="assets/images/Placeholder3.jpeg"
              className="d-block w-100" alt="flower" />
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Note-Taker</h5>
              <p>Note-Taker is an application available to you to take notes! You can reach my repo at "https://github.com/AmyLipscomb/note-taker"</p> */}
            </div>

          </div>
          <div className="carousel-item" id="picture4">
            <a href="https://github.com/AmyLipscomb/orm-e-commerce-back-end"><img
              src="assets/images/orm-1.jpg" className="d-block w-100" alt="flower" />
              {/* src="assets/images/Placeholder4.jpeg" */}
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Back End Coding with ORM</h5>
              <p> View my walkthrough video to see how I've used object-relational mapping (ORM) to build the
                back end for an e-commerce site!</p> */}
            </div>
          </div>
          <div className="carousel-item" id="picture5">
            <a href="https://hidden-harbor-78416.herokuapp.com/"><img
              src="assets/images/text-editor-2.jpg" className="d-block w-100" alt="text" />
              {/* src="assets/images/Placeholder5.jpeg" */}
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Text Editor</h5>
              <p> I created a text-editor utilizing WebPack via JavaScript, and Node and deployed via Heroku! View it here. Link to my repo is here: "https://github.com/AmyLipscomb/text-editor-pwa".</p> */}
            </div>
          </div>
          <div className="carousel-item" id="picture6">
            <a href="https://amylipscomb.github.io/code-quiz/"><img
              src="assets/images/codingquiz-1.jpg" className="d-block w-100" alt="quiz" />
               {/* src="assets/images/Placeholder6.jpeg" */}
            </a>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Coding Quiz</h5>
              <p> Have you ever wondered how much (or little) you know about coding? If you are a bit curious, then hopefully you'll find this coding quiz helpful! Here's a link to my repo: "https://github.com/AmyLipscomb/code-quiz"</p> */}
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