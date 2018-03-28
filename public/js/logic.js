$( document ).ready(function() {
  var bioInfo = "Knowledge of sorting and searching algorithms. CS Fundamentals. Self-taught, quick learner. Committed to creating efficient, clean and functional code.";

  var skillInfo = "Back-end: Node.js, Python, Ruby, C, MySQL, Front-end: HTML, CSS, Javascript Tools: Git, Heroku Deployment, Terminal Navigation, Agile Development, API Usage, ORM usage"

  var projectsInfo = "VAYCAYMODE is an application built for the traveller who can't take their mind off of their upcoming vacation. It gives the user a diversion from their every day tasks, and reminds them that better days are to come. It also serves as a planning tool, allowing the user to check the current weather forecast, create packing and to-do lists, and even organize their thoughts as a blog. Proximity: an application built for job searchers looking for new employment with a specified location and radius of that address. The job's the user searches for are based on the recruiter's posting jobs opportunities for job searchers. Designed to use the node.js & express.js for server-side code accessing information contained within mySQL using Sequelize to interact with the front-end user interactions and Heroku displaying the front-end deployment product"

  $( ".github" ).click(function() {
    window.open("https://github.com/Wai-Yan", '_blank');
  });

  $( ".linkedin" ).click(function() {
    window.open("https://www.linkedin.com/in/wai-yan/", '_blank');
  });

  $( ".twitter" ).click(function() {
    window.open("https://twitter.com/RubyEatingPytho", '_blank');
  });

  $( ".item" ).click(function() {

    if (this.className === "active item") {
      return
    }

    else {

      // Display corresponding text
      if (this.id === "bio") {
        $("#info").text(bioInfo);
      }

      if (this.id === "projects") {
        $("#info").text(projectsInfo);
      }

      if (this.id === "skills") {
        $("#info").text(skillInfo);
      }

      // Change where the pointer bar is
      $(this).addClass("active");
      $(this).siblings().removeClass("active");

      
    }
    
  });
});