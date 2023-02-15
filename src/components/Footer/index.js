const Footer = () => {
  return (
    <section id="Contact-Me">
      <h3 id="Contact-Title">Contact Me</h3>

      <div>
        <p> Feel free to contact me! </p>
        <ul className="Contact-List">
          <li>
            <a href="mailto:amy.a.lipscomb@gmail.com">Email Me! (amy.a.lipscomb@gmail.com)</a>
          </li>
          <li>
            <a href="https://github.com/AmyLipscomb?tab=repositories">Amy's Github</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/amy-lipscomb/">Amy's LinkedIn</a>
          </li>

        </ul>

        <form>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <button>Submit!</button>
        </form>



      </div>

    </section>
  )
}

export default Footer;