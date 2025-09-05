import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Amazing Questionaire");

ti.output("Welcome to the best program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
if (name.toLowerCase().trim() === "adam") {
  // if it's adam...
  ti.output("No way it's Adam");
  
} 
let age = await ti. prompt("What is your age?");
if (age === "16") {
  ti.output("Wow I am 16 too!");  
} else {
  ti.output("So you are " + age);
}
let answer = await ti.prompt("Do you like mango?")
if (answer.toLowerCase().trim() === "yes") {
  ti.output("I like mango too")
  } else {
    ti.output("That is cool!")
  }
ti.outputAnimationLength = 5000;
  let ok = await ti.prompt("Congratulations you have finished the questionaire! Type to proceed")
if (ok.toLowerCase().trim() === "ok") {
  ti.showImage(
  "https://media1.tenor.com/m/AsNi5sYFadoAAAAd/sponge-bob-congratulations.gif"
);
} else {
  ti.showImage(
  "https://media1.tenor.com/m/AsNi5sYFadoAAAAd/sponge-bob-congratulations.gif"
);
}
ti.output("I have a few more questions to ask you")
 ti.showImage(
  ""
 )