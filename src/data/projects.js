const projects = [
  {
    id: 1,
    name: "Emerging Radiance",
    thumb: "",
    hero: "/assets/em-ra-hero.jpg",
    images: [
      { id: 0, src: "/assets/em-ra-00.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 1, src: "/assets/em-ra-01.jpg", width: 2048, height: 1152, caption: "Image 1" },
      { id: 2, src: "/assets/em-ra-02.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 3, src: "/assets/em-ra-03.jpg", width: 1940, height: 1940, caption: "Image 1" },
    ],
    videos: [
      { id: 4, src:"https://player.vimeo.com/video/702912105?h=bf4c10c68"}
    ],
    description: "An “Immersive Memory” experience, Emerging Radiance celebrates the untold stories of Japanese American farmers who were taken from their homes and unjustly incarcerated during WWII. In partnership with Creative Director Tani Ikeda and Muralist Michelle Kumata, Invisible Thread harnessed Augmented Reality’s unrivaled ability to tell location-based stories by weaving together art, animation, archival audio recordings, and immersive technology to create a collection of far-reaching experiences that ultimately continue to give voice to the stories of our past for the generations of tomorrow.\n\nI was part of Invisible Thread’s technical artist team that brought this creative vision to reality in Spark AR.\n\nEmerging Radiance won the Tribeca X Award for Best Immersive Experience and is currently being considered for a Peabody Award..",
    details: [
      { id: 5, label: "Role", content: ["Technical Artist"]},
      { id: 6, label: "Tools", content: ["Spark AR", "Blender"]},
      { id: 7, label: "Company", content: ["Invisible Thread"], link: "https://invisiblethread.com/"},
      { id: 8, label: "Client", content: ["ImMEDIAte Justice"], link:"https://immediatejusticeproductions.org/"},
      { id: 9, label: "Year", content:["2022"]},
    ],
  },
  {
    id: 2,
    name: "AR Stickers",
    thumb: "",
    hero: "/assets/kits-hero.jpg",
    images: [
      { id: 10, src: "/assets/kits-00.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 11, src: "/assets/kits-01.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 12, src: "/assets/kits-02.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 13, src: "/assets/kits-03.gif", width: 320, height: 692, caption: "Image 1" },
    ],
    description: "A variety of themed “stickers” were commissioned by Meta. These kits were a collection of 2D and 3D augmented reality objects to be placed by the user in their current environment. This was a fast paced and highly collaborative project. I was part of Invisible Thread’s technical artist team that integrated 2D and 3D artist assets into Spark AR. I further brought the stickers to life by creating various physical simulations and procedural animations, as well as programming shaders.",
    details: [
      { id: 14, label: "Role", content: ["Technical Artist"]},
      { id: 15, label: "Tools", content: ["Spark AR","Blender"]},
      { id: 16, label: "Company", content: ["Invisible Thread"], link: "https://invisiblethread.com/"},
      { id: 17, label: "Client", content: ["Meta"], link:"https://www.meta.com/"},
      { id: 18, label: "Year", content:["2021"]},
    ],
  },
  {
    id: 3,
    name: "Stein Luminary Art Museum",
    thumb: "",
    hero: "/assets/lum-hero.jpg",
    videos: [
      { id: 19, src:"/assets/lum-00.mp4"},
      { id: 20, src:"/assets/lum-01.mp4"},
      { id: 21, src:"/assets/lum-02.mp4"},
    ],
    images: [
      { id: 22, src:"/assets/lum-03.jpg"},
      { id: 23, src:"/assets/lum-04.jpg"},
      { id: 24, src:"/assets/lum-05.jpg"},
      { id: 25, src:"/assets/lum-06.jpg"},
    ],
    description: "This is a digital interactive art museum Downstream created for the BSU Art Department. I was the lead developer on this project. I was responsible for the base application framework, and the ambient and panel modes. I collaborated closely with the designer on the UX flows and motion. It was a very iterative process. This was made in C++ and OpenGL using our internal framework DSCinder.",
    details: [
      { id: 26, label: "Role", content: ["Lead Developer"]},
      { id: 27, label: "Tools", content: ["C++","OpenGL","DSCinder"]},
      { id: 28, label: "Company", content: ["Downstream"], link: "https://www.downstream.com/"},
      { id: 29, label: "Client", content: ["BSU"], link:"https://www.boisestate.edu/luminary/"},
      { id: 30, label: "Year", content:["2021"]},
    ],
  },
  {
    id: 4,
    name: "VF Corp Interactive Landing",
    thumb: "",
    hero: "/assets/vf-la-hero.jpg",
    videos: [
      { id: 31, src:"/assets/vf-la-00.mp4"},
      { id: 32, src:"/assets/vf-la-01.mp4"},
      { id: 33, src:"/assets/vf-la-02.mp4"},
    ],
    description: "This is an interactive floor Downstream created for VF. I worked on a variety of seasonal modes.  I will highlight three of them here. This particular project was heavy on the creative code side. I had a lot of fun playing with shaders and particle systems. This was also a highly collaborative effort with the designers in determining the final output. This was made in C++ and OpenGL using our internal framework DSCinder.",
    details: [
      { id: 34, label: "Role", content: ["Lead Developer"]},
      { id: 35, label: "Tools", content: ["C++","OpenGL","DSCinder"]},
      { id: 36, label: "Company", content: ["Downstream"], link: "https://www.downstream.com/"},
      { id: 37, label: "Client", content: ["VF Corp"], link:"https://www.vfc.com/"},
      { id: 38, label: "Year", content:["2020"]},
    ],
  },
];

export default projects;
