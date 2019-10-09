

// class Player {
// 	constructor(name, flats, climbs, descents, location) {
// 		this.name = name;
// 		this.flats = flats;
// 		this.climbs = climbs;
// 		this.descents = descents;
// 		this.location = location;
// 	}

// 	// riderSkills() {
// 	// 	if(this.location === 'flats')
// }


// let playerOne = new Player("One");
// let playerTwo = new Player("Two");

// function playGame() {
// 	player1.location = ''
// 	payer1.riderSkills()
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

	{	name: "Peter Sagan",
		flats: 5,
		climbs: 3,
		descents: 5
	}
]


function chooseRider() {

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

	
	 $(".cardOneTL").click(function()
	 {

	 	let riderOnePlayerChoice = ridersArray[0].name;

		$(".cardOneTL").html(``);
		$(".cardOneTR").html(``);
	   	$(".cardOneBL").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoTL").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice}`);
	    $(".cardTwoTL").off("click");

	 });

	 $(".cardOneTR").click(function()
	 {
	 	let riderOnePlayerChoice = ridersArray[1].name;

		$(".cardOneTR").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneBL").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoTR").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice}`);
	    $(".cardTwoTR").off("click");
	});

	$(".cardOneBL").click(function()
	{
		riderOnePlayerChoice = ridersArray[2].name;

		$(".cardOneBL").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneTR").html(``);
	   	$(".cardOneBR").html(``);
	    $(".cardTwoBL").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice}`);
	    $(".cardTwoBL").off("click");
	});

	$(".cardOneBR").click(function()
	{
		riderOnePlayerChoice = ridersArray[3].name;

		$(".cardOneBR").html(``);
		$(".cardOneTL").html(``);
	   	$(".cardOneTR").html(``);
	   	$(".cardOneBL").html(``);
	    $(".cardTwoBR").html(``);
	    $(".playerOneDisplayRider").html(`You are racing as ${riderOnePlayerChoice}`);
	    $(".cardTwoBR").off("click");
	});

	$(".cardTwoTL").click(function()
	{
		let riderTwoPlayerChoice = ridersArray[0].name;

		$(".cardTwoTL").html(``);
		$(".cardTwoTR").html(``);
	   	$(".cardTwoBL").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneTL").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice}`);
	    $(".cardOneTL").off("click");
	});

	$(".cardTwoTR").click(function()
	{
		riderTwoPlayerChoice = ridersArray[1].name;

		$(".cardTwoTR").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoBL").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneTR").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice}`);
	    $(".cardOneTR").off("click");
	});

	$(".cardTwoBL").click(function()
	{
		riderTwoPlayerChoice = ridersArray[2].name;

		$(".cardTwoBL").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoTR").html(``);
	   	$(".cardTwoBR").html(``);
	    $(".cardOneBL").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice}`);
	    $(".cardOneBL").off("click");
	});

	$(".cardTwoBR").click(function()
	{
		riderTwoPlayerChoice = ridersArray[3].name;

		$(".cardTwoBR").html(``);
		$(".cardTwoTL").html(``);
	   	$(".cardTwoTR").html(``);
	   	$(".cardTwoBL").html(``);
	    $(".cardTwoBR").html(``);
	    $(".playerTwoDisplayRider").html(`You are racing as ${riderTwoPlayerChoice}`);
	    $(".cardOneBR").off("click");
	});

}

chooseRider();


	
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




let pPace = speed;
let paceButton;


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



