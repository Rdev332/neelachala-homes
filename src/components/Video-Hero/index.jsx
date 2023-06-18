// video hero image
//
import Split from "../Split";
import { TypeAnimation } from 'react-type-animation';

const heroContent = {
    title: {
        first: "Welcome to the future of",
    },
    content: {
        first: "We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.",
        second: "We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.",
    },
    video: "/assets/video/hero-vid.mp4",
};

const secondTexts = [
    "Luxury",
    5000,
    "Design",
    5000,
    "Architecture",
    5000,
];

const VideoHero = () => {

    // scroll to section
    function scrollBottom() {
        // scroll to section with id as #contactForm 
        document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" }) 
    }

    return (
        <div
            className="bg-img valign"
            style={{
                position: "relative",
            }
            }
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                src={heroContent.video}
                style={{
                    position: "absolute",
                    zIndex: "-1",
                    filter: "brightness(0.4)",
                    height: "100vh",
                    width: "100vw",
                    objectFit: "cover",
                }}
            >
            </video>
            <div className="container"
                style={{
                    position: "relative",
                    zIndex: "1",
                    height: "100vh",
                    margin: "auto"
                }}
            >
                <div className="row align-items-center h-100">
                    <div className="col-lg-8 col-md-10">
                        <div className="caption hmone my-auto">
                            <h5 className="thin text-white playfont"
                            >{heroContent.title.first}</h5>
                            <TypeAnimation
                                sequence={secondTexts}
                                style={{
                                    height: '100%',
                                    fontSize: '4em',
                                    fontWeight: 'bold',
                                    fontFamily: 'Playfair Display',
                                    color: '#b93f3f',
                                    // backdropFilter: 'blur(10px)',
                                    // background: 'rgba(0,0,0,0.2)',
                                }}
                                repeat={Infinity}
                            />
                            <p className="mt-10 text-white">
                                {heroContent.content.first}
                            </p>
                            <a
                                onClick={scrollBottom}
                                className="btn-curve btn-bord btn-lit mt-30">
                                <span>Enquire Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VideoHero;