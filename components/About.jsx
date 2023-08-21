import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat ratione quasi sed beatae molestiae ab ad ut quisquam, impedit quaerat explicabo nostrum deleniti culpa quo dicta odit maiores eius.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat asperiores deserunt iste odio et provident odit, sapiente magni expedita eaque dolores unde nobis, similique consequuntur aliquid dolorum quae esse!</p>
        </div>
        {/* <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div> */}
      </div>
    </div>
  )
}

export default About;