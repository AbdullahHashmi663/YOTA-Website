
// let data = [
//   {
//     teamName: "Open Source",
//     teamDescription: `In the open-source world, collaboration is at the heart of
//               everything we do. We believe in the power of collective intelligence
//               and the importance of working together to solve complex problems.
//               Our team is committed to fostering an inclusive and supportive
//               atmosphere where every voice is heard, and every idea is valued. By
//               embracing diverse perspectives and leveraging our collective
//               expertise, we drive innovation and create solutions that make a
//               difference.
//               <br /><br />
//               Transparency is a core principle of our approach. We are dedicated
//               to sharing our processes, progress, and challenges openly with the
//               community. This openness not only builds trust but also encourages
//               active participation and feedback from contributors. By maintaining
//               clear and honest communication, we ensure that everyone involved is
//               aligned with our goals and has the opportunity to contribute
//               effectively.
//               <br /><br />
//               Continuous improvement is integral to our philosophy. We are always
//               seeking ways to enhance our projects, refine our processes, and
//               learn from our experiences. This commitment to growth ensures that
//               we remain at the forefront of technological advancements and can
//               adapt to the evolving needs of the community. We encourage a culture
//               of experimentation and learning, where taking calculated risks and
//               learning from setbacks are seen as opportunities for development.
//               <br /><br />
//               Our projects are designed to have a lasting impact, and we measure
//               success not only by the technical achievements but also by the
//               positive change we bring to the community. We aim to create tools
//               and solutions that empower users, drive progress, and address
//               real-world challenges. Your involvement in this mission is crucial,
//               and together, we can achieve extraordinary outcomes.`,
//     teamLead: "Abdullah Hashmi",
//     leadImg: "./image/abdullah-hashmi-modified-1-1.webp",
//     teamMembers: ["M. Saqlain", "Awab Sial", "Shaeel"],
//     memberImgs: [
//       "./image/default_design_a_modern_and_professional_id_icon_for_a_person_3-removebg-preview.webp",
//       "./image/awab-modified.webp",
//       "./image/shaeel-1-modified.webp",
//     ],
//   },
//   {
//     teamName: "Platform Development",
//     teamDescription: `In our team, we tackle complex technical challenges with a commitment to innovation and quality. We embrace a problem-solving mindset, constantly seeking creative and effective solutions to meet the evolving needs of our projects. Each task is an opportunity to apply cutting-edge technologies and methodologies, pushing the boundaries of what’s possible and ensuring that our solutions are both forward-thinking and reliable.
// <br><br>
// Collaboration is central to our success. We believe in the power of teamwork and open communication to drive our projects forward. Our environment encourages sharing ideas, brainstorming solutions, and working together to overcome obstacles. By leveraging the diverse skills and perspectives of our team members, we create a dynamic and synergistic atmosphere that enhances our collective problem-solving abilities.
// <br><br>
// We take pride in our supportive and inclusive environment, where every team member’s contributions are valued. We understand that great ideas can come from anyone, and we encourage an open exchange of thoughts and feedback. Your expertise and insights are crucial to our success, and we are here to support you in achieving your professional goals and making a meaningful impact.`,
//     teamLead: "Shahzaib",
//     leadImg: "./image/shahzaib-modified-PDteam.webp",
//     teamMembers: ["Aizaz", "Ayesha","None"],
//     memberImgs: [
//       "./image/aizaz-member-pd.jpg",
//       "./image/Ayesha-modified-PDteam-member.webp",
//       "./image/default_design_a_modern_and_professional_id_icon_for_a_person_3-removebg-preview.webp",
//     ],
//   },{
//     teamName: "Project Development Team",
//     teamDescription: `In our team, we tackle complex technical challenges with a commitment to innovation and quality. We embrace a problem-solving mindset, constantly seeking creative and effective solutions to meet the evolving needs of our projects. Each task is an opportunity to apply cutting-edge technologies and methodologies, pushing the boundaries of what’s possible and ensuring that our solutions are both forward-thinking and reliable.
// <br><br>
// Collaboration is central to our success. We believe in the power of teamwork and open communication to drive our projects forward. Our environment encourages sharing ideas, brainstorming solutions, and working together to overcome obstacles. By leveraging the diverse skills and perspectives of our team members, we create a dynamic and synergistic atmosphere that enhances our collective problem-solving abilities.
// <br><br>
// We take pride in our supportive and inclusive environment, where every team member’s contributions are valued. We understand that great ideas can come from anyone, and we encourage an open exchange of thoughts and feedback. Your expertise and insights are crucial to our success, and we are here to support you in achieving your professional goals and making a meaningful impact.`,
//     teamLead: "Shahzaib",
//     leadImg: "./image/shahzaib-modified-PDteam.webp",
//     teamMembers: ["Aizaz", "Ayesha","None"],
//     memberImgs: [
//       "./image/aizaz-member-pd.jpg",
//       "./image/Ayesha-modified-PDteam-member.webp",
//       "./image/default_design_a_modern_and_professional_id_icon_for_a_person_3-removebg-preview.webp",
//     ],
//   },
// ];
// function displayTeam(team) {
//   mainSection.innerHTML = `
//     <div id="team-left" class="animate">
//       <h2>${team.teamName} Team</h2>
//       <h3>Welcome To The ${team.teamName} Team</h3>
//       <p>${team.teamDescription}</p>
//     </div>
//     <div id="team-right" class="animate" >
//       <h2>Hierarchy</h2>
//       <div class="lead">
//         <img src="${team.leadImg}" alt="Team Lead" class="team-img lead" />
//         <h3>${team.teamLead}</h3>
//         <h4>Team Lead</h4>
//       </div>
//       <div class="member-container">
//         ${team.teamMembers
//           .map(
//             (member, index) => `
//           <div class="member">
//             <img src="${team.memberImgs[index]}" alt="${member}" class="team-img" />
//             <h3>${member}</h3>
//             <h4>Member</h4>
//           </div>
//         `
//           )
//           .join("")}
//       </div>
//     </div>`;
// }
// var crsr = document.querySelector("#cursor");
// var crsr1 = document.querySelector("#cursor-blur");
// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   crsr1.style.left = dets.x - 125 + "px";
//   crsr1.style.top = dets.y - 125 + "px";
// });

