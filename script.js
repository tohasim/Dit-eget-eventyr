"use strict";

window.addEventListener("load", init);

//#region CONTROLLER
function init() {
	console.log("init");
	let node0 = createStory();
	displayNode(node0);
}
//#endregion
//#region VIEW
function displayNode(node) {
	document.querySelector("#title").textContent = node.title;
	document.querySelector("#description").textContent = node.description;
	let choices = document.querySelector("#choices");
	choices.innerHTML = "";
	node.choices.forEach((choice) => {
		let button = document.createElement("button");
		button.textContent = choice.name;
		button.addEventListener("click", () => {
			displayNode(choice.node);
		});
		choices.appendChild(button);
	});
}
//#endregion
//#region MODEL
class Node {
	constructor(id, title = "", description = "", choices = []) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.choices = choices;
	}
	addChoice(name, node) {
		this.choices.push({ name: name, node: node });
	}
}

function createStory() {
	let node0 = new Node(
		0,
		"Kat ved døren",
		"Din kat står ved døren og vil gerne ud. Hvad gør du?"
	);
	let node1 = new Node(
		1,
		"Katten forstår ikke menneskesprog",
		"Da katte ikke er af arten Homo Sapiens Sapiens, forstår den ikke de lyde du sender i dens retning. Den miaver videre, og begynder nu også at kradse"
	);
	let node2 = new Node(
		2,
		"Døren er åben",
		"Du åbner døren. Katten der før var meget opsat på at komme ud, kigger forvirret på dig."
	);
	let node3 = new Node(
		3,
		"Katten ignoreres",
		"Katten viste sig at være en manifestering af gud, og dette var en test. Du bestod ikke. "
	);
	let node4 = new Node(
		4,
		"Lokkemad",
		"Du prøver at lokke katten ud med godbidder, katten er overbevist om at det må være en fælde, og går sin vej, den lægger sig ind i sin kurv og drømmer om at være ude, når den nu ikke må for sin ejer."
	);
	let node5 = new Node(
		5,
		"Døren lukkes",
		"Du lukker døren, katten bliver siddende, og kigger på dig mens du sætter dig tilbage til din arbejdsplads. Det viser sig at grunden til at katten ville ud var at du ikke har gjort dens kattebakke rent, den ligger derfor en lort på dit nyvaskede gulv"
	);
	node0.addChoice("Spørg katten om den vil ud", node1);
	node0.addChoice("Åbn døren", node2);
	node1.addChoice("Åbn døren", node2);
	node1.addChoice("Ignorer katten", node3);
	node2.addChoice("Forsøg at lokke katten ud med godbidder", node4);
	node2.addChoice("Luk døren", node5);
	return node0;
}

//#endregion
