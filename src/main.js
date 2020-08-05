"use strict";

const createSiteMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = siteTripMainElement.querySelector(`.trip-controls`);
const siteTripControlsSwitchElement = siteTripControlsElement.querySelector(`h2:first-of-type`);

render(siteTripControlsSwitchElement, createSiteMenuTemplate(), `afterend`);
