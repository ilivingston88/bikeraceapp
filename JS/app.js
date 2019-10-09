
//Array of available characters to choose from.
const ridersArray = [
	{	name: "Chris Froome",
		flats: 4,
		climbs: 5,
		descents: 4
	},

	{	name: "Tom Domoulin",
		flats: 5,
		climbs: 4,
		descents: 3
	},

	{	name: "Julian Alaphilippe",
		flats: 4,
		climbs: 4,
		descents: 5
	},

	{	name: "Peter Sagan",
		flats: 5,
		climbs: 3,
		descents: 5
	}
]


//Global variables:
let name;
let flats;
let climbs;
let descents;
let riderFlats;
let riderClimbs;
let riderDescents;
let speed;
let playerStamina = 100;
let distance;
let totalDistance;
let distTrav = totalDistance - distance;

let pPace;
let paceButton;
//setting player choices as false
let riderOnePlayerChoice = false;
let riderTwoPlayerChoice = false;

//players select their characters
function chooseRider() {

	//loading the ridersArray onto the screen
	$(".cardOneTL").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[0].name}</br>
		flats: ${ridersArray[0].flats}</br>
		climbs ${ridersArray[0].climbs}</br>
		descents ${ridersArray[0].descents} `);

	$(".cardOneTR").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[1].name}</br>
		flats: ${ridersArray[1].flats}</br>
		climbs ${ridersArray[1].climbs}</br>
		descents ${ridersArray[1].descents} `);

	$(".cardOneBL").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[2].name}</br>
		flats: ${ridersArray[2].flats}</br>
		climbs ${ridersArray[2].climbs}</br>
		descents ${ridersArray[2].descents} `);

	$(".cardOneBR").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[3].name}</br>
		flats: ${ridersArray[3].flats}</br>
		climbs ${ridersArray[3].climbs}</br>
		descents ${ridersArray[3].descents} `);

	$(".cardTwoTL").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[0].name}</br>
		flats: ${ridersArray[0].flats}</br>
		climbs ${ridersArray[0].climbs}</br>
		descents ${ridersArray[0].descents} `);

	$(".cardTwoTR").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[1].name}</br>
		flats: ${ridersArray[1].flats}</br>
		climbs ${ridersArray[1].climbs}</br>
		descents ${ridersArray[1].descents} `);

	$(".cardTwoBL").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[2].name}</br>
		flats: ${ridersArray[2].flats}</br>
		climbs ${ridersArray[2].climbs}</br>
		descents ${ridersArray[2].descents} `);

	$(".cardTwoBR").html(`
		Please select your rider </br>
		</br>
		name: ${ridersArray[3].name}</br>
		flats: ${ridersArray[3].flats}</br>
		climbs ${ridersArray[3].climbs}</br>
		descents ${ridersArray[3].descents} `);

	//players choose their riders
	 $(".cardOneTL").click(function()	{

	 	riderOnePlayerChoice = ridersArray[0];

		$(".cardOneTL").html(``);
		$(".cardOneTR").html(``);
	   	$(".cardOneBL").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoTL").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice.name}`);
	    $(".cardTwoTL").off("click");
	    $(".cardOneTL").off("click");
	    $(".cardOneTR").off("click");
	    $(".cardOneBL").off("click");
	    $(".cardOneBR").off("click");
	    $(".playerOneCard").html(`P1 is ready. Riding as ${riderOnePlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	 });

	 $(".cardOneTR").click(function()	{

	 	riderOnePlayerChoice = ridersArray[1];

		$(".cardOneTR").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneBL").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoTR").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice.name}`);
	    $(".cardTwoTR").off("click");
	    $(".cardOneTL").off("click");
	    $(".cardOneTR").off("click");
	    $(".cardOneBL").off("click");
	    $(".cardOneBR").off("click");
	    $(".playerOneCard").html(`P1 is ready. Riding as ${riderOnePlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	});

	$(".cardOneBL").click(function()	{
		riderOnePlayerChoice = ridersArray[2];

		$(".cardOneBL").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneTR").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoBL").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice.name}`);
	    $(".cardTwoBL").off("click");
	    $(".cardOneTL").off("click");
	    $(".cardOneTR").off("click");
	    $(".cardOneBL").off("click");
	    $(".cardOneBR").off("click");
	    $(".playerOneCard").html(`P1 is ready. Riding as ${riderOnePlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	});

	$(".cardOneBR").click(function()	{
		riderOnePlayerChoice = ridersArray[3];

		$(".cardOneBR").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneTR").html(``);
	   	$(".cardOneBL").html(``);
	    $(".cardTwoBR").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice.name}`);
	    $(".cardTwoBR").off("click");
	    $(".cardOneTL").off("click");
	    $(".cardOneTR").off("click");
	    $(".cardOneBL").off("click");
	    $(".cardOneBR").off("click");
	    $(".playerOneCard").html(`P1 is ready. Riding as ${riderOnePlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice); 
	});

	$(".cardTwoTL").click(function()	{
		riderTwoPlayerChoice = ridersArray[0];

		$(".cardTwoTL").html(``);
		$(".cardTwoTR").html(``);
	   	$(".cardTwoBL").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneTL").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice.name}`);
	    $(".cardOneTL").off("click");
	    $(".cardTwoTL").off("click");
	    $(".cardTwoTR").off("click");
	    $(".cardTwoBL").off("click");
	    $(".cardTwoBR").off("click");
	    $(".playerTwoCard").html(`P2 is ready. Riding as ${riderTwoPlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);  
	});

	$(".cardTwoTR").click(function()	{
		riderTwoPlayerChoice = ridersArray[1];

		$(".cardTwoTR").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoBL").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneTR").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice.name}`);
	    $(".cardOneTR").off("click");
	    $(".cardTwoTL").off("click");
	    $(".cardTwoTR").off("click");
	    $(".cardTwoBL").off("click");
	    $(".cardTwoBR").off("click");
	    $(".playerTwoCard").html(`P2 is ready. Riding as ${riderTwoPlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	});

	$(".cardTwoBL").click(function()	{
		riderTwoPlayerChoice = ridersArray[2];

		$(".cardTwoBL").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoTR").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneBL").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice.name}`);
	    $(".cardOneBL").off("click");
	    $(".cardTwoTL").off("click");
	    $(".cardTwoTR").off("click");
	    $(".cardTwoBL").off("click");
	    $(".cardTwoBR").off("click");
	    $(".playerTwoCard").html(`P2 is ready. Riding as ${riderTwoPlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	});

	$(".cardTwoBR").click(function()	{
		riderTwoPlayerChoice = ridersArray[3];

		$(".cardTwoBR").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoTR").html(``);
	   	$(".cardTwoBL").html(``);
	    $(".cardTwoBR").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice.name}`);
	    $(".cardOneBR").off("click");
	    $(".cardTwoTL").off("click");
	    $(".cardTwoTR").off("click");
	    $(".cardTwoBL").off("click");
	    $(".cardTwoBR").off("click");
	    $(".playerTwoCard").html(`P2 is ready. Riding as ${riderTwoPlayerChoice.name}`)
	    startGame(riderOnePlayerChoice, riderTwoPlayerChoice);
	});
	    
}

