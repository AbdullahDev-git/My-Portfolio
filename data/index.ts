import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on multiple projects",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Organize, Prioritize, and Achieve",
    des: "Manage your tasks effortlessly with this intuitive and interactive To-Do app. Organize, and prioritize",
    img: "/p1.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/js.jpg"],
    link: "Todolist",
  },
  {
    id: 2,
    title: "Plan, Train, and Transform",
    des: "Elevate your fitness journey with this comprehensive gym app. Plan your workouts, track your progress.",
    img: "/gym.png",
    iconLists: ["/tail.svg", "/js.jpg", "/re.svg"],
    link: "GymApp",
  },
  {
    id: 3,
    title: "Play, Compete, and Win",
    des: "Immerse yourself in the excitement of chance with this engaging dice game. Roll the dice, challenge your luck",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "DiceRoll",
  },
  {
    id: 4,
    title: "Strategy and Fun Unleashed",
    des: "Experience the timeless thrill of Tic-Tac-Toe with this engaging game. Challenge a friend, and claim victory",
    img: "/p4.svg",
    iconLists: ["/html.jpg", "/css.jpg", "/js.jpg"],
    link: "TicTacToe",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];
export const companies = [
  {
    id: 1,
    name: "React",
    img: "/reactl-removebg-preview.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "Vue",
    img: "/vuel-removebg-preview.png",
    nameImg: "",
  },
  {
    id: 3,
    name: "Next",
    img: "/nextl-removebg-preview.png",
    nameImg: "",
  },
  {
    id: 4,
    name: "Tailwind",
    img: "",
    nameImg: "/taill-removebg-preview.png",
  },
  {
    id: 5,
    name: "Type Script",
    img: "/typel-removebg-preview.png",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using Vue.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Bank Managment System",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Core Projects",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Framework Based Projects",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AbdullahDev-git",
  },
];
