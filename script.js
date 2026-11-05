const users = [
  {
    Fullname: "Rahul Sharma",
    image: "https://i.pravatar.cc/300?img=12",
    recognition: "Web Developer",
    bio: "Passionate web developer who loves building modern and responsive websites."
  },
  {
    Fullname: "Priya Singh",
    image: "https://i.pravatar.cc/300?img=47",
    recognition: "UI/UX Designer",
    bio: "Creative designer focused on creating beautiful and user-friendly experiences."
  },
  {
    Fullname: "Amit Kumar",
    image: "https://i.pravatar.cc/300?img=11",
    recognition: "Software Engineer",
    bio: "Software engineer interested in solving real-world problems through technology."
  },
  {
    Fullname: "Sneha Verma",
    image: "https://i.pravatar.cc/300?img=44",
    recognition: "Content Creator",
    bio: "Creating engaging digital content and sharing knowledge with the world."
  },
  {
    Fullname: "Rohit Gupta",
    image: "https://i.pravatar.cc/300?img=13",
    recognition: "Frontend Developer",
    bio: "JavaScript enthusiast who enjoys developing interactive web applications."
  },
  {
    Fullname: "Anjali Patel",
    image: "https://i.pravatar.cc/300?img=45",
    recognition: "Digital Marketer",
    bio: "Helping brands grow through creative marketing strategies and social media."
  },
  {
    Fullname: "Vikash Yadav",
    image: "https://i.pravatar.cc/300?img=14",
    recognition: "Backend Developer",
    bio: "Experienced in building APIs, managing databases, and developing server-side applications."
  },
  {
    Fullname: "Neha Kumari",
    image: "https://i.pravatar.cc/300?img=49",
    recognition: "Graphic Designer",
    bio: "Turning creative ideas into attractive visual designs and illustrations."
  },
];

let sum = ''
users.forEach(function(elem){
    sum = sum + `  
      <div id="card">
            <img src="${elem.image}" alt="">
            <h2>${elem.Fullname}</h2>
            <h3>${elem.recognition}</h3>
            <p>${elem.bio}</p>
        </div>
        `
})
let main = document.querySelector("main")

main.innerHTML = sum