var bio = {
  "name"    : "Ricky Kynd",
  "role"    : "Full Stack Web Developer",
  "contacts": {
                "mobile"  : "201 480 29 3391",
                "email"   : "ricky.kynd@gemail.com",
                "github"  : "ricky_kynd.github.io",
                "twitter" : "ricky_kynd@twitter.com",
                "locations": "Auckland, New Zealand"
              },
  "welcomeMessage"  : "Welcome to my resume, please don't hire me, I'm not ready!",
  "skills"          : [ "HTML","CSS","JavaScript","GIT"],
  "bioPic"          : "images/kynd.jpg"
};

var work = {
  "jobs"  : [
    {
      "employer"    : "Kynd Enterprises Ltd.",
      "title"       : "Managing Director",
      "location"    : "Auckland",
      "dates"       : "2009 - present",
      "description" : "Leading a highly motivated team of seven talented individuals creating unforgettable events with creativity matched like no other."
    }
  ]
};

var projects = {
  "proj" : [
    {
      "title"       : "js-Racer",
      "dates"       : "2016",
      "description" : "this is the project that changed everything",
      "images"      : ["images/fry.jpg"]
    },
    {
      "title"       : "Personal Blog",
      "dates"       : "2016",
      "description" : "adsf lakjds adkj akljjadofij alsdkjfoadij asdlkja",
      "images"      : ["images/fry.jpg"]
    }
  ]
};


var education = {
  "schools" : [
    {
      "name"  : "HomeSchooled",
      "location"  : "Auckland",
      "dates" : "2000",
      "degree": "Celsius",
      "major" : ["Business", "Computer Gaming"]
    },
    {
      "name"  : "World Wide Web University",
      "location"  : "Auckland",
      "dates" : "2000",
      "degree": "All kinds of degrees",
      "major" : ["Life"]
    },
    {
      "name"  : "Dev-BootCamp",
      "location"  : "Auckland",
      "dates" : "2000",
      "degree": "Full Stack Ninja",
      "major" : ["Engineering Badass"]
    }
  ]
};

var myFunction = function() {


      //Name | Role | BioPic
      var formattedName = HTMLheaderName.replace('%data%', bio.name);
      $('#header').append(formattedName);
      var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
      $('#header').append(formattedRole);
      var formattedbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
      $('#header').append(formattedbioPic);
      //Contacts
      var formattedMobile   = HTMLmobile.replace('%data%', bio.contacts.mobile);
      $('#topContacts').append(formattedMobile);
      var formattedEmail    = HTMLemail.replace('%data%', bio.contacts.email);
      $('#topContacts').append(formattedEmail);
      var formattedTwitter  = HTMLtwitter.replace('%data%', bio.contacts.twitter);
      $('#topContacts').append(formattedTwitter);
      var formattedGithub   = HTMLgithub.replace('%data%', bio.contacts.github);
      $('#topContacts').append(formattedGithub);
      var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.locations);
      $('#topContacts').append(formattedLocation);
      var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
      $('#header').append(formattedWelcomeMessage);


      //Skills and shit
    if (bio.skills.length > 0) {

      $('#header').append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
      $('#skills').append(formattedSkill);
          formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
      $('#skills').append(formattedSkill);
          formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
      $('#skills').append(formattedSkill);
          formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
      $('#skills').append(formattedSkill);

    }

    for (job in work.jobs) {

      //Work experience
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedTitle    = HTMLworkTitle.replace('%data%',work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      $('.work-entry:last').append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
      $('.work-entry:last').append(formattedDescription);

    }
      //Projects
    for (p in projects.proj) {

      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.proj[p].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.proj[p].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.proj[p].description);
      $(".project-entry:last").append(formattedProjectDescription);

    if (projects.proj[p].images.length > 0) {
        for (image in projects.proj[p].images) {
          var formattedProjImage = HTMLprojectImage.replace('%data%', projects.proj[p].images[image]);
          $(".project-entry:last").append(formattedProjImage);
      }
    }
  }
      //EDUCATION
    for (e in education.schools) {

      $('#education').append(HTMLschoolStart);

      var formatedSchoolName = HTMLschoolName.replace('%data%', education.schools[e].name);
      $('.education-entry:last').append(formatedSchoolName);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[e].location);
      $('.education-entry:last').append(formattedSchoolLocation);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[e].dates);
      $('.education-entry:last').append(formattedSchoolDates);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[e].degree);
      $('.education-entry:last').append(formattedSchoolDegree);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[e].major);
      $('.education-entry:last').append(formattedSchoolMajor);
    }

    function inName(name) {
      name = name.trim().split(" ");
      console.log(name);
      name[1] = name[1].toUpperCase();
      name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

      return name[0] + " " + name[1];
    }

      $('#main').append(internationalizeButton);

    //Google Maps
    $("#mapDiv").append(googleMap);

}; myFunction();

//var awesomeThoughts = "I am Richard and I am awesome"; console.log(awesomeThoughts);
//var newThoughts = awesomeThoughts.replace('awesome', 'fun'); /* This will replace the above awesomeThoughts "awesome" string with "fun" */ console.log(newThoughts);
//var email = 'mrkynd31@gmail.com'; //we'll be using the string method and replace a couple things.
//var newEmail = email.replace('gmail', 'hotmail'); console.log(newEmail);

//  APPENDING AND PREPENDING NAME AND ROLE FROM THE HELPER.JS FILE

//var name = "Richard Kynd"; // first challenge: $("#main").append(name);
//var role = "Full Stack Developer";

//var formattedName = HTMLheaderName.replace('%data%', bio.name);
//var formattedRole = HTMLheaderRole.replace('%data%', role);
//var formattedSkills = HTMLheaderSkills.replace('%data%', skills);

//$('#header').append(formattedRole);
//$('#header').append(formattedSkills);

/*var education = {}; //defines an object using bracket notation
education["name"]  = "Some fucked up school";
education["years"] = "2006 - 2009";
education["city"]  = "Auckland";*/

/*  PROTECTING THE RESUME QUIZ

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;"); //REG EXPRESSION
    newHTML = newHTML.replace(/>/g, "&gt;"); //

    return newHTML;
};
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

*/
