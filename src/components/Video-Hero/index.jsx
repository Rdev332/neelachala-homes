// video hero image
//
import Split from "../Split";
import Link from "next/link";

const heroContent = {
    title: {
        first: "Welcome to",
        second: "The Future of",
    },
    content: {
        first: "We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.",
        second: "We are a creative studio focusing on culture, luxury, editorial & art. Somewhere between sophistication and simplicity.",
    },
    video: "/assets/video/hero-vid.mp4",
};

const VideoHero = () => {
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
                            <h5 className="thin text-white"
                            >{heroContent.title.first}</h5>
                            <Split>
                                <h1
                                    data-splitting
                                    className="words chars splitting text-white"
                                >
                                    {heroContent.title.second}
                                </h1>
                            </Split>
                            <p className="mt-10 text-white">
                                {heroContent.content.first}
                            </p>
                            <Link href="/about">
                                <a className="btn-curve btn-bord btn-lit mt-30">
                                    <span>Enquire Now</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VideoHero;