// var h4all = document.querySelectorAll("nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     elem.style.color = "#10ecb99c";
//     crsr.style.scale = 2;
//     crsr.style.border = "1px solid #fff";
//     crsr.style.backgroundColor = "#16D99E";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     elem.style.color = "#fff";
//     crsr.style.border = "0px solid #10ecb99c;";
//     crsr.style.backgroundColor = "#059981";
//   });
// });
// let scrollInterval;

// // Function to start scrolling
// function startScrolling() {
//   // Start scrolling if not already scrolling
//   if (!scrollInterval) {
//     scrollInterval = setInterval(function () {
//       window.scrollBy(0, 3000); // Scroll down by 5 pixels

//       // Stop scrolling if we reach the bottom of the page
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         clearInterval(scrollInterval);
//         scrollInterval = null; // Reset the interval variable
//       }
//     }, 20); // Adjust the speed here (lower means faster)
//   }
// }


let data = [
  {
    teamName: "Open Source",
    teamDescription: `In the open-source world, collaboration is at the heart of
              everything we do. We believe in the power of collective intelligence
              and the importance of working together to solve complex problems.
              Our team is committed to fostering an inclusive and supportive
              atmosphere where every voice is heard, and every idea is valued. By
              embracing diverse perspectives and leveraging our collective
              expertise, we drive innovation and create solutions that make a
              difference.
              <br /><br />
              Transparency is a core principle of our approach. We are dedicated
              to sharing our processes, progress, and challenges openly with the
              community. This openness not only builds trust but also encourages
              active participation and feedback from contributors. By maintaining
              clear and honest communication, we ensure that everyone involved is
              aligned with our goals and has the opportunity to contribute
              effectively.
              <br /><br />
              Continuous improvement is integral to our philosophy. We are always
              seeking ways to enhance our projects, refine our processes, and
              learn from our experiences. This commitment to growth ensures that
              we remain at the forefront of technological advancements and can
              adapt to the evolving needs of the community. We encourage a culture
              of experimentation and learning, where taking calculated risks and
              learning from setbacks are seen as opportunities for development.
              <br /><br />
              Our projects are designed to have a lasting impact, and we measure
              success not only by the technical achievements but also by the
              positive change we bring to the community. We aim to create tools
              and solutions that empower users, drive progress, and address
              real-world challenges. Your involvement in this mission is crucial,
              and together, we can achieve extraordinary outcomes.`,
    teamLead: "Abdullah Hashmi",
    leadImg: "./image/abdullah-hashmi-modified-1-1.webp",
    teamCoLead: "Shaeel Hashmi",
    coleadImg: "./image/shaeel-1-modified.webp",
    teamMembers: ["Awab Sial", "Saqlain Arshad"],
    memberImgs: [
      "./image/awab-modified.webp",
      "./image/default_design_a_modern_and_professional_id_icon_for_a_person_3-removebg-preview.webp"
    ],
  },
  {
    teamName: "Platform Development",
    teamDescription: `In our team, we tackle complex technical challenges with a commitment to innovation and quality. We embrace a problem-solving mindset, constantly seeking creative and effective solutions to meet the evolving needs of our projects. Each task is an opportunity to apply cutting-edge technologies and methodologies, pushing the boundaries of what’s possible and ensuring that our solutions are both forward-thinking and reliable.
<br><br>
Collaboration is central to our success. We believe in the power of teamwork and open communication to drive our projects forward. Our environment encourages sharing ideas, brainstorming solutions, and working together to overcome obstacles. By leveraging the diverse skills and perspectives of our team members, we create a dynamic and synergistic atmosphere that enhances our collective problem-solving abilities.
<br><br>
We take pride in our supportive and inclusive environment, where every team member’s contributions are valued. We understand that great ideas can come from anyone, and we encourage an open exchange of thoughts and feedback. Your expertise and insights are crucial to our success, and we are here to support you in achieving your professional goals and making a meaningful impact.`,
    teamLead: "Shahzaib",
    leadImg: "./image/shahzaib-modified-PDteam.webp",
    teamCoLead: "Aizaz",
    coleadImg: "./image/aizaz-member-pd.jpg",
    teamMembers: ["Ayesha"],
    memberImgs: [
      "./image/Ayesha-modified-PDteam-member.webp",
     
    ],
  },
  {
    teamName: "Project Management",
    teamDescription: `In our team, we tackle the intricacies of planning, organizing, and executing projects with precision and dedication. We adopt a strategic mindset to ensure that every phase of the project runs smoothly, meeting goals and deadlines efficiently. Each task offers an opportunity to refine our methodologies, optimize workflows, and deliver results that align with the broader objectives of our organization.

<br><br>

Collaboration is a cornerstone of our approach. We believe that open communication, careful coordination, and collective problem-solving are essential for driving projects to success. Our team fosters an environment where sharing ideas, offering insights, and brainstorming solutions are encouraged. By valuing the unique strengths and perspectives of each team member, we enhance the quality and effectiveness of our project outcomes.

<br><br>

We cultivate a supportive and organized atmosphere where everyone's contributions are recognized and appreciated. Our team understands that successful project management relies on trust, accountability, and adaptability. We encourage feedback and remain open to new strategies that improve efficiency and effectiveness. Each member’s expertise and dedication play a vital role in the success of our projects.

<br><br>

Our goal is to deliver projects that have a lasting impact, both in terms of quality and value. We measure success not only by timely delivery and completion but also by the positive outcomes our projects bring to the organization and the community. Together, we strive to create solutions that are well-executed, meaningful, and responsive to real-world challenges.`,
    teamLead: "Qurat ul Ain",
    leadImg: "./image/qurat-pmteam-lead.jpg",
    teamCoLead: "Kashmallah Shah",
    coleadImg: "./image/kashmallah-pmteam-colead.jpg",
    teamMembers: ["Khuzaima", "Bisma Rauf"],
    memberImgs: [
      "./image/khuziama-pmteam-member.jpg",
      "./image/bisma-pmteam-member.jpg",
    ],
  },
  {
    teamName: "Competitive Programming",
    teamDescription: `Our Competitive Programming team thrives on tackling algorithmic challenges and honing problem-solving skills. We focus on improving coding efficiency and speed through practice and collaborative learning. Each team member actively engages in preparing for competitions and improving their programming prowess by working on diverse coding problems.
    <br><br>
    Collaboration is key to our success. We engage in regular discussions, practice sessions, and brainstorming to improve our solutions and learn new techniques. Our team encourages constant feedback and mutual support to refine our strategies and develop our problem-solving abilities.
    <br><br>
    We foster a culture of continuous improvement, where learning from failure and embracing challenges is seen as an opportunity to grow. Whether it’s preparing for national or international coding contests, we aim to compete at the highest level, while supporting each other along the way. Our ultimate goal is to push boundaries, innovate, and become proficient in tackling complex algorithmic challenges effectively.`,
    teamLead: "Muhammad Awab Sial",
    leadImg: "./image/awab-cpteam-lead.jpg",
    teamCoLead: "Hassnain Abbas",
    coleadImg: "./image/hassnain-cpteam-coordinator.png",
    teamMembers: ["Fatiha Maryam"],
    memberImgs: [
      "./image/fatiha-cpteam-member.jpg",
    ],},
    {
      teamName: "Media and Marketing",
      teamDescription: `Our Media and Marketing team is dedicated to crafting engaging narratives and building strong connections with our audience. We focus on developing creative strategies, designing impactful content, and utilizing various platforms to effectively communicate our message and promote our initiatives. Each member contributes their unique perspective to ensure our campaigns are innovative, relevant, and resonate with our target audience.
      <br><br>
      Collaboration lies at the heart of our team. We brainstorm ideas, design campaigns, and provide constructive feedback to enhance our outreach efforts. Through open communication and teamwork, we ensure every project is polished, creative, and aligned with our goals. Whether it's managing social media, designing promotional materials, or creating compelling visuals, we work together to maximize engagement and visibility.
      <br><br>
      We foster a culture of creativity, adaptability, and continuous improvement. Our team embraces challenges as opportunities to learn, innovate, and refine our marketing strategies. By staying updated with the latest trends and tools, we aim to elevate our brand presence and deliver meaningful, impactful campaigns. Our ultimate goal is to inspire, inform, and connect with our community, while helping our organization achieve greater reach and recognition.`,
      
      teamLead: "Mahvil",
      leadImg: "./image/mahvil-mmtem-lead.jpg",
      teamCoLead: "Fatimah Asif",
      coleadImg: "./image/default_design_a_modern_and_professional_id_icon_for_a_person_3-removebg-preview.webp",
      teamMembers: ["Arooj","Moheet","Aqib Shah" ],
      memberImgs: [
        "./image/arooj-mmteam-member.jpg",
        "./image/moheet-mmtem-member.jpg",
        "./image/mmteam-member.jpg",
      ],  
  },
  {
    teamName: "Technical Team",
    teamDescription: `Our Technical Team is driven by a passion for innovation, problem-solving, and delivering high-quality solutions. We focus on leveraging the latest technologies, developing robust systems, and ensuring smooth technical operations for all our projects. Each team member plays a crucial role in building, maintaining, and enhancing our technological infrastructure, pushing the boundaries of what's possible through code and engineering excellence.
    <br><br>
    Collaboration is the foundation of our success. We encourage knowledge-sharing, regular discussions, and peer-to-peer learning to solve challenges efficiently. Our team thrives on brainstorming sessions and code reviews, ensuring that every solution is well-architected, optimized, and reliable. By combining our diverse skills, we build an environment where continuous learning and innovation flourish.
    <br><br>
    We believe in continuous improvement and adaptability. Staying up-to-date with emerging technologies and best practices is central to our mission. Our team is always ready to take on challenges, learn from setbacks, and refine our processes to achieve excellence. Whether it’s developing web applications, managing databases, or troubleshooting technical issues, we aim to provide reliable and forward-thinking solutions that empower our organization to succeed.`,
    
    teamLead: "Samia Talib",
    leadImg: "./image/samia-tdteam-lead.jpg",
    teamCoLead: "Saad Sohail",
    coleadImg: "./image/saad-tdteam-colead.jpg",
    teamMembers: ["Wajahat Ali Tariq", "Aleena Basit"],
    memberImgs: [
      "./image/wajahat-tdteam-member.jpg",
      "./image/aleena-tdtem-member.jpg"
    ],
}

  
  
];