chooseRider();

//start game function
function startGame(riderOnePlayerChoice, riderTwoPlayerChoice) {
	if (riderOnePlayerChoice !== false && riderTwoPlayerChoice !== false) {
		console.log(`begin!`);

	let playerOne = new Player(riderOnePlayerChoice.name, riderOnePlayerChoice.flats,
		riderOnePlayerChoice.climbs, riderOnePlayerChoice.descents, 'playerOne');

	let playerTwo = new Player(riderTwoPlayerChoice.name, riderTwoPlayerChoice.flats,
		riderTwoPlayerChoice.climbs, riderOnePlayerChoice.descents, 'playerTwo');

	playerOne.riderSkills();
	playerTwo.riderSkills();

	console.log(`p1 ${playerOne.name}, p2 ${playerTwo.name}`)
	}
}


//creating player classes (p1 and p2)
class Player {
	constructor(name, flats, climbs, descents, htmlPrefix) {
		this.name = name;
		this.flats = flats;
		this.climbs = climbs;
		this.descents = descents;
		this.riderFlats = riderFlats;
		this.riderClimbs = riderClimbs;
		this.riderDescents = riderDescents;
		this.speed = speed;
		this.totalDistance = totalDistance;
		this.distTrav = distTrav;
		this.distance = distance;
		this.location = location;
		this.htmlPrefix = htmlPrefix;
		this.distanceInterval;


		this.courseMilanSR();
		this.riderDisplayStamina();
	}

