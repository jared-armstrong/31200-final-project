fetch('https://api-dot-jarearms-31200-final.uc.r.appspot.com/api/v1/states')
.then(response => response.json())
.then(allStates => {
    renderStates(allStates);
    console.log(allStates)
});

const cardsContainer = document.querySelector('#cards-container');

function renderStates(states) {
    states.forEach(state => {
      // create variables for all elements within the card
      const cardColumn = document.createElement('div');
      const cardInfo = document.createElement('div');
      const image = document.createElement('img');
      const stateName = document.createElement('h3');
      const capitalName = document.createElement('h5');
      const listGroup = document.createElement('ul');
      const landMass = document.createElement('li');
      const majorIndustry = document.createElement('li');
      const touristAttractions = document.createElement('li');
      const statePopulation = document.createElement('li');

      // create classes for all elements
      cardColumn.classList = 'card col';
      image.classList = 'card-img';
      listGroup.classList = 'list-group list-group-flush';
      landMass.classList = 'list-group-item';
      majorIndustry.classList = 'list-group-item';
      touristAttractions.classList = 'list-group-item';
      statePopulation.classList = 'list-group-item';

      // data pulled for each state
      image.src = state.image;
      stateName.innerText = `State: ${state.name}`
      capitalName.innerText =`Capital: ${state.capital}`
      landMass.innerText = `Land Mass: ${state.landmass}`
      majorIndustry.innerText = `Majory Indutries: ${state.majorindustry}`;
      touristAttractions.innerText = `Tourist Attractions: ${state.touristattracitons}`;
      statePopulation.innerText = `Population: ${state.population}`;

      // used appendChild to make sure all elements are inside the cardColumn div and in cardsContiner id
      cardColumn.appendChild(cardInfo);
      cardInfo.appendChild(image);
      cardInfo.appendChild(stateName);
      cardInfo.appendChild(capitalName);
      cardInfo.appendChild(listGroup);
      listGroup.appendChild(landMass);
      listGroup.appendChild(majorIndustry);
      listGroup.appendChild(touristAttractions);
      listGroup.appendChild(statePopulation);
      cardsContainer.appendChild(cardColumn);

    });
};