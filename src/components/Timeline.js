import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react"
// import data from "../yourdata"
import Fade from "react-reveal/Fade"
import WorkIcon from "@material-ui/icons/Work";

const Timeline = () => {
    return (
        <div className="section" id="timeline">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Experience</h1>
                    </Fade>
                    <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="May 2025 - Present"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Game Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cruelman Studio</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Phantom Blade Zero (AAA): Developing an action RPG for PS5/PC using Unreal Engine 5.
                        </p>
                        <p>
                        Unpublished AAA Project: Contributing to core mechanics and systems design for a large-scale title.
                        </p>
                        <p>
                        Implementing enemy AI and combat-related systems in Unreal Engine.
                        </p>
                        <p>
                        Building UI frameworks using Common UI.
                        </p>
                        <p>
                        Optimizing performance for cross-platform delivery (PC and PS5).
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="April 2023 - May 2025"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Unity Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Air Concepts</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Interactive Brand Experiences: Built interactive installations for brands like Lancome and Shiseido using Motion Capture, RFID, LiDAR, and projection mapping.
                        </p>
                        <p>
                        Educational AI Platforms: Developed R'Odyssey AI with speech recognition/synthesis and a virtual museum sandbox for art generation.
                        </p>
                        <p>
                        Innovative Tech: Built a VTuber news reporting system using Pose Estimation and Hand Tracking.
                        </p>
                        <p>
                        Ganarova: Designed an AI-integrated indoor playground with 4D projection battle zones (LiDAR) and multi-tablet multiplayer connectivity (WebSockets).
                        </p>
                        <p>
                        FWEN Metaverse: Spearheaded launch of a cross-platform (iOS/Android) multiplayer metaverse using Mirror networking.
                        </p>
                    </VerticalTimelineElement> 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="Feb 2022 - March 2023"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Unity Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">PolkaFantasy</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Led a small, multinational team in designing and developing blockchain-based web games.
                        </p>
                        <p>
                        Integrated Moralis SDK for wallet connection and NFT implementation (WebGL).
                        </p>
                        <p>
                        Collaborated with Japanese animation studios to implement high-fidelity character animations.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="April 2021 - Feb 2022"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Game Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Asia Motion E-sports Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Developed a suite of in-house VR sports titles (Kayak, Basketball, Football, etc.) using OpenXR.
                        </p>
                        <p>
                        Engineered a virtual cycling racing game for the Hong Kong Tourism Board, focusing on networking and real-time interaction.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="May 2019 - Dec 2020"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">NextChymia Consulting HK Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Maintained UNIX server infrastructure and developed in-house/open-source software using React.js, Meteor, and MongoDB.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="Jan 2019 - May 2019"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Emurgo HK Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Managed enterprise-scale UNIX systems and contributed to the development of Cardano monitoring infrastructure.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "#1f1f1f", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
                        date="July 2017 - Jan 2019"
                        iconStyle={{ background: "#1f1f1f", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">IT Specialist</h3>
                        <h4 className="vertical-timeline-element-subtitle">IBM China/Hong Kong Limited</h4>
                        <h5 className="vertical-timeline-element-subtitle">Hong Kong</h5>
                        <p>
                        Implemented enterprise-scale infrastructure designs and managed complex UNIX environments (AIX, RHEL).
                        </p>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
  }

export default Timeline;
