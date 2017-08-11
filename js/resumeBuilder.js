// WORK OBJECT
var work = {
    "jobs": [{
            "employer": "Anadolu University",
            "title": "Research Assistant",
            "location": "Eskişehir",
            "dates": "02/2014–06/2017",
            "description": "• Executed a type design project which consists of 7 fonts and 2464 glyphs.<br/>• Assisted typography, interactive graphic design and web design courses."
        },
        {
            "employer": "Akira Works",
            "title": "Art Director",
            "location": "Eskişehir",
            "dates": "09/2012–01/2014",
            "description": "• Directed design project management and coordination with clients.<br/>• Conceptualized design projects on print and digital media."
        },
        {
            "employer": "Gap Creative",
            "title": "Graphic Designer",
            "location": "Eskişehir",
            "dates": "06/2011–08/2012",
            "description": "• Designed package designs, posters and corporate identity materials.<br/>• Collaborated with a large group of designers on “City Memorial Museum” project."
        },
        {
            "employer": "Armagraf",
            "title": "Graphic Designer",
            "location": "İstanbul",
            "dates": "04/2006–09/2007",
            "description": "• Designed print materials considering customer’s needs.<br/>• Designed web interfaces collaborating with web developer team."
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
    "skills": ["HTML5/CSS3/Javascript ES6", "Adobe Illustrator/Indesign/Photoshop", "Git/Github", "React (learning...)"],

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
            "dates": "09/2007–06/2011",
            "url": "http://www.anadolu.edu.tr/en/",
            "majors": ["Graphic Design"]
        },
        {
            "name": "Anadolu University",
            "location": "Eskişehir",
            "degree": "Master",
            "dates": "02/2014–01/2017",
            "url": "http://www.anadolu.edu.tr/en/",
            "majors": ["Graphic Design"]
        }
    ],
    "onlineCourses": [{
            "title": "Front-end Developer Nanodegree Program",
            "location": "Remote",
            "school": "Udacity",
            "dates": "03/2017–07/2017",
            "url": "https://www.udacity.com/degrees/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "React Nanodegree Program",
            "location": "Remote",
            "school": "Udacity",
            "dates": "07/2017–present",
            "url": "https://www.udacity.com/degrees/react-nanodegree--nd019"
        }
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

//projects.display();

bio.display();

education.display();

//  APPEND MAP
$("#mapDiv").append(googleMap);