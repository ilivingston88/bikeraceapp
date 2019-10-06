


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
	{	name: "peleton"
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


///////////////////////////////////////////////////////////

//Classes///////////////////////////////////////////////
//Ask if a classes would be best for 
//players 1 & 2

////////////////////////////////////////////////////////

//Functions///////////////////////////////////////////
//Distance Functions//////////////////////////////////

// function distanceRemaining() {
// 	let distTimer = setInterval(gameCounter, pace * 10);
// }

// function peletonDist() {
	
// }

function pOneDistDisplay() {
	
	let distance = distTrav - totalDistance
	

	let distTimer = setInterval(gameCounter, pace * 10);

		function gameCounter() {
			$(".playerOneDisplayDistance").html(`distance remaining: ${distance--}`);
			if (distance < 0) {
				console.log(`p1 wins`);
				clearInterval(distTimer);
			} 
			
		}
}


// function pTwoDistDisplay() {
// 	//declare function
// 	let pTwoTotalDistance = totalDistance;
// 	pTwoPace;

// 	let distTimer = setInterval(gameCounter, pTwoSpeed * 10);

// 		function gameCounter() {
// 			$(".playerTwoDisplayDistance").html(`P2 distance remaining: ${pTwoDistance--}`);
// 			if (pTwoDistance < 0) {
// 				console.log(`p2 wins`);
// 				clearInterval(distTimer);
// 			} 
			
// }

function pace() {

	$(.attackButton).on('click', (e) => {
		pace = speed * 1.15;
		// stamina === staminaDecrease;

	$(.tempoButton).on('click', (e) => {
		pace = speed;
		// stamina === staminaFreeze;

	$(.recoverButton).on('click', (e) => {
			pace == speed * .85;
			// stamina === staminaIncrease;
	} 
}


function speed() {
	//defining speeds on different terrain
	const speedFlats = 45;
	const speedClimbs = 25;
	const speedDescents = 85;

	if (location === "flats") {
		speed = speedFlats;
	} else if (location === "climbs") {
		speed = speedClimbs;
	} else if (location === "descents") {
		speed = speedDescents;
	}
}


// peletonSpeed() {
// 	if peletonLocation === flats {
// 		peletonSpeed = speedFlats
// 	} else if peletonLocation === climbs {
// 		peletonSpeed = speedClimbs;
// 	} else if peletonLocation === descents {
// 		peletonSpeed === speedDescents;
// 	}
// }





// //function: riderSpeed
// function riderSpeed() {
// 	if (riderLocation = flats) {
// 		riderSpeed = riderFlats
// 	}else if (riderLocation = climbs) {
// 		riderSpeed = riderClimbs
// 	}else if (riderLocation = descents) {
// 		riderSpeed = riderDescents
// 	}

// }



function riderSkills() {

let riderFlats;
let riderClimbs;
let riderDescents;

	//calculating rider speed on flats
	if (location === 'flats') {
		if rider.flats === 5 {
			riderFlats === speedFlats * 1.2
		} 	else if (rider.flats === 4) {
				riderFlats === speedFlats * 1.1 {
		}	else if (rider.flats === 3) {
				riderFlats === speedFlats * 1 {
		}	else if (rider.flats === 2) {
				riderFlats === speedFlats * .9 {
		}	else if (rider.flats === 1) {
				riderFlats === speedFlats * .8 {
		}
   }

		//calculating rider speed on climbs
	else if (location === 'climbs') { 	
		if rider.climbs === 5 {
			riderClimbs === speedClimbs * 1.2
		} 	else if (rider.climbs === 4) {
				riderClimbs === speedClimbs * 1.1 {
		}	else if (rider.climbs === 3) {
				riderClimbs === speedClimbs * 1 {
		}	else if (rider.climbs === 2) {
				riderClimbs === speedClimbs * .9 {
		}	else if (rider.climbs === 1) {
				riderClimbs === speedClimbs * .8 {
		}
	}
		//calculating rider speed on descents
	else if (location === 'descents') 
		if rider.descents === 5 {
			riderDescents === peletonDescents * 1.2
		} 	else if (rider.descents === 4) {
				riderDescents === peletonDescents * 1.1 {
		}	else if (rider.descents === 3) {
				riderDescents === peletonDescents * 1 {
		}	else if (rider.descents === 2) {
				riderDescents === peletonDescents * .9 {
		}	else if (rider.descents === 1) {
				riderDescents === peletonDescents * .8 {
		}
	}

}

//pickRider function///////////////////////////////

//players 1 & 2 select their riders

// function pickRider() {

// }




function riderCardDisplay() {

}




let staminaCounter = setInterval(riderStamina, 1000);

function riderStamina() {
	if (riderLocation === peletonLocation) {
		riderStaminaVar = staminaCounter;
	} else if (riderLocation !== peletonLocation) {
		
		if (staminaDecrease) {
		let riderStaminaVar = staminaCounter * -1;
	 
	 	} else if (staminaFreeze) {
		clearInterval(staminaCounter);
		
		} else if (staminaIncrease) {
		let riderStaminaVar = staminaCounter
		}
	}
}


function riderDisplayStamina() {
	//(staminaBar).html()

}


function declareWinner(winner) {
	alert(`${winner} Has won! Chapeau!`);
	location.reload();
}



