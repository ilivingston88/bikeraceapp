

// class Player {
// 	constructor(name, flats, climbs, descents, location) {
// 		this.name = name;
// 		this.flats = flats;
// 		this.climbs = climbs;
// 		this.descents = descents;
// 		this.location = location;
// 	}

// 	riderSkills() {
// 		if(this.location === 'flats')...
// 	}
// }

// function playGame() {
// 	player1.location = ''
// 	payer1.riderSkills()
// }


//Objects///////////////////////////////////////////////////
//Course//////////////////////////////////////////
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


//Riders

// const playerOneRider {

//

// const playerTwoRider {

// }

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
]

const peletonArray = [
	{	name: "peleton",
		flats: 3,
		climbs: 3,
		descents: 3
	}
]
//Variables////////////////////////////////////////////////

//Display Variables////////////////////
//variables displayed on game screen///

//Card Variables
//Cards//////

//playerOneCard
// let pOneCard;


// //playerTwoCard
// let pTwoCard;

// //Images//////

// //class playerOneCardImage
// let pOneCardImage;

// //class playerTwoCardImage
// let pTwoCardImage;

// //class playerOneCardDescription
// let pOneCardDescr

// //class playerTwoCardDescription
// let pTwoCardDescr

// //Variables//////////////////////////////////////////////////


// //Riders
// //class playerOneDisplayRider
// let pOneDispRider;

// //class playerTwoDisplayRider
// let pTwoDispRider;

// //Variables/////////////////////////////////////////////


// //Stamina Counters//////////

// //class playerOneStamina
// let pOneStaminaCounter;

// //class playerTwoStamina
// let pTwoStaminaCounter;

// //Variables//////////////////////////////////////////////

// //Pace Display
// //class playerOneDisplaySpeed
// let pOneDispSpeed;

// //class playerTwoDisplaySpeed
// let pTwoDispSpeed

// //Variables/////////////////////////////////////////////

// //Pace Buttons//////////////////
// //html class playerOnePaceAttack
// let pOneAttackButton;

// //class playerTwoPaceAttack
// let pTwoAttackButton;

// //class playerOnepaceTempo
// let pOneTempoButton;

// //class playerTwoPaceTempo
// let pTwoTempoButton;

// //class playerOnePaceRecover
// let pOneRecoverButton;

// //class PlayerTwoPaceRecover
// let pTwoRecoverButton;

// //Variables////////////////////////////////////////////
// //Display Distance////////////////

// //class playerOneDisplayDistance
// let playerOneDisplayDist

// //class playerTwoDisplayDistance
// let playerTwoDisplayDist
// function startGame () {
// 	const startInterval = setInterval(() => {

// 	}, )
// }
	
function riderSkills(flats, climbs, descents) {

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


let playerStamina = 100;
let pPace = speed;
let paceButton;

	$(".attackButton").on('click', () => {
		if (playerStamina > 10) {
			pPace = speed * 1.15;
			paceButton = "attack";
			pacing(pPace);
		}
	});


		// stamina === staminaFreeze;
	$(".tempoButton").on('click', () => {
		pPace = speed; 
		paceButton = "tempo";
		console.log(`pPace ${pPace}`);
		pacing(pPace);
	});

		// stamina === staminaIncrease;
	$(".recoverButton").on('click', () => {
		pPace = speed * .85;
		paceButton = "recover";
		console.log(`pPace ${pPace}`);
		pacing(pPace);
	}); 


function pacing(pPace) {
	pPace = Math.floor(pPace);
	console.log(pPace);
	$(".playerOneDisplayPace").html(`pace: ${pPace}km/h`);
	pOneDistDisplay(pPace);

}

let totalDistance = 298;
let distance = totalDistance
let distanceInterval;

function pOneDistDisplay(pPace) {

	let inter = (pPace - 100) * -10;
	clearInterval(distanceInterval);
	distanceInterval = setInterval(()=> {
	
	console.log(`inter = ${inter}`)
	
		if (distance <= 0) {
			clearInterval(distanceInterval);		} 
		$(".playerOneDisplayDistance").html(`distance remaining: ${distance--}`);			
	}, inter);
}




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
			

		}
	}, 50)
}	

riderDisplayStamina();


// function declareWinner(winner) {
// 	alert(`${winner} Has won! Chapeau!`);
// 	location.reload();
// }



