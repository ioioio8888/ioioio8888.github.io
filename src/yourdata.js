// Skills Icons
// import htmlIcon from "./images/html.svg"
// import cssIcon from "./images/css.svg"
// import reactIcon from "./images/react.svg"
// import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"
import { DiUnitySmall } from "@react-icons/all-files/di/DiUnitySmall";
import { DiMeteorfull } from "@react-icons/all-files/di/DiMeteorfull";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { DiReact } from "@react-icons/all-files/di/DiReact";
import { SiCsharp } from "@react-icons/all-files/si/SiCsharp";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { DiPhotoshop } from "@react-icons/all-files/di/DiPhotoshop";
import { DiWordpress } from "@react-icons/all-files/di/DiWordpress";

import { DiNodejs } from "@react-icons/all-files/di/DiNodejs";


// Social Icon
// import githubIcon from "./images/github.svg"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import twoboxesthx from "./images/2boxesthx.png"
import howlongistheline from "./images/howlongistheline.png"
import ninja from "./images/ninja.jpg"
import narau from "./images/narau.jpg"
import assassin from "./images/assassin.jpg"
import BomBomBaRocketGo from "./images/bombomba.jpg"

// import CSharp from "./images/CSharp.png" 
// import javascript from "./images/javascript.png"
// import mongodb from "./images/mongodb.png"
// import meteor from "./images/meteor.png"
// import react from "./images/react.png"
// import unity from "./images/unity.jpg"
// import html from "./images/html.png"
// import css from "./images/css.png"

import aboutme from "./images/aboutme_3.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Louis Lui",
  headerTagline: [
    //Line 1 For Header
    "Louis Lui",
    //Line 2 For Header
    "Full Stack Developer,",
    //Line 3 For Header
    "Indie Game Developer",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "louisluigood@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "2boxesthx", //Project Title - Add Your Project Title Here
      para:
        "2boxesthx is a website which allow peoples to trade/exchange materials like masks during the covid-19 situation. Build with react and openstreetmap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: twoboxesthx,
            //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "howlongistheline", //Project Title - Add Your Project Title Here
      para:
      "An open-source website aims to help people know and update the line status of the shops during the COVID quarantine, Build with meteor-react, in C4 protocol, Thousands of active users",
      //Project Image - Add Your Project Image Here
      imageSrc: howlongistheline,
       //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "BomBomBaRocketGo!", //Project Title - Add Your Project Title Here
      para:
        "A mobile game made with Unity engine which has been upload to the Google play store. A Unlimited Scroll Game",      //Project Image - Add Your Project Image Here
      imageSrc: BomBomBaRocketGo,
        //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Untitled ninja game", //Project Title - Add Your Project Title Here
      para:
        "Single player game made with Unity engine, which user can cooperate with the player themselves in the past.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      ninja,
        //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Untitled assassin game", //Project Title - Add Your Project Title Here
      para:
        "A multi-player game made with Unity engine, user has to hide in the crowd and eliminate other suspicious player and complete tasks. Uses NAT punch through, mirror networking",      //Project Image - Add Your Project Image Here
      imageSrc:
      assassin,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Narau - MMORPG gimmick simulator", //Project Title - Add Your Project Title Here
      para:
        "A multi-player tools, which allows user to draw gimmicks on the map and replay it according to the timeline.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      narau,
      //Project URL - Add Your Project Url Here
      url: "",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Graduated from CUHK with the Major in Information Engineering. Worked at IBM China/Hong Kong Limited as a IT specialist and participated in various kind of projects. Currently served as a Full-stack Engineer at Next Chymia Consulting HK Limited.",
  aboutParaTwo:
    "I made some personal projects during covid-19 quarantine. It is happy to make meaningful contributions to the society. For example, 2boxesthx is a website which allow peoples to trade/exchange materials like masks. Howlongistheline.org is another webpage which helps people to determine the length of the line in different shop during the shutdown.",
  aboutParaThree:
    "I am passionate about blockchain and gaming industry. It is quite fun to see these industries grows bigger and bigger. To the MOON. LUL",
  aboutImage:
    // "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    aboutme,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: DiJavascript1,
      description: "javascript"
    },
    {
      id: 2,
      img: SiCsharp,
      description: "C#"
    },
    {
      id: 3,
      img: DiMeteorfull,
      description: "Meteor"
    },
    {
      id: 4,
      img: DiReact,
      description: "React"
    },
    {
      id: 5,
      img: DiUnitySmall,
      description: "Unity"
    },
    {
      id: 6,
      img: DiMongodb,
      description: "Mongodb"
    },
    {
      id: 7,
      img: DiHtml5,
      description: "html5"
    },
    {
      id: 8,
      img: DiCss3,
      description: "Css"
    },
    {
      id: 9,
      img: DiPhotoshop,
      description: "Photoshop"
    },
    {
      id: 10,
      img: DiWordpress,
      description: "WordPress"
    },
    {
      id: 11,
      img: DiNodejs,
      description: "NodeJs"
    }
  ],

  // End Skills Section --------------------------
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Feel Free to contact me by email or Linkedin!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: GitHubIcon, url: "https://github.com/ioioio8888" },
    {
      img: LinkedInIcon,
      url: "https://www.linkedin.com/in/louis-lui-7b7a2a146/",
    }
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
