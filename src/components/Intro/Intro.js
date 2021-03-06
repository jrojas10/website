import "./Intro.scss";
import Me from "../../assets/images/me.jpg";
import FadeIn from "../vfx/FadeIn";



function Intro() {

    return (

        <FadeIn>
            <div className="i" id="Home">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello my name is</h2>
                        <h1 className="i-name">Juan Rojas</h1>
                        <p className="i-description">
                            I have been working with computers almost my whole life. My goal is to gain experience in a
                            computer science related field and be able to learn under others. I hope to use this
                            experience gained to further improve my skills and help others in need. I have worked in a
                            team environment as a team leader so I know the importance of communication with others. I
                            am always open to feedback on my current performance.
                        </p>
                    </div>
                </div>

                <div className="i-right">
                    <div className="i-bg">
                        <img src={Me} className="i-img" alt="j" />
                    </div>
                </div>


            </div>
        </FadeIn>

    )
}


export default Intro;