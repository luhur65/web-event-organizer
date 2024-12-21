const Events = [
  {
    title: 'Music Festival',
    date: '2021-07-01',
    location: 'New York',
    description: 'The Music Festival in New York is a one-day event that showcases a wide range of musical talents from various genres. This event will feature a variety of performances from different artists and bands. Attendees can enjoy live music, food stalls, and merchandise booths. The festival aims to bring together music lovers from all over the city for a day of fun and entertainment.',
    category: 'Music'
  }, 
  {
    title: 'Art Exhibition',
    date: '2021-07-02',
    location: 'Los Angeles',
    description: 'The Art Exhibition in Los Angeles is a showcase of contemporary art from local and international artists. This event will feature paintings, sculptures, installations, and other forms of art. Attendees can explore the various exhibits, meet the artists, and purchase artwork. The exhibition aims to promote the arts and provide a platform for artists to share their work with the public.',
    category: 'Art'
  },
  {
    title: 'Food Festival',
    date: '2021-07-03',
    location: 'Chicago',
    description: 'The Food Festival in Chicago is a celebration of food and culinary delights from around the world. This event will feature food stalls, cooking demonstrations, tastings, and more. Attendees can sample a variety of dishes, learn about different cuisines, and enjoy live entertainment. The festival aims to bring together foodies and chefs for a day of gastronomic indulgence.',
    category: 'Food'
  },
  {
    title: 'Tech Conference',
    date: '2021-07-04',
    location: 'San Francisco',
    description: 'The Tech Conference in San Francisco is a gathering of tech enthusiasts, developers, and industry professionals. This event will feature keynote speeches, panel discussions, workshops, and networking opportunities. Attendees can learn about the latest trends in technology, connect with like-minded individuals, and explore new innovations. The conference aims to inspire, educate, and empower the tech community.',
    category: 'Tech'
  }
];

// tampilkan event card
const eventsContainer = document.querySelector('.events');
let number = 2;
Events.forEach(event => {
  const eventCard = document.createElement('article');
  eventCard.classList.add('card');
  eventCard.innerHTML = `
    <img src="https://picsum.photos/id/${number}/600/200" alt="${event.title}">
    <h2>${event.title}</h2>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Description:</strong> ${event.description}</p>
    <p><strong>Category:</strong> ${event.category}</p>
  `;
  eventsContainer.appendChild(eventCard);
  number++;
});

// ambil nilai dari url dan tambahkan class active
const url = window.location.href; console.log(url);
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
    window.location.href = link.href;
  });

  if (url.includes(link.hash)) {
    link.classList.add('active');
  }
});

// tahun dinamis di footer
const year = new Date().getFullYear();
document.querySelector('.year').textContent = year;