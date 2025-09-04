import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
if (name === "Adam") {
  // if it's adam...
  ti.output("No way it's Adam");
  
} 
let age = await ti. prompt("What is your age?");
if (age === "16") {
  ti.output("Wow I am 16 too!");  
} else {
  ti.output("That is cool!");
}
ti.output("Do you like mango?")
