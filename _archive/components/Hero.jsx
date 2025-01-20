import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/jesdin.jpg' className="profile-img" width={300} height={300} alt="Jesdin" />
            <div className="hero-text">
                <h1>Hey, I'm Jesdin 👋</h1>
                <p>
                    I'm a masters student in Computer Science at Rochester Institute of Technology, Rochester, USA with a focus in AI.
                </p>
                <div className="social-icons">
                    <a
                        href="https://github.com/jesdin"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jesdin-raphael"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;