	createEventListeners() {
		//buttons
	$(`.${this.htmlPrefix}AttackButton`).on('click', () => {
		this.pPace = this.speed * 1.5;
		this.paceButton = "attack";
		this.pacing();
	});


	// stamina === staminaFreeze;
	$(`.${this.htmlPrefix}TempoButton`).on('click', () => {
		this.pPace = this.speed; 
		this.paceButton = "tempo";
		this.pacing();
	});

	// stamina === staminaIncrease;
	$(`.${this.htmlPrefix}RecoverButton`).on('click', () => {
		this.pPace = this.speed * .5;
		this.paceButton = "recover";
		this.pacing();
	}); 

	}


	//defining rider skills (input - flats, climbs, descents. outputs riderFlats,Climbs,Descents)
	riderSkills() {
		this.createEventListeners();

		flats = this.flats;
		climbs = this.climbs;
		descents = this.descents;

		//setting base speed levels
		const speedFlats = 45;
		const speedClimbs = 25;
		const speedDescents = 85;

		//calculating rider speed on flats
			if (flats === 5) {
				this.riderFlats = speedFlats * 1.2
			} 	else if (flats === 4) {
					this.riderFlats = speedFlats * 1.1;
			}	else if (flats === 3) {
					this.riderFlats = speedFlats * 1;
			}	else if (flats === 2) {
					this.riderFlats = speedFlats * .9;
			}	else if (flats === 1) {
					this.riderFlats = speedFlats * .8 ;
			}
			console.log(`${this.htmlPrefix}: flats: ${this.riderFlats}`);
	   

			//calculating rider speed on climbs
			if (climbs === 5) {
				this.riderClimbs = speedClimbs * 1.2
			} 	else if (climbs === 4) {
					this.riderClimbs = speedClimbs * 1.1;
			}	else if (climbs === 3) {
					this.riderClimbs = speedClimbs * 1;
			}	else if (climbs === 2) {
					this.riderClimbs = speedClimbs * .9;
			}	else if (climbs === 1) {
					this.riderClimbs = speedClimbs * .8;
			}
			console.log(`${this.htmlPrefix}: climbs: ${this.riderClimbs}`);
		
			//calculating rider speed on descents
			if (descents === 5) {
				this.riderDescents = speedDescents * 1.2
			} 	else if (descents === 4) {
					this.riderDescents = speedDescents * 1.1;
			}	else if (descents === 3) {
					this.riderDescents = speedDescents * 1;
			}	else if (descents === 2) {
					this.riderDescents = speedDescents * .9;
			}	else if (descents === 1) {
					this.riderDescents = speedDescents * .8;
			}
			console.log(`${this.htmlPrefix}: descents: ${this.riderDescents}`);
			this.regSpeed();
	}

	//defining speeds on different terrain
	regSpeed() {

		this.location = "descent";

		if (this.location === "flat") {
			this.speed = this.riderFlats;
			console.log(`${this.htmlPrefix}: speed ${this.speed}`)
		} else if (this.location === "climb") {
			this.speed = this.riderClimbs;
			console.log(`${this.htmlPrefix}: speed ${this.speed}`)
		} else if (this.location === "descent") {
			this.speed = this.riderDescents;
			console.log(`${this.htmlPrefix}: speed ${this.speed}`)
		}
	// this.pacing();
	}


