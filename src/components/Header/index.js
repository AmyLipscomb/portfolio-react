import { useEffect, useState } from "react";
const Header = () => {
    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY >= 392) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", setFixed)
        return () => {
            window.removeEventListener("scroll", setFixed)
        }
    }, [])

    return (
        <header className={fix ? "fixed" : undefined}>

            <nav>

                <ul className="padding-0, dropdown">
                    <li>
                        <a href="#aboutSlide">About Me</a>
                    </li>
                    <li>
                        <a href="#workSlide">Work</a>
                    </li>
                    <li>
                        <a href="#Contact-Me">Contact Me</a>
                    </li>
                    {/* <li>
                        <a href="https://github.com/AmyLipscomb?tab=repositories">Github</a>
                    </li> */}
                    <li>
                        <a href="assets/images/portfolio_resume.pdf" target="_blank">Resume</a>
                        {/* Replace with actual resume (will need to save resume in public folder) */}
                    </li>
                </ul>
            </nav>

        </header>

    )
}

export default Header;