$( document ).ready(function() {

  // Initially set to Bio
  createBio = () => {

    // Output div
    const $div = $("<div>", {id: "bioDiv"});

    // Say hello
    const $intro = $("<p>");
    $intro.text("Hello, my name is Wai Yan.");

    // Tell them about yourself
    const $beginning = $("<p>");
    $beginning.text("I'm a music major turned full stack developer. Knowledge of sorting and searching algorithms. CS Fundamentals. Self-taught, quick learner. Committed to creating efficient, clean and functional code.")

    // Apply sections into output div
    $div.append($intro);
    $div.append($beginning);

    // Empty and display output div
    $("#info").empty();
    $("#info").append($div);
  }

  createSkills = () => {

    // Output div
    const $div = $("<div>", {id: "skillsDiv"})

    // Text for Back End Languages
    const $backLang = $("<p>", {id: "backend"})
    $backLang.text("Known languages: Node.js, Python, Ruby, C, MySQL");

    // Text for Front End Languages
    const $frontLang = $("<p>", {id: "frontend"});
    $frontLang.text("Front-end: HTML, CSS, Javascript");

    // Text for known technologies
    const $tech = $("<p>", {id: "tech"});
    $tech.text("Tools: Git, Heroku Deployment, Terminal Navigation, Agile Development, API Usage, ORM usage")

    // Append those paragraphs to output div
    $div.append($backLang);
    $div.append($frontLang);
    $div.append($tech);

    // Empty and display output div
    $("#info").empty();
    $("#info").append($div);
  }

  createProjects = () => {

    // Output div
    const $div = $("<div>", {id: "projectDiv"})

    // Vaycaymode Text
    const $vaycay = $("<p>", {id: "vaycay"})
    $vaycay.text("VAYCAYMODE: an application built for the traveller who can't take their mind off of their upcoming vacation. It gives the user a diversion from their every day tasks, and reminds them that better days are to come. It also serves as a planning tool, allowing the user to check the current weather forecast, create packing and to-do lists, and even organize their thoughts as a blog.");

    // Proximity Text
    const $proximity = $("<p>", {id: "proximity"});
    $proximity.text("Proximity: an application built for job searchers looking for new employment with a specified location and radius of that address. The job's the user searches for are based on the recruiter's posting jobs opportunities for job searchers. Designed to use the node.js & express.js for server-side code accessing information contained within mySQL using Sequelize to interact with the front-end user interactions and Heroku displaying the front-end deployment product");

    // BusTrackr Text
    const $trackr = $("<p>", {id: "trackr"});
    $trackr.text("BusTrackr is an application built for seasoned riders of the WMATA system. It boasts realtime bus updates, estimated time of arrivals at a stop, and a saving function for a user's preferred bus routes and stops")

    // Append those paragraphs to output div
    $div.append($vaycay);
    $div.append($proximity);
    $div.append($trackr);

    // Empty and display output div
    $("#info").empty();
    $("#info").append($div);
  }

  $( ".item" ).click(function() {

    if (this.className === "active item") {
      return
    }

    else {

      // Display corresponding text
      if (this.id === "bio") {
        // $("#info").text(bioInfo);
        createBio();
      }

      if (this.id === "projects") {
        createProjects();
      }

      if (this.id === "skills") {
        createSkills();
      }

      // Change where the pointer bar is
      $(this).addClass("active");
      $(this).siblings().removeClass("active");

    }    
  });
});