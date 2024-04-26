const pageTitle = "ED UA";

const routes = {
  404: {
    template: "/src/pages/not-found.html",
    title: "404 | " + pageTitle,
    description: "Page not found",
  },
  "/teacher": {
    template: "/src/pages/teacher.html",
    title: "Teacher | " + pageTitle,
    description: "This is the home page",
  },
  "/specialist": {
    template: "/src/pages/specialist.html",
    title: "Specialist | " + pageTitle,
    description: "This is the about page",
  },
  "/student": {
    template: "/src/pages/student.html",
    title: "Student | " + pageTitle,
    description: "This is the contact page",
  },
};

const locationHandler = async () => {
  var location = window.location.pathname;

  if (location.length == 0) {
    location = "/";
  }

  const route = routes[location] || routes["404"];

  const html = await fetch(route.template).then((response) => response.text());

  document.getElementById("content").innerHTML = html;

  document.title = route.title;
};

window.addEventListener("hashchange", locationHandler);

locationHandler();
