// video hero image
//
import { TypeAnimation } from 'react-type-animation';
import { useRef, useEffect } from 'react';

const VideoHero = ({ header_text, header_video, header }) => {

    const { header_title, header_content, typing_text } = header

    // scroll to section
    function scrollBottom() {
        // scroll to section with id as #contactForm 
        document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" })
    }

    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div
            className="bg-img valign"
            style={{
                position: "relative",
            }
            }
        >
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                src={header_video.data.attributes.url}
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
                            >{header_title}</h5>
                            <TypeAnimation
                                sequence={[
                                    typing_text.content[0],
                                    5000,
                                    typing_text.content[1],
                                    5000,
                                    typing_text.content[2],
                                    5000
                                ]}
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
                                {header_content}
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