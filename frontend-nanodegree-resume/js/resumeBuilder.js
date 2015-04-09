
var bio = {
    "name": "Pedro Sanchez",
    "role": "Web Developer",
    "contacts": {
      "email": "pdsanch1@gmail.com",
      "mobile": "(480) 319-1980",
      "github": "sanchez_pd",
      "twitter": "@_sanchezpd",
      "location": "Austin, Texas",
      "blog": "Cosa Rica"
    },
    "bioPic": "images/applework.jpg",
    "welcomeMessage": "Howdy,  I am a happy C Language, low level programmer !",
    "skills": [
      "C Language", "Assembler", "HTML, CSS and Javascript (In Progress...)"
    ],
    display : function() {
      formattedName    = HTMLheaderName.replace("%data%",bio.name);
      formattedRole    = HTMLheaderRole.replace("%data%",bio.role);
      formattedMobile  = HTMLmobile.replace("%data%",bio.contacts.mobile);
      formattedEmail   = HTMLemail.replace("%data%",bio.contacts.email);
      formattedGithub  = HTMLgithub.replace("%data%",bio.contacts.github);
      formattedBlog    = HTMLblog.replace("%data%",bio.contacts.blog);
      formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
      formattedBioPin  = HTMLlocationPin.replace("%color%",locationPinColor[bio.contacts.location]);
      formattedPic     = HTMLbioPic.replace("%data%",bio.bioPic);
      formattedMsg     = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $("#topContacts").append(formattedMobile);
//      $("#footerContacts").append(formattedMobile);
      $("#topContacts").append(formattedEmail);
//      $("#footerContacts").append(formattedEmail);
      $("#topContacts").append(formattedGithub);
//      $("#footerContacts").append(formattedGithub);
      $("#topContacts").append(formattedBlog);
//      $("#topContacts").append(formattedLinkedin);
//      $("#footerContacts").append(formattedLinkedin);
      $("#topContacts").append(formattedLocation +
                               formattedBioPin);

//      $("#footerContacts").append(formattedLocation + formattedPin);

      $("#header").append(formattedPic);
      $("#header").append(formattedMsg);

      if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach( function(el,idx,arr) {
          formattedSkill = HTMLskills.replace("%data%",el);
          $("#skills").append(formattedSkill);
        });
      }
    }
};

var work = {
  "jobs": [
    {
      "employer": "Self-Employed",
      "title": "Web Developer",
      "location": "Austin, Texas",
      "dates":  "12/01/2012 thru Present",
      "description": "Node programming"
    },
    {
      "employer": "Visualtel",
      "title": "Firmware and C Language programmer",
      "location": "Santo Domingo, Dominican Republic",
      "dates":  "12/01/1999 thru 12/15/2008",
      "description": "JavaScript programming"
    }
   ],
   displayWork: function() {
      for (job in this.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var jobLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedJobPin  = HTMLworkPin.replace("%color%",locationPinColor[work.jobs[job].location]);
        var description = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(employer + title);
        $(".work-entry:last").append(jobLocation + formattedJobPin);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(description);
      }
  }

};

var education = {
  "schools": [
    { "name": "Arizona State University",
      "location": "Mesa, Arizona",
      "degree": "Master of Technology",
      "major": ["Alternative Energy"],
      "dates": "2009-2010 ",
      "url": "asu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Nanodegree Front-End",
      "school": "Udacity",
      "dates" : 2015,
      "url": "udacity.com"
    }
  ],
  displayEducation: function() {
     for (school in this.schools) {
       $("#education").append(HTMLschoolStart);
       var htmlSchoolName = HTMLschoolName.replace("%data%",this.schools[school].name);
       var htmlSchoolDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
       var htmlSchoolDates = HTMLworkDates.replace("%data%",this.schools[school].dates);
       var htmlSchoolLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
       var htmlSchoolPin  = HTMLschoolPin.replace("%color%",locationPinColor[this.schools[school].location]);
       var htmlSchoolMajor = HTMLschoolMajor.replace("%data%",this.schools[school].major);
       $(".education-entry:last").append(htmlSchoolName);
       $(".education-entry:last").append(htmlSchoolLocation + htmlSchoolPin);
       $(".education-entry:last").append(htmlSchoolDates);
       $(".education-entry:last").append(htmlSchoolDegree);
       $(".education-entry:last").append(htmlSchoolMajor);
     }
    for (course in this.onlineCourses) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      var htmlonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var htmlonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      var htmlonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      var htmlonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
      $(".education-entry:last").append(htmlonlineTitle);
      $(".education-entry:last").append(htmlonlineSchool);
      $(".education-entry:last").append(htmlonlineDates);
      $(".education-entry:last").append(htmlonlineURL);
    }
   }

};

var projects = {
  "projects": [
    {
      "title": "Solar System Installation",
      "description": "Pedraw",
      "dates": "12/01/2009 thru 12/15/2010",
      "images": [
        "images/solarpanel.jpeg",
        //"images/logovtel.png"
      ]
    },
    {
      "title": "Store and Forward FAX System Over X.25 and IP Networks",
      "description": "EconoFax",
      "dates": "02/01/1998 thru 12/15/1999",
      "images": [
        "images/logovtel.png"
      ]
    }
  ] ,
  display: function() {
    for (project in this.projects) {
      $("#projects").append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var description = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      var dates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      $(".project-entry:last").append(title);
      $(".project-entry:last").append(dates);
      $(".project-entry:last").append(description);
      if (projects.projects[project].images.length>0) {
        for (image in projects.projects[project].images) {
          var theImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
          $(".project-entry:last").append(theImage);
        }
      }
    }
  }
};

var locationPinColor = {
  "Austin, Texas": "green",
  "Santo Domingo, Dominican Republic": "orange",
  "Mesa, Arizona": "blue"
};


bio.display();

work.displayWork();

projects.display();

education.displayEducation(); // Displays both Schools and OnlineCourses

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
