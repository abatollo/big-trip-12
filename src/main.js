import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createTripInfoTemplate} from "./view/trip-info.js";
import {createTripFiltersTemplate} from "./view/trip-filters.js";
import {createTripSortTemplate} from "./view/trip-sort.js";
import {createEventEditTemplate} from "./view/event-edit.js";
import {createEventEditDetailsTemplate} from "./view/event-edit-details.js";
import {createEventEditDetailsDestinationTemplate} from "./view/event-edit-details-destination.js";
import {createTripDaysTemplate} from "./view/trip-days.js";
import {createDayElementTemplate} from "./view/day-element.js";
import {createDayInfoElementTemplate} from "./view/day-info-element.js";
import {createTripEventsItemTemplate} from "./view/trip-events-item.js";

const TRIP_EVENTS_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = siteTripMainElement.querySelector(`.trip-controls`);
const siteTripControlsSwitchElement = siteTripControlsElement.querySelector(`h2:first-of-type`);
const siteTripControlsFilterElement = siteTripControlsElement.querySelector(`h2:last-of-type`);

render(siteTripMainElement, createTripInfoTemplate(), `afterbegin`);
render(siteTripControlsSwitchElement, createSiteMenuTemplate(), `afterend`);
render(siteTripControlsFilterElement, createTripFiltersTemplate(), `afterend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);

render(siteTripEventsElement, createTripSortTemplate(), `beforeend`);

render(siteTripEventsElement, createEventEditTemplate(), `beforeend`);

const eventEditElement = siteTripEventsElement.querySelector(`.event--edit`);

render(eventEditElement, createEventEditDetailsTemplate(), `beforeend`);

render(siteTripEventsElement, createTripDaysTemplate(), `beforeend`);

const eventEditDetailsElement = eventEditElement.querySelector(`.event__details`);

render(eventEditDetailsElement, createEventEditDetailsDestinationTemplate(), `beforeend`);

const tripDaysElement = siteTripEventsElement.querySelector(`.trip-days`);

render(tripDaysElement, createDayElementTemplate(), `beforeend`);

const dayElement = tripDaysElement.querySelector(`.day`);

render(dayElement, createDayInfoElementTemplate(), `afterbegin`);

const tripEventList = dayElement.querySelector(`.trip-events__list`);

for (let i = 0; i < TRIP_EVENTS_COUNT; i++) {
  render(tripEventList, createTripEventsItemTemplate(), `afterbegin`);
}
