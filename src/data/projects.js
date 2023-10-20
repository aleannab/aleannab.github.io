const projects = [
  {
    id: 1,
    name: "Emerging Radiance",
    thumb: "",
    hero: "/assets/em-ra-hero.jpg",
    galleryType: "grid",
    images: [
      { id: 0, src: "/assets/em-ra-00.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 1, src: "/assets/em-ra-01.jpg", width: 2048, height: 1152, caption: "Image 1" },
      { id: 2, src: "/assets/em-ra-02.jpg", width: 2048, height: 1536, caption: "Image 1" },
      { id: 3, src: "/assets/em-ra-03.jpg", width: 1940, height: 1940, caption: "Image 1" },
    ],
    videos: [
      { id: 4, src:"https://player.vimeo.com/video/702912105?h=bf4c10c68"}
    ],
    description: "An “Immersive Memory” experience, Emerging Radiance celebrates the untold stories of Japanese American farmers who were taken from their homes and unjustly incarcerated during WWII. In partnership with Creative Director Tani Ikeda and Muralist Michelle Kumata, Invisible Thread harnessed Augmented Reality’s unrivaled ability to tell location-based stories by weaving together art, animation, archival audio recordings, and immersive technology to create a collection of far-reaching experiences that ultimately continue to give voice to the stories of our past for the generations of tomorrow.\n\nEmerging Radiance won the Tribeca X Award for Best Immersive Experience and is currently being considered for a Peabody Award.",
    details: [
      { id: 5, label: "Company", content: ["Invisible Thread"], link: "https://invisiblethread.com/" },
      { id: 6, label: "Role", content: ["Technical Artist"]},
      { id: 7, label: "Tools", content: ["Spark AR", "Blender"]},
      { id: 8, label: "Client", content: ["ImMEDIAte Justice"], link:"https://immediatejusticeproductions.org/"},
      { id: 9, label: "Year", content:["2022"]},
    ],
  },
  {
    id: 2,
    name: "Kits",
    thumb: "",
    hero: "/assets/kits-hero.jpg",
    galleryType: "phone",
    images: [
      { id: 10, src: "/assets/kits-00.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 11, src: "/assets/kits-01.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 12, src: "/assets/kits-02.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 13, src: "/assets/kits-03.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 14, src: "/assets/kits-04.gif", width: 320, height: 692, caption: "Image 1" },
      { id: 15, src: "/assets/kits-05.gif", width: 320, height: 692, caption: "Image 1" },
    ],
    description: "Kits is a curated collection of thematic 'stickers', consisting of a blend of 2D and 3D augmented reality elements. These stickers were designed for users to embellish their surroundings with imaginative creations.\n\nThese enchanting digital assets added a new dimension to the way users interacted with their surroundings, infusing the ordinary with a touch of the extraordinary and delight.\n\nThis was a fast paced and highly collaborative project. I further brought the stickers to life by creating various physical simulations and procedural animations/shaders.",
    details: [
      { id: 14, label: "Company", content: ["Invisible Thread"], link: "https://invisiblethread.com/" },
      { id: 15, label: "Role", content: ["Technical Artist"]},
      { id: 16, label: "Tools", content: ["Spark AR","Blender"]},
      { id: 17, label: "Client", content: ["Meta"], link:"https://www.meta.com/"},
      { id: 18, label: "Year", content:["2021"]},
    ],
  },
  {
    id: 3,
    name: "The Stein Luminary",
    thumb: "",
    hero: "/assets/lum-hero.jpg",
    galleryType: "grid",
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
    description: "The Stein Luminary is an interactive digital art museum. It was created for the Boise State community to explore creative arts, humanities, technology, and science from around the globe. The space also encourages interdisciplinary collaboration and research-based innovation by featuring exhibitions, performances, and emerging media installations from the community. The Stein Luminary not only showcased art but also embodied the harmonious blend of technology, creativity, and intellectual curiosity.\n\nAs the lead developer on this project, I was responsible for the laying the groundwork for application framework. I collaborated closely with the designer on the UX flows and motion. Our collaboration thrived in an iterative process that enabled the evolution of our project, mirroring the spirit of innovation celebrated within our museum.",
    details: [
      { id: 26, label: "Company", content: ["Downstream"], link: "https://www.downstream.com/"},
      { id: 27, label: "Role", content: ["Lead Developer"]},
      { id: 28, label: "Tools", content: ["C++","OpenGL","DSCinder"]},
      { id: 29, label: "Client", content: ["Boise State University"], link:"https://www.boisestate.edu/luminary/"},
      { id: 30, label: "Year", content:["2021"]},
    ],
  },
  {
    id: 4,
    name: "The Landing",
    thumb: "",
    hero: "/assets/vf-la-hero.jpg",
    galleryType: "grid",
    videos: [
      { id: 31, src:"/assets/vf-la-00.mp4"},
      { id: 32, src:"/assets/vf-la-01.mp4"},
      { id: 33, src:"/assets/vf-la-02.mp4"},
    ],
    description: "The Landing is an interactive floor that redefines the way people engage with their environment. This was created for the headquarters of VF Corporation. The floor was brought to life through a symphony of modes that transitioned with each season. The modes were designed to evoke a unique and captivating experience inspired by the active season.\n\n This was a huge collaborative effort with designers to determine the look and feel of the each mode. This particular project was also heavy on the creative code side, allowing me to create various particle systems and procedural shaders to help transform the ordinary floor into a canvas of digital wonder.",
    details: [
      { id: 34, label: "Company", content: ["Downstream"], link: "https://www.downstream.com/" },
      { id: 35, label: "Role", content: ["Lead Developer"]},
      { id: 36, label: "Tools", content: ["C++","OpenGL","DSCinder"]},
      { id: 37, label: "Client", content: ["VF Corp"], link:"https://www.vfc.com/"},
      { id: 38, label: "Year", content:["2020"]},
    ],
  },
];

export default projects;
