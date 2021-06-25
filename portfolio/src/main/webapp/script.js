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

window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

async function showWelcomeMessage() {
  const responseFromServer = await fetch("/hello");
  const textFromResponse = await responseFromServer.json();
  console.log(textFromResponse);
  const choice = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];

  const responseContainer = document.getElementById("response-container");
  responseContainer.innerText = choice;
}

function requestTranslation() {
  const text = document.getElementById('text').value;
  const languageCode = document.getElementById('language').value;

  const resultContainer = document.getElementById('result');
  resultContainer.innerText = 'Loading...';

  const params = new URLSearchParams();
  params.append('text', text);
  params.append('languageCode', languageCode);

  fetch('/translate', {
  method: 'POST',
  body: params
  }).then(response => response.text())
  .then((translatedMessage) => {resultContainer.innerText = translatedMessage;
  });
}
