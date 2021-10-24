import foodyImg from "../images/foody.png";
import movieaddImg from "../images/movieadda.png";
import chatappImg from "../images/chatapp.png";
import dashboardImg from "../images/dashboard.png";
import hiringpageImg from "../images/hiringpage.png";

export const projects = [
  {
    title: "Foody",
    description:
      "It's an online food ordering website built using MERN stack. In this website user can purchase food and can order online through credit card, debit card, paytm etc. While Seller can add their restaurant and add items and manage them. While there is admin of application who can view all restaurants and delete them.",
    image: foodyImg,
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://github.com/safinghoghabori/foody",
    visit: "https://foody-webapp.herokuapp.com/",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "It's movie database clone built using React, Redux, MovieDB Api. In this website user can view and explore different movies, PLOT, IMDB rating, Director, Actors and search specific movies.",
    image: movieaddImg,
    tags: ["React", "MovieDB API"],
    source: "https://github.com/safinghoghabori/movie-adda",
    visit: "https://movieadda.netlify.app/",
    id: 1,
  },
  {
    title: "Chat App",
    description:
      "It's real-time simple chating website built using Socket.io and Node.js. In this website user can chat with different people in real time, he/she can create new group or enter into different group. User can use language mindfully, it means can't use profane words due to all messages are filtered before display.",
    image: chatappImg,
    tags: ["React", "Socket.io"],
    source: "https://github.com/safinghoghabori/chat-app",
    visit: "https://safin-chat-app.herokuapp.com/",
    id: 2,
  },
  {
    title: "Dashboard-UI",
    description: "This is a simple dashboard UI. Inspired from Dribbble.",
    image: dashboardImg,
    tags: ["HTML", "CSS"],
    source: "https://github.com/safinghoghabori/dashboard-ui",
    visit: "https://github.com/safinghoghabori/dashboard-ui",
    id: 3,
  },
  {
    title: "Hiring-Page",
    description:
      "This is a simple hiring page of a random company. Got as a challenge.",
    image: hiringpageImg,
    tags: ["React", "HTML", "CSS"],
    source: "https://github.com/safinghoghabori/hiring-page",
    visit: "https://github.com/safinghoghabori/hiring-page",
    id: 4,
  },
];

export const TimeLineData = [
  {
    year: "2021 - Present",
    title: "Masters in Computer Application",
    college: "Nirma University",
    text: "Started my journey with master's degree.",
  },
  {
    year: "2018 - 2021",
    title: "Bachelors in Computer Application",
    college: "Shree Swaminarayan College Of Computer Science",
    text: "Compeleted bachelor's with distinction.",
  },
  {
    year: "2017 - 2018",
    title: "Class XII",
    college: "Shree R.K. Gharshala",
    text: "Compeleted 12th std. with first rank in school.",
  },
];

export const accomplishments = [
  { rank: "2nd", text: "Runners up in Project competetion held by GMIT." },
  { rank: "1st", text: "In bachelors degree in my university." },
];
