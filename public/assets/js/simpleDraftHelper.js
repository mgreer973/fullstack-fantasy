var source = $("#draftTemplate").html(); 
var template = Handlebars.compile(source); 

//this is just a template I tried to use for the simple draft table. I am trying to get the more complex one to work, but I wanted something to work at least for now.

var players = { 
    users: [ { 
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa" 
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry", 
            lastName: "Finch"
        }, 
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));