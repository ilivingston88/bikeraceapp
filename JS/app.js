
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
		riderOnePlayerChoice.climbs);

	let playerTwo = new Player(riderTwoPlayerChoice.name, riderTwoPlayerChoice.flats,
		riderTwoPlayerChoice.climbs)

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
		// this.speed = speed;
		// this.Ppace = Ppace;
		// this.totalDistance = totalDistance;
		// this.distTrav = distTrav;
		// this.distance = distance;
		// this.location = location;
		// this.htmlPrefix = htmlPrefix;
	}
}


function riderSkills(playerOne, playerTwo) {

//riderOterrain needs to become rider.terrain based on rider objects/player classes. 
	flats = 4;
	climbs = 5;
	descents = 2;

const speedFlats = 45;
const speedClimbs = 25;
const speedDescents = 85;

	//calculating rider speed on flats
		if (flats === 5) {
			riderFlats = speedFlats * 1.2
		} 	else if (flats === 4) {
				riderFlats = speedFlats * 1.1;
		}	else if (flats === 3) {
				riderFlats = speedFlats * 1;
		}	else if (flats === 2) {
				riderFlats = speedFlats * .9;
		}	else if (flats === 1) {
				riderFlats = speedFlats * .8 ;
		}
		console.log(`flats: ${riderFlats}`);
   

		//calculating rider speed on climbs
		if (climbs === 5) {
			riderClimbs = speedClimbs * 1.2
		} 	else if (climbs === 4) {
				riderClimbs = speedClimbs * 1.1;
		}	else if (climbs === 3) {
				riderClimbs = speedClimbs * 1;
		}	else if (climbs === 2) {
				riderClimbs = speedClimbs * .9;
		}	else if (climbs === 1) {
				riderClimbs = speedClimbs * .8;
		}
		console.log(`climbs: ${riderClimbs}`);
	
		//calculating rider speed on descents
		if (descents === 5) {
			riderDescents = speedDescents * 1.2
		} 	else if (descents === 4) {
				riderDescents = speedDescents * 1.1;
		}	else if (descents === 3) {
				riderDescents = speedDescents * 1;
		}	else if (descents === 2) {
				riderDescents = speedDescents * .9;
		}	else if (descents === 1) {
				riderDescents = speedDescents * .8;
		}
		console.log(`descents: ${riderDescents}`);
		speed(riderFlats, riderClimbs, riderDescents);
	}




riderSkills();
// // }
function speed(riderFlats, riderClimbs, riderDescents) {
	//defining speeds on different terrain
	

	let location = "flats";

	if (location === "flats") {
		speed = riderFlats;
		console.log(`speed ${speed}`)
	} else if (location === "climbs") {
		speed = riderClimbs;
		console.log(`speed ${speed}`)
	} else if (location === "descents") {
		speed = riderDescents;
		console.log(`speed ${speed}`)
	}
}







	// stamina === staminaDecrease; 
	$(".playerOneAttackButton").on('click', () => {
		pPace = speed * 1.15;
		paceButton = "attack";
		pacing(pPace);
	});


	// stamina === staminaFreeze;
	$(".playerOneTempoButton").on('click', () => {
		pPace = speed; 
		paceButton = "tempo";
		pacing(pPace);
	});

	// stamina === staminaIncrease;
	$(".playerOneRecoverButton").on('click', () => {
		pPace = speed * .85;
		paceButton = "recover";
		pacing(pPace);
	}); 
	


let playerStamina = 100;


function riderDisplayStamina(pPace) {
	
	$(".playerOneStamina").html(`Stamina: ${playerStamina}%`);

	let staminaCounter = setInterval(()=> {

		if (paceButton === "attack" && playerStamina >= 0) {
			$(".playerOneStamina").html(`Stamina: ${playerStamina--}%`);

		} else if (paceButton === "tempo") {
			$(".playerOneStamina").html(`Stamina: ${playerStamina}%`); 
				
		} else if (paceButton === "recover" && playerStamina <= 100) {
				$(".playerOneStamina").html(`Stamina: ${playerStamina++}%`);
				
		}
			
		if (playerStamina === 0){
			$(".playerOneStamina").html(`Stamina: ${playerStamina}%`);
			pPace = speed; 
			paceButton = "tempo";
			pacing(pPace);
			playerStamina++;

		}
	}, 50)
}	

riderDisplayStamina();



function pacing(pPace) {
	pPace = Math.floor(pPace);
	console.log(pPace);
	$(".playerOneDisplayPace").html(`pace: ${pPace}km/h`);
	distanceDisplay(pPace);

}


let totalDistance = 298;
let distance = totalDistance
let distanceInterval;

function distanceDisplay(pPace) {

	let inter = (pPace - 100) * -10;
	clearInterval(distanceInterval);
	distanceInterval = setInterval(()=> {
	
	console.log(`inter = ${inter}`)
	
		if (distance <= 0) {
			clearInterval(distanceInterval);		} 
		$(".playerOneDisplayDistance").html(`distance remaining: ${distance--}`);			
	}, inter);
}




function courseMilanSR(player) {
		let totalDistance = 298;
		let distTrav = totalDistance;
		let location;

		if (distTrav > 0 && distTrav < 100) {
			 location = "flat";
		} else if (distTrav >= 100 && distTrav < 145) {
			location = "climb";
		} else if (distTrav >= 145  && distTrav < 155) {
			 location = "descent";
		} else if (distTrav >= 155 && distTrav < 170) {
			location = "flat";
		} else if (distTrav >= 170 && distTrav < 180) {
			location = "climb";
		} else if (distTrav >= 180 && distTrav < 190) {
			location = "descent";
		} else if (distTrav >= 190 && distTrav < 250) {
			location = "flat";
		} else if (distTrav >= 250 && distTrav < 255) {
			location = "climb";
		} else if (distTrav >= 255 && distTrav < 260) {
			location = "descent";
		} else if (distTrav >= 260 && distTrav < 264) {
			location = "flat";
		} else if (distTrav >= 264 && distTrav < 269) {
			location = "climb";
		} else if (distTrav >= 269 && distTrav < 274) {
			location = "descent";
		} else if (distTrav >= 274 && distTrav < 286) {
			location = "flat";
		} else if (distTrav >= 286 && distTrav < 289) {
			location = "climb";
		} else if (distTrav >= 289 && distTrav < 295) {
			location = "descent";
		} else if (distTrav >= 295 && distTrav < 298) {
			location = "flat";
		} else if (distTrav === totalDistance) {
			//winner is declared
		}

}		






// function declareWinner(winner) {
// 	alert(`${winner} Has won! Chapeau!`);
// 	location.reload();
// }



