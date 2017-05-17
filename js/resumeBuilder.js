// WORK OBJECT
var work = {
    "jobs": [{
            "employer": "Anadolu University",
            "title": "Research Assistant",
            "location": "Eskişehir",
            "dates": "2014-2017",
            "description": "Research assistant at graphic design department. Assisted typography, interactive graphic design and web design courses."
        },
        {
            "employer": "Akira Works",
            "title": "Art Director",
            "location": "Eskişehir",
            "dates": "2012-2014",
            "description": "Responsible for companies design project and coordination with clients. Worked on print and motion graphic projects."
        },
        {
            "employer": "Gap Creative",
            "title": "Graphic Designer",
            "location": "Eskişehir",
            "dates": "2011-2012",
            "description": "Worked mostly on print media. Package design, poster, corporate identity materials."
        },
        {
            "employer": "Armagraf",
            "title": "Graphic Designer",
            "location": "İstanbul",
            "dates": "2007-2008",
            "description": "Worked mostly on web design projects. Designed web interfaces with Adobe Flash."
        }
    ],

    //DISPLAY FUNCTION FOR WORK
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
            formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
            formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
            formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle + formattedHTMLworkLocation + formattedHTMLworkDates + formattedHTMLworkDescription);
        });
    }
};

//PROJECTS OBJECT
var projects = {
    "projects": [{
            "title": "Project1",
            "dates": "2017",
            "description": "International Anadolu Calligraphy & Typography Event Website",
            "images": ["images/caltyp.jpg"]
        },
        {
            "title": "Project2",
            "dates": "2017",
            "description": "Classic Arcade Game Clone",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }/*,
        {
            "title": "Project3",
            "dates": "2017",
            "description": "Neighborhood Map",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }*/
    ],

    //DISPLAY FUNCTION FOR PROJECTS
    display: function() {
        projects.projects.forEach(function(x) {
            $("#projects").append(HTMLprojectStart);
            formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", x.title);
            formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", x.dates);
            formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", x.description);
            formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", x.images);

            x.images.forEach(function(image) {
            formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedHTMLprojectImage);
            });

            $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription);
        });
    }
};

//BIO OBJECT
var bio = {
    "name": "Gökhan Apaydın",
    "role": "Front-end Web Developer",
    "welcomeMessage": "Hello! My name is Gökhan.</br>I am a front-end web developer</br>equiped with design skills.",
    "biopic": "images/propic.jpg",
    "contacts": {
        "mobile": "",
        "email": "gapay84@gmail.com",
        "github": "gokhanap",
        "linkedin": "gapaydin",
        "website": "http://www.gokhanapaydin.com/",
        "location": "Eskişehir, Turkey"
    },
    "skills": ["HTML/CSS/Javascript", "Adobe Illustrator/Indesign/Photoshop", "Git/Github"],

    //DISPLAY FUNCTION FOR BIO
    display: function(x) {

        formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName + formattedRole);

        formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
        formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        formattedContactGithub = formattedContactGithub.replace("#", bio.contacts.github);
        formattedContactLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        formattedContactLinkedin = formattedContactLinkedin.replace("#", bio.contacts.linkedin);
        formattedContactWebsite = HTMLwebsite.replace("%data%", bio.contacts.website.slice(11, 28));
        formattedContactWebsite = formattedContactWebsite.replace("#", bio.contacts.website);
        formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedContactEmail + formattedContactGithub + formattedContactLinkedin + formattedContactWebsite + formattedContactLocation);

        formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        formattedWelcomeMessage = HTMLwelcomeMessage.replace("%data%", bio.welcomeMessage);
        $("#bio").append(formattedbioPic + formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $("#bio").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                formattedskills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedskills);
            });
        }
    }
};

// EDUCATION OBJECT
var education = {
    "schools": [{
            "name": "Anadolu University",
            "location": "Eskişehir",
            "degree": "Bachelors",
            "dates": "2007-2011",
            "url": "http://www.anadolu.edu.tr/en/",
            "majors": ["Graphic Design"]
        },
        {
            "name": "Anadolu University",
            "location": "Eskişehir",
            "degree": "Master",
            "dates": "2014-2017",
            "url": "http://www.anadolu.edu.tr/en/",
            "majors": ["Graphic Design"]
        }
    ],
    "onlineCourses": [{
            "title": "Front-end Developer Nanodegree Program",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com/"
        }/*, TODO: planned for future
        {
            "title": "Full stack",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com/"
        }*/
    ],

    //DISPLAY FUNCTION FOR EDUCATION
    display: function() {

        //DISPLAYS SCHOOLS ARRAY
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            formattedschoolName = HTMLschoolName.replace("%data%", school.name);
            formattedschoolName = formattedschoolName.replace("#", school.url);
            formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolMajor + formattedschoolLocation);
        });

        //DISPLAYS ONLINECOURSES ARRAY
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);
            formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
        });
    }
};

work.display();

projects.display();

bio.display();

education.display();

//  APPEND MAP
$("#mapDiv").append(googleMap);