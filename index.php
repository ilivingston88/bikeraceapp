<!DOCTYPE html>
<html>
<head>


	<link rel="stylesheet" type="text/css" href="CSS/style.css">

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	<link href="https://fonts.googleapis.com/css?family=Bungee|Press+Start+2P&display=swap" rel="stylesheet">

	<title>Chapeau!</title>
</head>
		
<body>
∏
	<div class="gamePlayContainer">


		<div class="playerOne">

			<div class="playerOneDisplayRider">P1Rider</div>

			<div class="playerOneCard">
				<div class="cardOneTL">oneTL</div>
				<div class ="cardOneTR">oneTR</div>
				<div class="cardOneBL">oneBL</div>
				<div class="cardOneBR">oneBR</div>
			</div>

			<div class="playerOneStamina">Stamina: </div>
			<div class="playerOneDisplayPace">P1Pace</div>

			<div class="button playerOneButtons">
				<div class="button playerOneAttackButton">P1Attack</div>
				<div class="button playerOneTempoButton">P1Tempo</div>
				<div class="button playerOneRecoverButton">P1Recover</div>
			</div>
			
			<div class="playerOneDisplayDistance">P1Distance</div>

		</div>

	


		<div class="playerTwo">

			<div class="playerTwoDisplayRider">P2Rider</div>

			<div (keydown)="onKeydown($event)" class="playerTwoCard">
				<div class="cardTwoTL">twoTL</div>
				<div class ="cardTwoTR">twoTR</div>
				<div class="cardTwoBL">twoBL</div>
				<div class="cardTwoBR">twoBR</div>
			</div>

			<div class="playerTwoStamina">Stamina</div>
			<div class="playerTwoDisplayPace">P2Pace</div>
			
			<div class="buttons playerTwoButtons">
				<div class="button playerTwoAttackButton">P2Attack</div>
				<div class="button playerTwoTempoButton">P2Tempo</div>
				<div class="button playerTwoRecoverButton">P2Recover</div>
			</div>
			<div class="playerTwoDisplayDistance">P2Distance</div>

		</div>

	</div>




<script src="JS/app.js" type="text/javascript"></script>
</body>
</html>