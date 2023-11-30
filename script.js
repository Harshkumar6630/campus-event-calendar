document.addEventListener('DOMContentLoaded', function () {
  const eventsContainer = document.getElementById('events');

  // Sample event data (you can replace this with real data)
  const events = [
    { date: '2023-11-12', title: 'Diwali Celebration', description: 'on the ocassion of diwali celebration is going on in campus main playground', dutyleave: 'Duty Leave:Yes', timing: 'Timing| 12:00 PM-05:00 PM ' },
    { date: '2023-11-14', title: 'Children day', description: 'On the occassion of children day a concert will be held in open auditorium', dutyleave: 'Duty Leave:-Yes', timing: 'Timing| 12:00 PM-05:00 PM ' },
    { date: '2023-11-12', title: 'Diwali Celebration', description: 'on the ocassion of diwali celebration is going on in campus main playground', dutyleave: 'Duty Leave:Yes', timing: 'Timing| 12:00 PM-05:00 PM ' },
    { date: '2023-11-12', title: 'Diwali Celebration', description: 'on the ocassion of diwali celebration is going on in campus main playground', dutyleave: 'Duty Leave:Yes', timing: 'Timing| 12:00 PM-05:00 PM ' },
    // Add more events here

  ];

  // Function to display events
  function displayEvents() {
    eventsContainer.innerHTML = ''; // Clear previous events

    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      eventElement.innerHTML = `
        <div class='e1'> <p class='date'><h2> ${formattedDate}</h2></p>
         <p class='title'> ${event.title}</p>
         <p class='description'>${event.description}</p>
         <p class="dl">${event.dutyleave}</p>
         <p class='details'><a target="_blank" href="https://ums.lpu.in/lpuums/LoginNew.aspx">click for more details</a></p></div>
         `;

      eventsContainer.appendChild(eventElement);
    });
  }

  displayEvents();
});
