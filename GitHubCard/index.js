import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/OrlandoDavila
*/
    function angryduck(Bob) {
    axios 
    .get(Bob)
    .then( result => {
      const cards = document.querySelector('.cards');
      const dataResult = result.data;
      cards.appendChild(createComp(dataResult))
    })
  }
    
    
    /*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'avawing',
  'OrlandoDavila'];

  const friendos = followersArray.map(item => {return  `https://api.github.com/users/${item}`})
  friendos.forEach(item => {return angryduck(item)
  })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

  //create DOM elements
function createComp(obj) {
  let card = document.createElement('div')
  let img = document.createElement('img')
  let cardInfo = document.createElement('div')
  let name = document.createElement('h3')
  let userName = document.createElement('p')
  let location = document.createElement('p')
  let prof = document.createElement('p')
  let link = document.createElement('a')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')
  
  //add text content
  name.textContent = obj.name
  userName.textContent = obj.login
  location.textContent = obj.location
  prof.textContent =`Profile: ${obj.html_url}`
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  //give attributes
  card.setAttribute('class','card')
  img.setAttribute('src', obj.avatar_url)
  cardInfo.setAttribute('class', 'card-info')
  link.setAttribute('href', obj.html_url)

  //append
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(prof)
  prof.appendChild(link)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  return card

}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

