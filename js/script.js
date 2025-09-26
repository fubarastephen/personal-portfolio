const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");

const project_innercont = document.querySelector("#projects_inner-cont");
const service_cont = document.querySelector(".services-cont");
const experiences_cont = document.querySelector(".experiences");
const nav_links = document.querySelectorAll(".nav-links");
const feedback_cont = document.querySelector(".feedback-cont");
const questions_cont = document.querySelector("#questions-cont");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});



const projects = [
  {
    img: "Assets/bg-images/work-1.jpg",
    for: "Marketing",
    description: "management of sales and other transactions",
    bigger: true,
  },
  {
    img: "Assets/bg-images/work-2.jpg",
    for: "banking",
    description: "management of banking services and others",
    bigger: false,
  },
  {
    img: "Assets/bg-images/project-3.jpg",
    for: "religious",
    description: "management of online church services",
    bigger: false,
  },
  {
    img: "Assets/bg-images/project-4.jpg",
    for: "Gaming",
    description: "standard free gaming website and others",
    bigger: false,
  },
  {
    img: "Assets/bg-images/project-1.jpg",
    for: "Learning",
    description: "teaching and other academic activities",
    bigger: false,
  },
  {
    img: "Assets/bg-images/work-3.jpg",
    for: "investment",
    description: "management of investment and other transactions",
    bigger: true,
  },
];

// clear existing projects
// project_innercont.innerHTML = "";
const otherProjects = document.createElement("div");
otherProjects.classList.add("other-projects");

projects.forEach((project) => {
  const div = document.createElement("div");
  if (project.bigger) {
    div.classList.add("project");
  } else {
    div.classList.add("mini", "project");
  }

  div.innerHTML = `<div class="img-cont">
    <img src="${project.img}">
    </div>

  <div class="description">
  <p>
  <span class="bold>
    For:
  </span>
  ${project.for}
  <span class="bold">Description:</span>
  ${project.description}
  </p>

  </div>

  `;
  if (project.bigger) {
    project_innercont.appendChild(div);
  } else {
    otherProjects.appendChild(div);
  }
});

project_innercont.appendChild(otherProjects);

const services = [
  {
    icon: "Assets/icons/daimond.JPG",
    title: "ui/ux design",
    description:
      " Successful online projects starts with good design It establishes a solid foundation for future development and allows for a long term growth",
  },
  {
    icon: "Assets/icons/line.JPG",
    title: "DEVELOPMENT",
    description:
      "I can code my own design or even use the customers design as base. My foucs is to generate clean code that well structured for reliaility ",
  },
  {
    icon: "Assets/icons/laptop.JPG",
    title: "BASIC SEO ",
    description:
      "I can setup your project and use basic SEO principles which will push your project to the first page on search engines and save you ads money",
  },
];

const experiences = [
  {
    date: "2022 - PRESENT",
    post: " Freelance Web Developer",
    description: "Working happily on projects by myself",
  },
  {
    date: "2022 - 2023",
    post: " Lead Web Developer",
    description: "Lead a team of building a remote appilcation",
  },
  {
    date: "2022 - 2024",
    post: " Frontend Web Developer",
    description: "Working happily on projects by myself",
  },
  {
    date: "2024- 2025",
    post: " Senior Web Developer",
    description: "Working happily on projects by myself",
  },
];

services.forEach((service) => {
  const div = document.createElement("div");
  div.classList.add("service");

  div.innerHTML = `
    <img class="icon" alt="icon" src="${service.icon}">
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  service_cont.appendChild(div);
});

experiences.forEach((experience) => {
  const div = document.createElement("div");
  div.classList.add("experience");

  div.innerHTML = `
  <H5 class="date">${experience.date}</H5>
  <span class="post">${experience.post}</span>
  <p>${experience.description}</p>
  `;

  experiences_cont.appendChild(div);
});

const testimonies = [
  {
    text: "Stephen is a skilled developer which will do everything possible to deliver the project on time",
    img: "Assets/bg-images/testimonial-1.jpg",
    client: "Samantha Bloom",
    post: "Team Leader",
    company: "Syncnow",
  },
  {
    text: "Very hardworking developer ",
    img: "Assets/bg-images/testimonial-2.jpg",
    client: "Stephen Jones",
    post: "Team Adviser",
    company: "Syncnow",
  },
  {
    text: "Helping you get a very dynamic website",
    img: "Assets/bg-images/testimonial-3.jpg",
    client: "Pearl Green",
    post: "Team Assistant",
    company: "Syncnow",
  },
];

const faqs = [
  {
    question:
      "How can i contact you and quiclky get a note for my online project?",
    answer:
      "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
  },
  {
    question: "At what cost can i get a simple and standard website?",
    answer: "A website containing at most 3-4pages can be build with 50K only ",
  },

  {
    question: "How fast can you deliver a standard company website",
    answer:
      "A standard company website can bve built within a space of one week",
  },
];

testimonies.forEach((item) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("feedback-box");

  newDiv.innerHTML = `
  <q class="text">${item.text}</q>

  <div class="poster-cont">
    <div class="img-cont">
      <img src="${item.img}" alt=${item.client}>
    </div>

    <div class="poster">
    <h4>${item.client}</h4>
    <span>${item.post} - ${item.company}</span>
    </div>
  </div>


  
  `;

  feedback_cont.appendChild(newDiv);
});

faqs.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `
  <div class="head">
    <img class="fq_btn" src="/Assets/icons/down (1).PNG"alt="chrevon icon"/>

      <h4>${item.question}</h4>
  </div>

  <div class="answer">
   <span>
     ${item.answer}
      </span>
  </div>
  `;

  questions_cont.appendChild(div);
});
const question_box = document.querySelectorAll(".question");

// frequently-ask-questions

question_box.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    if (answer) {
      answer.classList.toggle("active");
    }
  });
});
