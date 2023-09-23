const projects = [
  {
    id: 1,
    name: "Emerging Radiance",
    thumb: "",
    cover: "cover.jpg",
    images: [
      { id: 1, src: "/assets/em-ra-00.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 2, src: "/assets/em-ra-01.jpg", width: 2048, height: 1152, caption: "Image 1" },
      { id: 3, src: "/assets/em-ra-02.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 4, src: "/assets/em-ra-03.jpg", width: 1940, height: 1940, caption: "Image 1" },
    ],
    description: "An “Immersive Memory” experience, Emerging Radiance celebrates the untold stories of Japanese American farmers who were taken from their homes and unjustly incarcerated during WWII. In partnership with Creative Director Tani Ikeda and Muralist Michelle Kumata, Invisible Thread harnessed Augmented Reality’s unrivaled ability to tell location-based stories by weaving together art, animation, archival audio recordings, and immersive technology to create a collection of far-reaching experiences that ultimately continue to give voice to the stories of our past for the generations of tomorrow.\n\nI was part of Invisible Thread’s technical artist team that brought this creative vision to reality in Spark AR.\n\nEmerging Radiance won the Tribeca X Award for Best Immersive Experience and is currently being considered for a Peabody Award..",
    details: [
      {label: "Role", content: "Technical Artist"},
      {label: "Tools", content: ["Spark AR, Blender"]},
      {label: "Company", content: "Invisible Thread", link: "https://invisiblethread.com/"},
      {label: "Client", content: "ImMEDIAte Justice", link:"https://immediatejusticeproductions.org/"},
      {label: "View", content:"Site", link: "https://www.emergingradiance.co/"},
      {label: "Year", content:"2022"},
    ],
  },
  {
    id: 2,
    name: "AR Stickers",
    thumb: "",
    cover: "cover.jpg",
    images: [
      { id: 1, src: "image1.jpg", caption: "Image 1" },
      { id: 2, src: "image2.jpg", caption: "Image 2" },
    ],
    description: "A variety of themed “stickers” were commissioned by Meta. These kits were a collection of 2D and 3D augmented reality objects to be placed by the user in their current environment. This was a fast paced and highly collaborative project. I was part of Invisible Thread’s technical artist team that integrated 2D and 3D artist assets into Spark AR. I further brought the stickers to life by creating various physical simulations and procedural animations, as well as programming shaders.",
    details: [
      {label: "Role", content: "Technical Artist"},
      {label: "Tools", content: "Spark AR, Blender"},
      {label: "Company", content: "Invisible Thread", link: "https://invisiblethread.com/"},
      {label: "Client", content: "Meta", link:"https://www.meta.com/"},
      {label: "Year", content:"2021"},
    ],
  },
  {
    id: 3,
    name: "Stein Luminary Art Museum",
    thumb: "",
    cover: "cover.jpg",
    images: [
      { id: 1, src: "image1.jpg", caption: "Image 1" },
      { id: 2, src: "image2.jpg", caption: "Image 2" },
    ],
    description: "This is a digital interactive art museum Downstream created for the BSU Art Department. I was the lead developer on this project. I was responsible for the base application framework, and the ambient and panel modes. I collaborated closely with the designer on the UX flows and motion. It was a very iterative process. This was made in C++ and OpenGL using our internal framework DSCinder.",
    details: [
      {label: "Role", content: "Lead Interactive Developer"},
      {label: "Tools", content: "C++, OpenGL, DSCinder"},
      {label: "Company", content: "Downstream", link: "https://www.downstream.com/"},
      {label: "Client", content: "BSU", link:"https://www.meta.com/"},
      {label: "Year", content:"2021"},
      {label: "View", content:"Site", link:"https://www.boisestate.edu/luminary/"},
    ],
  },
  {
    id: 4,
    name: "VF Corp Interactive Landing",
    thumb: "",
    cover: "cover.jpg",
    images: [
      { id: 1, src: "image1.jpg", caption: "Image 1" },
      { id: 2, src: "image2.jpg", caption: "Image 2" },
    ],
    description: "This is an interactive floor Downstream created for VF. I worked on a variety of seasonal modes.  I will highlight three of them here. This particular project was heavy on the creative code side. I had a lot of fun playing with shaders and particle systems. This was also a highly collaborative effort with the designers in determining the final output. This was made in C++ and OpenGL using our internal framework DSCinder.",
    details: [
      {label: "Role", content: "Lead Interactive Developer"},
      {label: "Tools", content: "C++, OpenGL, DSCinder"},
      {label: "Company", content: "Downstream", link: "https://www.downstream.com/"},
      {label: "Client", content: "VF Corp", link:"https://www.vfc.com/"},
      {label: "Year", content:"2020"},
      {label: "View", content:"Press", link:"https://interiordesign.net/projects/rapt-studio-employs-an-outdoorsy-tech-aesthetic-for-vf-corporations-headquarters-in-denver/"},
    ],
  },
  // ...
];

export default projects;
