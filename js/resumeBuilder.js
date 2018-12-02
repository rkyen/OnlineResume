/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	name: "Ryan K Yen",
 	role: "Customer Support Engineer",
 	contacts = {
 		mobile: "XXX-XXX-XXXX",
 		email: "ryan.kho.yen@gmail.com",
 		github: "rk_yen",
 		twitter: "rk_yen",
 		location: "Dallas, TX" 
 	},

 	welcomeMessage: "Hey There, welcome to my online resume!",
 	skills: ["Coding","Marketing","Product Development"],
 	biopic: "Aspiring UX designer",

 	display: function (){
 		//put all the info above into the page with JQuery
 		$('')

 	}

 };

  var education = {
  	schools: [{name: "Clarkson University", location: "Potsdam, NY", degree: "Bachelors of Science", major: ["Software Engineering"], minor: "Mathematics", dates: "2012-2016"}],

  	onlineCourses: [{title: "Front End Developer Nanodegree", school: "Udacity", dates: "2017 - 2018", url: "udacity.com" }],

  	display: function education() {
  		return; 
  	}
  };

    
  var work = {
  	jobs: [{employer: "Real Geeks", title: "Customer Support Engineer", location: "Dallas, TX", dates: "June 2018 - Present", description: "Just a Geek"}],

  	display: function work(){
  		return;
  	}
  };

  var projects = {
  	projects: [{title: "Online Resume", dates: "August 2018", description:"A resume you can see on the web",images: "no image"}],

  	createProjectEntry: function(project) {

  	},

  	display: function projects(){
  		var projectEntry = $(HTMLprojectStart);
  		
  		for (let i = 0; i < projects.projects.length; i++) {
  			var currProject = projects.projects[i];
  			var currEntry = projects.createProjectEntry(currProject);

  			projectEntry.append(currEntry);
  		}

  		$('#projects').append(projectEntry);
  		return;
  	}
  };