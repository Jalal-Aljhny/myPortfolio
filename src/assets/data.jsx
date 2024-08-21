/* eslint-disable react/jsx-key */
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGraduationCap,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

import Theme1 from "./icons/purple.png";
import Theme2 from "./icons/red.png";
import Theme3 from "./icons/blueviolet.png";
import Theme4 from "./icons/blue.png";
import Theme5 from "./icons/goldenrod.png";
import Theme6 from "./icons/magenta.png";
import Theme7 from "./icons/yellowgreen.png";
import Theme8 from "./icons/orange.png";
import Theme9 from "./icons/green.png";
import Theme10 from "./icons/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jalal",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Aljhny",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Syrian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Syria ,Lattakia",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+963 88978458",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jalalaljhny@gmail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "Arabic, English",
  },

  // {
  //   id: 9,
  //   title: "Skype : ",
  //   description: "steve.milner",
  // },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "Previous Education",
    desc: "<li><span>Certificate : </span> <span>High School </span> </li>  <li><span>School : </span> <span>Ekhaa </span> </li> <li><span>Average : </span> <span>94.16 % </span> </li>  ",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - Present",
    title: "Currently Education",
    desc: "<li><span>Study Start Date :</span> <span>2019</span></li> <li><span>The year I'm studying : </span> <span> Fourth Year </span> </li>  <li><span>College : </span> <span>Informatics Technology </span> </li> <li><span>Specialization : </span> <span> Software engineering </span> </li>  ",
  },
];

export const skills = [
  {
    id: 1,
    title: "Javascript",
    percentage: "95",
  },

  {
    id: 2,
    title: "React",
    percentage: "95",
  },

  {
    id: 3,
    title: "Html",
    percentage: "95",
  },

  {
    id: 4,
    title: "Css",
    percentage: "90",
  },
  {
    id: 5,
    title: "Typescript",
    percentage: "80",
  },
  {
    id: 6,
    title: "Sass",
    percentage: "80",
  },
  {
    id: 7,
    title: "Tailwind css",
    percentage: "85",
  },
  {
    id: 8,
    title: "Bootstrap",
    percentage: "80",
  },
];
export const Technologies = [
  {
    id: 1,
    title: "React Router dom",
  },
  {
    id: 2,
    title: "React Hook form",
  },
  {
    id: 3,
    title: "React quill",
  },
  {
    id: 4,
    title: "firebase",
  },
  {
    id: 5,
    title: "git & github",
  },
  {
    id: 6,
    title: "dealing with linux",
  },
  {
    id: 7,
    title: "axios",
  },
  {
    id: 8,
    title: "chart.js & react-chartjs",
  },
  {
    id: 9,
    title: "json-server",
  },
  {
    id: 10,
    title: "postman",
  },
  {
    id: 11,
    title: "React Circular Progressbar",
  },
  {
    id: 12,
    title: "Html React Parser",
  },
];

