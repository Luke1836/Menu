const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  // Elements
  const img = document.getElementById("img-person");
  const name = document.getElementById("author");
  const info = document.getElementById("content");
  const job = document.getElementById("job");

  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".previous-btn");
  const randomBtn = document.querySelector(".random-btn");

  //Set the current item
  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
  });

  //Show the details
  function showPerson(person)
  {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

  }
  nextBtn.addEventListener('click', function() {
    if(currentItem != 4)
        currentItem ++;
    else
        currentItem = 0;
    showPerson(currentItem);
  });

  prevBtn.addEventListener('click', function() {
    if(currentItem != 0)
        currentItem --;
    else    
        currentItem = 4;
    showPerson(currentItem);
  });

  randomBtn.addEventListener('click', function() {
    showPerson(Math.floor(Math.random()*4));
  });