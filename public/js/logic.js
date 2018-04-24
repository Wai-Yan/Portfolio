$( document ).ready(function() {

  $( ".item" ).click(function() {

    if (this.className === "active item") {
      return
    }

    else {

      switch(this.id) {
        case "bio":
          createBio();
          break;

        case "projects":
          createProjects();
          break;

        case "skills":
          createSkills();
          break;
      }

      // Change where the pointer bar is
      $(this).addClass("active");
      $(this).siblings().removeClass("active");

    }    
  });

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

    
    const $vaycay = $("<p>", {id: "vaycay"});

    const $intro = $("<p>", {id: "intro"})
    $intro.text("CLICK on the project name to be taken to its page!")
    $vaycay.append($intro);

    // Vaycaymode Text
    var $link = $("<a href='http://vaycaymode.com'>")
    $link.text("Vaycaymode");

    $vaycay.append($link);
    $vaycay.append(": an application built for the traveller who can't take their mind off of their upcoming vacation. As a fun diversion, it serves as a planning tool for a user's upcoming vacation, allowing them to check the current weather forecast, create packing and to-do lists, and even organize their thoughts as a blog.");

    // Proximity Text
    const $proximity = $("<p>", {id: "proximity"});

    $link = $("<a href='https://github.com/angkressin/Proximity'>")
    $link.text("Proximity");

    $proximity.append($link);

    $proximity.append(": an application built for job searchers looking for new employment within a specified location and radius of that address. Designed with Node.js & Express.js, database powered by MySQL using the Sequelize ORM.");

    // BusTrackr Text
    const $trackr = $("<p>", {id: "trackr"});

    $link = $("<a href='https://github.com/Wai-Yan/BusTrakr'>")
    $link.text("BusTrackr");

    $trackr.append($link);
    $trackr.append(": an application built for seasoned riders of the WMATA system. It boasts realtime bus updates, estimated time of arrivals at a stop, and a saving function for a user's preferred bus routes and stops")

    // Append those paragraphs to output div
    $div.append($vaycay);
    $div.append($proximity);
    $div.append($trackr);

    // Empty and display output div
    $("#info").empty();
    $("#info").append($div);
  }
});