const Footer = () => {
  return (
    <section id="Contact-Me">
      <h3 id="Contact-Title">Contact Me</h3>

      <div>
        <p> Feel free to contact me! </p>
        <ul className="Contact-List">
          <li>Email: amy.a.lipscomb@gmail.com</li>


          <li>LinkedIn:
            <a href="https://www.linkedin.com/in/amy-lipscomb/">Amy's LinkedIn</a>
          </li>

        </ul>

        <form>
          <label for="name">Name </label>
          <input type="text" id="name"></input>
          <label for="email">Email</label>
          <input type="text" id="email"></input>
          <button>Submit!</button>
        </form>



      </div>

    </section>
  )
}

export default Footer;