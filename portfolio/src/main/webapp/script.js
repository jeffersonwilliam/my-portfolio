// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
// function addRandomGreeting() {
//   const greetings =
//       ['Winter is coming', "DNA doesn't make a family. Love does.", 'When you play the Game of Thrones, you win or you die'];

//   // Pick a random greeting.
//   const greeting = greetings[Math.floor(Math.random() * greetings.length)];

//   // Add it to the page.
//   const greetingContainer = document.getElementById('greeting-container');
//   greetingContainer.innerText = greeting;
// }

window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

/** Fetches the current date from the server and adds it to the page. */
// async function showWelcomeMessage() {
//   const responseFromServer = await fetch('/hello');
//   const textFromResponse = await responseFromServer.json();

//   const helloContainer = document.getElementById('hello-container');
//   helloContainer.innerText = textFromResponse;

// //   helloContainer.innerHTML = '';

// //   reply.html = ' ';  

//   const rand = Math.floor((Math.random() * 3) + 1);

//   if (rand == 1){
//     helloContainer.innerText = 'Name: ' + textFromResponse.Name
//   }
//   else if (rand == 2){
//     helloContainer.innerText = 'Height: ' + reply.height
//   }
//   else{
//     helloContainer.innerText = 'Color: ' + reply.color
//   }
// }



async function showWelcomeMessage() {
    const responseFromServer = await fetch("/hello");
    const textFromResponse = await responseFromServer.json();
    // console.log(textFromResponse);
    const choice = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];

    const responseContainer = document.getElementById("response-container");
    responseContainer.innerText = choice;
}