let mainSection = document.querySelector("#teams-section");
let teamBar = document.querySelector("#teamsBar");
let team = data[0];
let osBtn = document.querySelector("#osBtn");
let pdBtn = document.querySelector("#pdBtn");
let pmBtn = document.querySelector("#pmBtn");
let cpBtn = document.querySelector("#cpBtn");
let mmBtn = document.querySelector("#mmBtn");
let tdBtn = document.querySelector("#tdBtn");
displayTeam(data[0]);
osBtn.addEventListener("click", () => {
  displayTeam(data[0]);
});

pdBtn.addEventListener("click", () => {
  displayTeam(data[1]);
});

pmBtn.addEventListener("click", () => {
  displayTeam(data[2]);
});

cpBtn.addEventListener("click", () => {
  displayTeam(data[3]);
});

mmBtn.addEventListener("click", () => {
  displayTeam(data[4]);
});

tdBtn.addEventListener("click", () => {
  displayTeam(data[5]);
});

function displayTeam(team) {
  mainSection.innerHTML = `
    <div id="team-left" class="animate">
      <h2>${team.teamName} Team</h2>
      <h3>Welcome To The ${team.teamName} Team</h3>
      <p>${team.teamDescription}</p>
    </div>
    <div id="team-right" class="animate">
      <h2>Hierarchy</h2>
      <div class="lead-colead-container">
        <div class="lead">
          <img src="${team.leadImg}" alt="Team Lead" class="team-img" />
          <h3>${team.teamLead}</h3>
          <h4>Team Lead</h4>
        </div>
        <div class="colead">
          <img src="${team.coleadImg}" alt="Co-Lead" class="team-img" />
          <h3>${team.teamCoLead}</h3>
          <h4>Co-Lead</h4>
        </div>
      </div>
      <div class="member-container">
        ${
          team.teamMembers.length > 0
            ? team.teamMembers
                .map(
                  (member, index) => `
            <div class="member">
              <img src="${team.memberImgs[index]}" alt="${member}" class="team-img" />
              <h3>${member}</h3>
              <h4>Member</h4>
            </div>`
                )
                .join("")
            : `<p>No team members assigned yet.</p>`
        }
      </div>
    </div>`;
}


// function displayTeam(team) {
//   mainSection.innerHTML = `
//     <div id="team-left" class="animate">
//       <h2>${team.teamName} Team</h2>
//       <h3>Welcome To The ${team.teamName} Team</h3>
//       <p>${team.teamDescription}</p>
//     </div>
//     <div id="team-right" class="animate">
//       <h2>Hierarchy</h2>
//       <div class="lead-colead-container">
//         <div class="lead">
//           <img src="${team.leadImg}" alt="Team Lead" class="team-img" />
//           <h3>${team.teamLead}</h3>
//           <h4>Team Lead</h4>
//         </div>
//         <div class="colead">
//           <img src="${team.coleadImg}" alt="Co-Lead" class="team-img" />
//           <h3>${team.teamCoLead}</h3>
//           <h4>Co-Lead</h4>
//         </div>
//       </div>
//       <div class="member-container">
//         ${team.teamMembers
//           .map(
//             (member, index) => `
//           <div class="member">
//             <img src="${team.memberImgs[index]}" alt="${member}" class="team-img" />
//             <h3>${member}</h3>
//             <h4>Member</h4>
//           </div>
//         `
//           )
//           .join("")}
//       </div>
//     </div>`;
// }