export const portfolio = [
  {
    id: 0,
    title: "Frontend department of blog",
    details: {
      technologies: [
        "context api",
        "react hooks",
        "react-cookies",
        "react-router-dom",
        "react-quill",
        "react-hook-form",
      ],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://github.com/Jalal-Aljhny/AJY-blog",
      viewCode: "https://github.com/Jalal-Aljhny/AJY-blog",
      userStory: `
  <li>Authentication and Autherization with JWT(json web token) .</li>
 <li>Strong validation before send request to API in all form using react-hook-form .</li>
 <li>Protected routes  depending on (Roles , Registeration) using react-router-dom .</li>
  <li>Using Intersection Observer to load next pagination data when scroll.</li>
  <li> Unregistered users can read first 50 word of post only .</li>
  
   <li> role1 : user ,no permissions .</li>
   <li> role2: Admin ,permissions: (Add Post , Edit Post , Delete Post ) .</li>
   <li> role3 : Super Admin ,permissions: (Add Post , Edit Post , Delete Post ,Edit Users , Delete Users ) .</li>
  <li>Save needed previos routes in session so :(when register from post page return to same post page ,when delete or update from home route or posts route return to same route. )</li>
      `,
    },
  },
  {
    id: 1,
    title: "Translate app",
    details: {
      technologies: ["react js", "context api", "react hooks"],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://jalal-aljhny.github.io/translate-app/",
      viewCode: "https://github.com/Jalal-Aljhny/translate-app",
      userStory: `
     <li> Create a translate application page that matches the given design.</li>
      <li>By default, it should translate 'Hello, how are you' to French.</li>
      <li>Users can change translating text with a maximum of 500 characters.</li>
      <li>Users can see the translated text after selecting the Translate button.</li>
      <li>Users can choose different languages to translate from. They should see at least 3 options: Detect Language, English and French.</li>
      <li>Users can switch translation language and translated language.</li>
      <li>Users can have the option to listen to the translating and translated texts.</li>
      <li>Users can copy the translating and translated texts.</li>
      `,
    },
  },
  {
    id: 2,
    title: "Blog",
    details: {
      technologies: [
        "react js",
        "context api",
        "react hooks",
        "firebase",
        "react-quill",
        "react-bootstrap",
        "react-hook-form",
        "react-router-dom",
      ],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <FaReact className="react" />,
        <SiFirebase className="firebase" />,
      ],
      viewProject: "https://jalal-aljhny.github.io/blog-project/",
      viewCode: "https://github.com/Jalal-Aljhny/blog-project",
      features: `
      <li> Not registerd user can see all post and cannot add posts.</li>
      <li> Registered users can add posts.</li>
      <li>In all post section when scroll more posts will apear.</li>
      <li>Using router-guards to prevent access to selected routers and force it to another.</li>
      <li>Save data in firebase and use firebase Authentication & Authorization.</li>
      <li>Strong validation form using react-hook-form.</li>
      `,
    },
  },
  {
    id: 3,
    title: "Budget app",
    details: {
      technologies: [
        "react js",
        "context api",
        "react hooks",
        "axios",
        "chart-js",
        "json-server",
      ],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://jalal-aljhny.github.io/Budget-app/",
      viewCode: "https://github.com/Jalal-Aljhny/Budget-app",
      features: `
     <li> You can add budget , delete budget and update budget</li>
     <li> You can see chart of expanse and income.</li>
      <li>You can switch between see all transactions and expanse or income.</li>
      <li>You can sort it by date , amount,</li>
      <li>You can see filterd data by select categories</li>
      <li>You will not see the result of (post,put,delete) methods on api because i use github repo as api</li>
      `,
    },
  },
  {
    id: 4,
    title: "Image search app using unsplash api",
    details: {
      technologies: ["react js", "context api", "react hooks"],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://jalal-aljhny.github.io/Image-Search-App/",
      viewCode: "https://github.com/Jalal-Aljhny/Image-Search-App",
      features: `
      <li>You can search about photos.</li>
      <li>you can see more and more result.</li>
      `,
    },
  },
  {
    id: 5,
    title: "Rest Countries API",
    details: {
      technologies: ["typescript", "fetch api", "tailwind css", "html", "css"],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <SiTypescript className="typescript" />,
        <SiTailwindcss className="tailwind" />,
        <SiHtml5 className="html" />,
        <SiCss3 className="css" />,
      ],
      viewProject: "https://jalal-aljhny.github.io/Rest-Countries-API/",
      viewCode: "https://github.com/Jalal-Aljhny/Rest-Countries-API",
      features: `
      <li>See all countries from the API on the homepage</li>
      <li>Search for a country using an input field</li>
      <li>Filter countries by region</li>
      <li>Click on a country to see more detailed information on a separate page</li>
      <li>Click through to the border countries on the detail page</li>
      <li>Toggle the color scheme between light and dark mode</li>
      `,
    },
  },
  {
    id: 6,
    title: "Frontend-Mentor Todo app",
    details: {
      technologies: ["javascript", "html", "css"],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <SiJavascript className="js" />,
        <SiHtml5 className="html" />,
        <SiCss3 className="css" />,
      ],
      viewProject: "https://jalal-aljhny.github.io/Frontend-Mentor-Todo-app/",
      viewCode: "https://github.com/Jalal-Aljhny/Frontend-Mentor-Todo-app",
      features: `
      <li>You can create and delete todo.</li>
      <li>fitler between completed ,active and all todos.</li>
      <li>switch between dark mode and light mode.</li>
      `,
    },
  },
  {
    id: 7,
    title: "Frontend-Mentor IP Address Tracker",
    details: {
      technologies: ["javascript", "html", "scss"],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <SiJavascript className="js" />,
        <SiHtml5 className="html" />,
        <FaSass className="sass" />,
      ],
      viewProject:
        "https://jalal-aljhny.github.io/Frontend-Mentor-IP-Address-Tracker/",
      viewCode:
        "https://github.com/Jalal-Aljhny/Frontend-Mentor-IP-Address-Tracker",
      features: `
    <li>  View the optimal layout for each page depending on their device's screen size</li>
    <li>See hover states for all interactive elements on the page</li>
    <li>See their own IP address on the map on the initial page load</li>
    <li>Search for any IP addresses or domains and see the key information and location</li>
      `,
    },
  },
  {
    id: 8,
    title: "Frontend-Mentor-Shortly-URL-shortening-API",
    details: {
      technologies: ["javascript", "html", "css"],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <SiJavascript className="js" />,
        <SiHtml5 className="html" />,
        <SiCss3 className="css" />,
      ],
      viewProject:
        "https://jalal-aljhny.github.io/Frontend-Mentor-Shortly-URL-shortening-API/",
      viewCode:
        "https://github.com/Jalal-Aljhny/Frontend-Mentor-Shortly-URL-shortening-API",
      features: `
     <li> View the optimal layout for the site depending on their device's screen size</li>
     <li> Shorten any valid URL</li>
     <li> See a list of their shortened links, even after refreshing the browser</li>
     <li> Copy the shortened link to their clipboard in a single click</li>
     <li> Receive an error message when the form is submitted if: the input field is empty</li>
      `,
    },
  },
  {
    id: 9,
    title: "Kasper template",
    details: {
      technologies: ["javascript", "html", "css"],
      // eslint-disable-next-line react/jsx-key
      icons: [
        <SiJavascript className="js" />,
        <SiHtml5 className="html" />,
        <SiCss3 className="css" />,
      ],
      viewProject: "https://jalal-aljhny.github.io/Kasper-Template/",
      viewCode: "https://github.com/Jalal-Aljhny/Kasper-Template",
      features: `
      <li>animation without any library</li>
      <li>responsive with all screens</li>
      <li>image slider</li>
      <li>search field</li>
      <li>animation when scroll</li>
      <li>preload animation</li>
      <li>`,
    },
  },
  {
    id: 10,
    title: "Todolist",
    details: {
      technologies: ["react js", "react hooks"],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://jalal-aljhny.github.io/TodoList-react/",
      viewCode: "https://github.com/Jalal-Aljhny/TodoList-react",
      features: `
      <li>You can create,delete and update todo.</li>
      <li>fitler completed and not completed todos.</li>
      `,
    },
  },
  {
    id: 11,
    title: "Simple coffe listing",
    details: {
      technologies: ["react js", "context api", "react hooks"],
      // eslint-disable-next-line react/jsx-key
      icons: [<FaReact className="react" />],
      viewProject: "https://jalal-aljhny.github.io/simple-coffee-listing/",
      viewCode: "https://github.com/Jalal-Aljhny/simple-coffee-listing",
      userStory: `
      <li>Create a coffee listing page that matches the given design.</li>
      <li>Use React or other Front-end libraries for this challenge.</li>
      <li>Create a Reusable Card component.</li>
      <li>The card component should include a picture, name, pricing, rating, and number of votes if exists.</li>
      <li>The card component should render popular tag, availability status conditionally.</li>
      <li>Render Coffee list with given data. The data should come from a given API or downloaded JSON file. </li>
      <li>Users can choose to list all products or just available products.</li>
      `,
    },
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
