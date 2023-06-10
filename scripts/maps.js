const eventSearchInput = document.getElementById('event-search');
const searchButton = document.getElementById('search-btn');
const searchResultsList = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
  const searchTerm = eventSearchInput.value.toLowerCase();

  // Clear any previous search results
  while (searchResultsList.firstChild) {
    searchResultsList.removeChild(searchResultsList.firstChild);
  }

  // Loop through all the events in the events list
  for (const eventItem of eventsList) {
    const title = eventItem.title.toLowerCase();
    const date = eventItem.date.toLowerCase();
    const location = eventItem.location.toLowerCase();
    const description = eventItem.description.toLowerCase();

    // Check if any of the event properties match the search term
    if (title.includes(searchTerm) || date.includes(searchTerm) || location.includes(searchTerm) || description.includes(searchTerm)) {
      // If there's a match, create a new list item and add it to the search results list
      const searchResultItem = document.createElement('li');
      const eventTitle = document.createElement('h3');
      const eventDate = document.createElement('p');
      const eventLocation = document.createElement('p');
      const eventDescription = document.createElement('p');

      eventTitle.textContent = eventItem.title;
      eventDate.textContent = `Event Date: ${eventItem.date}`;
      eventLocation.textContent = `Location: ${eventItem.location}`;
      eventDescription.textContent = `Description: ${eventItem.description}`;

      searchResultItem.appendChild(eventTitle);
      searchResultItem.appendChild(eventDate);
      searchResultItem.appendChild(eventLocation);
      searchResultItem.appendChild(eventDescription);

      searchResultsList.appendChild(searchResultItem);
    }
  }

  // If there are no search results, display a message
  if (searchResultsList.childElementCount === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    searchResultsList.appendChild(noResultsMessage);
  }

  
});


const addEventForm = document.querySelector('#add-event form');
const addEventButton = document.querySelector('#add-event button');
const eventsList = [];
 addEventButton.addEventListener('click', (event) => {
  event.preventDefault();
   const eventTitle = addEventForm.querySelector('#event-title').value;
  const eventDate = addEventForm.querySelector('#event-date').value;
  const eventLocation = addEventForm.querySelector('#event-location').value;
  const eventDescription = addEventForm.querySelector('#event-description').value;
   // Create a new event object and add it to the events list
  const newEvent = {
    title: eventTitle,
    date: eventDate,
    location: eventLocation,
    description: eventDescription
  };
   eventsList.push(newEvent);
   // Clear the form fields
  addEventForm.reset();
});