	riderDisplayStamina() {
	
		this.playerStamina = 100;

		$(`.${this.htmlPrefix}Stamina`).html(`Stamina: ${this.playerStamina}%`);

		this.staminaCounter = setInterval(()=> {

			if (this.paceButton === "attack" && this.playerStamina >= 0) {
				$(`.${this.htmlPrefix}Stamina`).html(`Stamina: ${this.playerStamina--}%`);

			} else if (this.paceButton === "tempo") {
				$(`.${this.htmlPrefix}Stamina`).html(`Stamina: ${this.playerStamina}%`); 
					
			} else if (this.paceButton === "recover" && this.playerStamina <= 100) {
					$(`.${this.htmlPrefix}Stamina`).html(`Stamina: ${this.playerStamina++}%`);
					
			}
				
			if (this.playerStamina === 0){
				$(`.${this.htmlPrefix}Stamina`).html(`Stamina: ${this.playerStamina}%`);
				this.pPace = this.speed * 0.5; 
				this.paceButton = "recover";
				this.playerStamina++;
				this.pacing();

			}
		}, 50)
		// this.pacing();
	}	


	pacing() {
		console.log("PACING");
		console.log("this.speed: " + this.speed);
		console.log("this.pPace before: " + this.pPace);
		this.pPace = Math.floor(this.pPace);
		console.log("this.pPace after: " + this.pPace);
		$(`.${this.htmlPrefix}DisplayPace`).html(`pace: ${this.pPace}km/h`);
		//this.pPace = this.speed;
		this.stamina = this.staminaDecrease; 
		this.distanceDisplay();
	}


	distanceDisplay() {

		this.inter = (1/this.pPace)*10000;
		clearInterval(this.distanceInterval);
		if (!this.distance) {this.distance = this.totalDistance;}
		this.distanceInterval = setInterval(()=> {
			//console.log(`inter = ${this.inter}`)
			if (this.distance <= 0) {
				clearInterval(this.distanceInterval);
				this.distance = 0;
			}
			this.distance--;
			console.log("distance changed");
			$(`.${this.htmlPrefix}DisplayDistance`).html(`distance remaining: ${this.distance}`);
		}, this.inter);

	
	}

	courseMilanSR() {
		this.totalDistance = 298;
		let distTrav = this.totalDistance - this.distance;
		let location = "flat";

		if (this.distTrav > 0 && this.distTrav < 100) {
			 location = "flat";
		} else if (this.distTrav >= 100 && this.distTrav < 145) {
			location = "climb";
		} else if (this.distTrav >= 145  && this.distTrav < 155) {
			 location = "descent";
		} else if (this.distTrav >= 155 && this.distTrav < 170) {
			location = "flat";
		} else if (this.distTrav >= 170 && this.distTrav < 180) {
			location = "climb";
		} else if (this.distTrav >= 180 && this.distTrav < 190) {
			location = "descent";
		} else if (this.distTrav >= 190 && this.distTrav < 250) {
			location = "flat";
		} else if (this.distTrav >= 250 && this.distTrav < 255) {
			location = "climb";
		} else if (this.distTrav >= 255 && this.distTrav < 260) {
			location = "descent";
		} else if (this.distTrav >= 260 && this.distTrav < 264) {
			location = "flat";
		} else if (this.distTrav >= 264 && this.distTrav < 269) {
			location = "climb";
		} else if (this.distTrav >= 269 && this.distTrav < 274) {
			location = "descent";
		} else if (this.distTrav >= 274 && this.distTrav < 286) {
			location = "flat";
		} else if (this.distTrav >= 286 && this.distTrav < 289) {
			location = "climb";
		} else if (this.distTrav >= 289 && this.distTrav < 295) {
			location = "descent";
		} else if (this.distTrav >= 295 && this.distTrav < 298) {
			location = "flat";
		} else if (this.distTrav === this.totalDistance) {
			//winner is declared
		}

	}		
}

































