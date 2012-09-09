// Andre' Miller
// September 5, 2012
// SDI Term 1209
// Project 2
// After My Work Day (Night with Friends)


// Variables
var friend1 = "Quincy",
	friend2 = "Brooklyn",
	friend3 = "Brianna",
	friend4 = "Brante",
	friend5 = "Ayasia"
;

// Procedure
var clockOut = "4pm"
var offWork = function(clockOut) {
	if (clockOut === "4pm") {
		console.log("Yes, it'\s finally " + clockOut + " , I can leave work and beat this Atlanta traffic.")
	} else {
		console.log("I will not be leaving work at " + clockOut + " today and will be stuck in traffic.");
	};
}; 

offWork("4pm");

console.log("Once home, my friends called and asked if I wanted go the movies later that night.");
console.log("They had already bought the tickets and wanted to know if I had any money to get the popcorn.");

// Boolean Function with return
var whatToDo = function(movieTickets, amountOfMoney) {
	var goingToMovies;
		if(movieTickets && !amountOfMoney === false) {
			goingToMovies = " and I had enough money to buy popcorn";
		} else {
			goingToMovies = ", but I didn't have enough to buy popcorn";
}
		var whatToDo = "They have the movie tickets" + goingToMovies + ".";
			return whatToDo;
};
	var movies = whatToDo(true, true);
			console.log(movies);

// Number Function with while-loop
console.log("At the theatre we seen some friends who were going to the same movie and we happen to have some extra tickets.")
console.log("So we decided to just give them the extra tickets.")
var extraTickets = function(tickets){
	while(tickets > 0){
		console.log(tickets + " tickets left to give.");
			tickets--;
}
var noTicket = "Whelp! All the tickets are gone.";
	return noTicket
};
var freeTickets = extraTickets(4);
	console.log(freeTickets);
	

// String Function
console.log("Afterwards everybody was talking about the movie and what they thought of it.")
var howWasMovie = function(comments) {
		var Quincy = 'Quincy said, "That movie was EPIC!" ',
			Nargel = 'Nargel didn\'t like the movie and said, "man.. that movie sucked."',
			Me = 'So then I left at Nargel for saying the movie sucked and I called him "lame".',
			ourConvo;
			ourConvo = Quincy + Nargel + Me
		return ourConvo
};

var opinions = howWasMovie("I thought the movie was awesome!");
console.log(opinions);


//  Array Function with a for-loop
console.log("On the way out of the theatre, I seen our friends from earlier waiting on a ride, so I decide to give them I ride home.");
var friends = [
	"Quincy",
	"Brooklyn",
	"Brianna",
	"Brante",
	"Ayasia"
];
var extraFriends = function(dropoffs) {
	for (var friends=4; friends > 0; friends--) {
	console.log("I have " + friends + " friends left to drop-off.");
}
var noFriends = "I have no more friends to drop off because " + friend5 + " is staying the night at my place.";	
	return noFriends
};

var rides = extraFriends(4);
	console.log(rides);



