// <img style="height: 50px;" id="Froome_img" src="https://cdn.pixabay.com/photo/2019/09/26/13/35/chris-froome-4505981_960_720.jpg">
// 		<img style="height: 50px;" id="Dumoulin_img" src="https://c1.staticflickr.com/9/8653/16787592252_f4172c5ccb_b.jpg">
// 		<img style="height: 50px;" id="Alaphilippe_img" src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2018_Tour_of_Britain_stage_3_-_stage_winner_Julian_Alaphilippe_%28cropped%29.JPG">
// 		<img style="height: 50px;" id="Sagan_img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Peter_Sagan_Tour_de_France_2017.jpg">


//Array of available characters to choose from.
const ridersArray = [
	{	name: "Chris Froome",
		flats: 4,
		climbs: 5,
		descents: 4
	},

	{	name: "Tom Dumoulin",
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
	    $(".cardOneTL").html(`P1 is ready. Riding as ${riderOnePlayerChoice.name}`)
	    $(".playerOneDisplayRider").append($('<img id="Froome_img" src="https://cdn.pixabay.com/photo/2019/09/26/13/35/chris-froome-4505981_960_720.jpg">'));
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
	    $(".playerOneDisplayRider").append($('<img " id="Dumoulin_img" src="https://www.pezcyclingnews.com/wp-content/uploads/2018/07/tdf18st20tt-dumoulin-ride-920.jpg">'));
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
	    $(".playerOneDisplayRider").append($('<img id="Alaphilippe_img" src="https://pbs.twimg.com/profile_images/1080158395628425217/coQJnoK__400x400.jpg">'));
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
	    $(".playerOneDisplayRider").append($('<img id="Sagan_img" src="https://i.pinimg.com/originals/84/40/b8/8440b83694d9d3d69106db4395a738cd.jpg">'));
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
	    $(".playerTwoDisplayRider").append($('<img id="Froome_img" src="https://cdn.pixabay.com/photo/2019/09/26/13/35/chris-froome-4505981_960_720.jpg">'));
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
	    $(".playerTwoDisplayRider").append($('<img id="Dumoulin_img" src="https://www.pezcyclingnews.com/wp-content/uploads/2018/07/tdf18st20tt-dumoulin-ride-920.jpg">'));
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
	    $(".playerTwoDisplayRider").append($('<img id="Alaphilippe_img" src="https://pbs.twimg.com/profile_images/1080158395628425217/coQJnoK__400x400.jpg">'));
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
	    $(".playerTwoDisplayRider").append($('<img id="Sagan_img" src="https://i.pinimg.com/originals/84/40/b8/8440b83694d9d3d69106db4395a738cd.jpg">'));
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

	//playerOne.riderSkills();
	//playerTwo.riderSkills();

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
		this.totalDistance = 298;
		//this.distTrav = distTrav;
		this.distance = 298;
		this.location = location;
		this.htmlPrefix = htmlPrefix;
		this.distanceInterval;


		this.courseMilanSR();
		this.riderDisplayStamina();
		this.pacing("none");

		this.riderSkills();


		// this.masterInterval = setInterval(()=>
		// {
		// 	this.courseMilanSR();
		// 	this.regSpeed();
		// }, 100);
	}

	createEventListeners() {
		//buttons
	$(`.${this.htmlPrefix}AttackButton`).on('click', () => {
		
		this.pacing("attack");
	});


	// stamina === staminaFreeze;
	$(`.${this.htmlPrefix}TempoButton`).on('click', () => {
		
		this.pacing("tempo");
	});

	// stamina === staminaIncrease;
	$(`.${this.htmlPrefix}RecoverButton`).on('click', () => {
		
		this.pacing("recover");
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

		//console.log("regSpeed called");

		let oldSpeed = this.speed;

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

		if (oldSpeed != this.speed)
		{
			//if the speed changed, re-run the distance interval
			console.log("SPEED CHANGED");
			this.pacing(this.paceButton);
		}
	// this.pacing();
	}


	riderDisplayStamina() {
	
		this.playerStamina = 100;

		$(`.${this.htmlPrefix}Stamina`).html(`S</br>
			t</br>
			a</br>
			m</br>
			i</br>
			n</br>
			a</br>
			</br>
			${this.playerStamina}%`);

		this.staminaCounter = setInterval(()=> {

			if (this.paceButton === "attack" && this.playerStamina >= 0) {
				$(`.${this.htmlPrefix}Stamina`).html(`S</br>
			t</br>
			a</br>
			m</br>
			i</br>
			n</br>
			a</br>
			</br>
			${this.playerStamina--}%`);

			} else if (this.paceButton === "tempo") {
				$(`.${this.htmlPrefix}Stamina`).html(`S</br>
			t</br>
			a</br>
			m</br>
			i</br>
			n</br>
			a</br>
			</br>
			${this.playerStamina}%`); 
					
			} else if (this.paceButton === "recover" && this.playerStamina <= 100) {
					$(`.${this.htmlPrefix}Stamina`).html(`S</br>
			t</br>
			a</br>
			m</br>
			i</br>
			n</br>
			a</br>
			</br>
			${this.playerStamina++}%`);
					
			}
				
			if (this.playerStamina === 0){
				$(`.${this.htmlPrefix}Stamina`).html(`S</br>
			t</br>
			a</br>
			m</br>
			i</br>
			n</br>
			a</br>
			</br>
			${this.playerStamina}%`);
				this.pPace = this.speed * 0.5; 
				this.paceButton = "recover";
				this.playerStamina++;
				this.pacing();

			}
		}, 50)
		// this.pacing();
	}	


	pacing(whichPace) {

		switch (whichPace)
		{
			case "attack":
				this.pPace = this.speed * 1.5;
				this.paceButton = "attack";
				break;
			case "tempo":
				this.pPace = this.speed;
				this.paceButton = "tempo";
				break;
			case "recover":
				this.pPace = this.speed * 0.5;
				this.paceButton = "recover";
				break;
			case "none":
				this.pPace = 0;
				this.paceButton = "none";
			default:
				console.log("ERROR: unknown pacing requested");
		}

		


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

		if (this.pPace > 0)
		{

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
				//console.log(this.distance);
				//console.log("distance changed");
				$(`.${this.htmlPrefix}DisplayDistance`).html(`Finish in: ${this.distance}kms`);

				this.courseMilanSR();
				this.regSpeed();
			}, this.inter);
		}

	}

	courseMilanSR() {
		this.totalDistance = 298;
		let distTrav = this.totalDistance - this.distance;
		//this.location = "flat";

		console.log("distTrav: " + distTrav);
		//console.log(this.totalDistance);
		//console.log(this.distance);

		if (distTrav >= 0 && distTrav < 100) {
			 this.location = "flat";
		} else if (distTrav >= 100 && distTrav < 145) {
			this.location = "climb";
		} else if (distTrav >= 145  && distTrav < 155) {
			 this.location = "descent";
		} else if (distTrav >= 155 && distTrav < 170) {
			this.location = "flat";
		} else if (distTrav >= 170 && distTrav < 180) {
			this.location = "climb";
		} else if (distTrav >= 180 && distTrav < 190) {
			this.location = "descent";
		} else if (distTrav >= 190 && distTrav < 250) {
			this.location = "flat";
		} else if (distTrav >= 250 && distTrav < 255) {
			this.location = "climb";
		} else if (distTrav >= 255 && distTrav < 260) {
			this.location = "descent";
		} else if (distTrav >= 260 && distTrav < 264) {
			this.location = "flat";
		} else if (distTrav >= 264 && distTrav < 269) {
			this.location = "climb";
		} else if (distTrav >= 269 && distTrav < 274) {
			this.location = "descent";
		} else if (distTrav >= 274 && distTrav < 286) {
			this.location = "flat";
		} else if (distTrav >= 286 && distTrav < 289) {
			this.location = "climb";
		} else if (distTrav >= 289 && distTrav < 295) {
			this.location = "descent";
		} else if (distTrav >= 295 && distTrav < 298) {
			this.location = "flat";
		} else if (distTrav >= 298) {
			this.location = "finish"
		}

		// $(`.${this.htmlPrefix}Card`).html(`terrain: ${this.location}`);

		if (this.location === "flat") {
			$(`.${this.htmlPrefix}Card`).html(`You're riding on ${this.location} terrain!`);
			$(`.${this.htmlPrefix}Card`).append($('<img id="Flats_img" src="http://3.bp.blogspot.com/_r3qzljwt8Rk/TJQ20N6whFI/AAAAAAAAGFU/vs5KcV6YDCs/s1600/IMG_0704.JPG">'));

		} else if (this.location === "climb") {
			$(`.${this.htmlPrefix}Card`).html(`You've reached a ${this.location}!`);
			$(`.${this.htmlPrefix}Card`).append($('<img id="Climbs_img" src="http://www.content.granfondoguide.com/images/gf-top-pro-climbs-Muro-di-Sormano-3.png">'));

		} else if (this.location === "descent") {
			$(`.${this.htmlPrefix}Card`).html(`The road is heading downhill. Get ready for a ${this.location}!`);
			$(`.${this.htmlPrefix}Card`).append($('<img id="Descents_img" src="https://potovanja.over.net/wp-content/uploads/2016/04/Stelvio.jpg">'));

		} else if (this.location === "finish") {
			$(`.${this.htmlPrefix}Card`).html(`You've reached the finish, you WIN!`)
			location.reload();
		}


		//set an html element to contain this.location
		//use an if block to set the picture


	}		
}



	// $(".cardOneTL", ".cardTwoTR").html(`.${this.htmlPrefix} has won`);





























