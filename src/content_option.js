const logo = {
  text: 'A B-C',
  img: '/assets/logo.svg',
};
const meta = {
  title: 'Antoinette Bumatay-Chan',
  description: 'I’m Antoinette - a creative developer living in the space between art and technology.',
};

const introdata = {
  title: "Hi! I'm Antoinette.",
  animated: {
    first: "I'm a creative developer.",
  },
  description:
    'I have eight years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls.\n\n Ultimately, I love combining my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy, movement, and play.',
  your_img_url: '/assets/prickly-blooms.png',
};

const dataabout = {
  title: "Hi! I'm Antoinette",
  aboutme:
    'I have eight years of professional experience bringing concepts to reality in varying scales of interactive media, from intimate augmented reality storytelling on a phone screen to navigating collections of art projected on massive touch film walls. Ultimately, I love combining my interests of art and technology to create beautiful captivating experiences that inspire curiosity, joy, movement, and play.',
};
const worktimeline = [
  {
    jobtitle: 'Technical Artist',
    where: 'Invisible Thread',
    date: '2021 - 2022',
  },
  {
    jobtitle: 'Lead Interactive Developer',
    where: 'Downstream',
    date: '2019 - 2021',
  },
  {
    jobtitle: 'Interactive Developer',
    where: 'Downstream',
    date: '2016 - 2019',
  },
  {
    jobtitle: 'New Technology Group Intern',
    where: 'Walt Disney World',
    date: '2015',
  },
  {
    jobtitle: 'Creative Technologist Intern',
    where: 'AKQA',
    date: '2015',
  },
  {
    jobtitle: 'M.S. Visualization Student',
    where: 'Texas A&M University',
    date: '2013 - 2015',
  },
  {
    jobtitle: 'Graduate Research Assistant\n• Soft Interaction Lab',
    where: 'Texas A&M University',
    date: '2014 - 2015',
  },
  {
    jobtitle: 'Graduate Teaching Assistant\n• Digital Image\n• Image Synthesis\n• Interactive Performance and Technology',
    where: 'Texas A&M University',
    date: '2013 - 2014',
  },
];

const skills = [
  {
    title: 'Programming',
    description: 'C++, OpenGL, Cinder, HTML5/CSS, JavaScript, React.js, Git',
  },
  {
    title: 'Software',
    description: 'Visual Studio, Spark AR, Adobe Creative Suite, Figma',
  },
  {
    title: 'Interests',
    description: 'interactive design, creative code, shaders, 3d generalist',
  },
];

const services = [
  {
    title: 'UI & UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
  {
    title: 'Mobile Apps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
  {
    title: 'Wordpress Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
  },
];

const dataportfolio = [
  {
    id: 1,
    name: 'Emerging Radiance',
    square: '/assets/em-ra-square.jpg',
    hero: '/assets/em-ra-hero-1x.jpg',
    hero2x: '/assets/em-ra-hero-2x.jpg',
    galleryType: 'grid',
    images: [
      {
        id: 0,
        src: '/assets/em-ra-00-1x.jpg',
        src2x: '/assets/em-ra-00-2x.jpg',
        src3x: '/assets/em-ra-00-3x.jpg',
        width: 2048,
        height: 1536,
        caption: 'Mural at Facebook Washington HQ',
      },
      {
        id: 1,
        src: '/assets/em-ra-01-1x.jpg',
        src2x: '/assets/em-ra-01-2x.jpg',
        src3x: '/assets/em-ra-01-3x.jpg',
        width: 2048,
        height: 1152,
        caption: 'Farmhouse Exhibit at Bellevvue Arts Museum',
      },
      {
        id: 2,
        src: '/assets/em-ra-02-1x.jpg',
        src2x: '/assets/em-ra-02-2x.jpg',
        src3x: '/assets/em-ra-02-3x.jpg',
        width: 2048,
        height: 1536,
        caption: 'man and daughters holding up phone to view AR story',
      },
      {
        id: 3,
        src: '/assets/em-ra-03-1x.jpg',
        src2x: '/assets/em-ra-03-2x.jpg',
        src3x: '/assets/em-ra-03-3x.jpg',
        width: 1940,
        height: 1940,
        caption: 'Seed packet with QR code to AR experience',
      },
    ],
    videos: [{ id: 4, src: 'https://player.vimeo.com/video/702912105?h=bf4c10c68' }],
    description:
      'An “Immersive Memory” experience, Emerging Radiance celebrates the untold stories of Japanese American farmers who were taken from their homes and unjustly incarcerated during WWII. In partnership with Creative Director Tani Ikeda and Muralist Michelle Kumata, Invisible Thread harnessed Augmented Reality’s unrivaled ability to tell location-based stories by weaving together art, animation, archival audio recordings, and immersive technology to create a collection of far-reaching experiences that ultimately continue to give voice to the stories of our past for the generations of tomorrow.\n\nEmerging Radiance won the Tribeca X Award for Best Immersive Experience and is currently being considered for a Peabody Award.',
    details: [
      { id: 5, label: 'Company', content: ['Invisible Thread'], link: 'https://invisiblethread.com/' },
      { id: 6, label: 'Role', content: ['Technical Artist'] },
      { id: 7, label: 'Tools', content: ['Spark AR', 'Blender'] },
      { id: 8, label: 'Client', content: ['ImMEDIAte Justice'], link: 'https://immediatejusticeproductions.org/' },
      { id: 9, label: 'Year', content: ['2022'] },
    ],
  },
  {
    id: 2,
    name: 'Kits',
    square: '/assets/kits-square.jpg',
    hero: '/assets/kits-hero-1x.jpg',
    hero2x: '/assets/kits-hero-2x.jpg',
    galleryType: 'phone',
    images: [
      { id: 10, src: '/assets/kits-00.gif', width: 320, height: 692, caption: 'AR fishing rod reeling in fish from puddle in the middle of a road' },
      { id: 11, src: '/assets/kits-01.gif', width: 320, height: 692, caption: 'Bigfoot and forest friends peeking out from around the corner' },
      {
        id: 12,
        src: '/assets/kits-02.gif',
        width: 320,
        height: 692,
        caption: 'AR treats (boba tea, cupcakes, candy, and ice cream) float upwards like bubbles then pop',
      },
      { id: 13, src: '/assets/kits-03.gif', width: 320, height: 692, caption: 'AR elephant cools down with a fan' },
      { id: 14, src: '/assets/kits-04.gif', width: 320, height: 692, caption: 'AR heart shaped fern leaves surrounding a real life plant' },
      { id: 15, src: '/assets/kits-05.gif', width: 320, height: 692, caption: 'AR snake plant comes to life' },
    ],
    description:
      "Kits is a curated collection of thematic 'stickers', consisting of a blend of 2D and 3D augmented reality elements. These stickers were designed for users to embellish their surroundings with imaginative creations.\n\nThese enchanting digital assets added a new dimension to the way users interacted with their surroundings, infusing the ordinary with a touch of the extraordinary and delight.\n\nThis was a fast paced and highly collaborative project. I further brought the stickers to life by creating various physical simulations and procedural animations/shaders.",
    details: [
      { id: 16, label: 'Company', content: ['Invisible Thread'], link: 'https://invisiblethread.com/' },
      { id: 17, label: 'Role', content: ['Technical Artist'] },
      { id: 18, label: 'Tools', content: ['Spark AR', 'Blender'] },
      { id: 19, label: 'Client', content: ['Meta'], link: 'https://www.meta.com/' },
      { id: 20, label: 'Year', content: ['2021'] },
    ],
  },
  {
    id: 3,
    name: 'The Stein Luminary',
    square: '/assets/lum-square.jpg',
    hero: '/assets/lum-hero-1x.jpg',
    hero2x: '/assets/lum-hero-2x.jpg',
    galleryType: 'grid',
    videos: [
      { id: 21, src: '/assets/lum-00.mp4' },
      { id: 22, src: '/assets/lum-01.mp4' },
      { id: 23, src: '/assets/lum-02.mp4' },
    ],
    images: [
      {
        id: 24,
        src: '/assets/lum-03-1x.jpg',
        src2x: '/assets/lum-03-2x.jpg',
        src3x: '/assets/lum-03-4x.jpg',
        width: 4032,
        height: 3024,
        caption: 'Inside the Luminary, students walk around art exhibit featuring eyes of various paintings',
      },
      {
        id: 25,
        src: '/assets/lum-04-1x.jpg',
        src2x: '/assets/lum-04-2x.jpg',
        src3x: '/assets/lum-04-2x.jpg',
        width: 768,
        height: 1024,
        caption: 'Students browse the Luminary panels to discover art around the world',
      },
      {
        id: 26,
        src: '/assets/lum-05-1x.jpg',
        src2x: '/assets/lum-05-2x.jpg',
        src3x: '/assets/lum-05-4x.jpg',
        width: 3024,
        height: 4032,
        caption: 'Group of people watch lecture given within the Luminary',
      },
      {
        id: 27,
        src: '/assets/lum-06-1x.jpg',
        src2x: '/assets/lum-06-2x.jpg',
        src3x: '/assets/lum-06-4x.jpg',
        width: 4032,
        height: 3024,
        caption: 'Students combine two portraits into one using neighboring panels',
      },
    ],
    description:
      'The Stein Luminary is an interactive digital art museum. It was created for the Boise State community to explore creative arts, humanities, technology, and science from around the globe. The space also encourages interdisciplinary collaboration and research-based innovation by featuring exhibitions, performances, and emerging media installations from the community. The Stein Luminary not only showcased art but also embodied the harmonious blend of technology, creativity, and intellectual curiosity.\n\nAs the lead developer on this project, I was responsible for the laying the groundwork for application framework. I collaborated closely with the designer on the UX flows and motion. Our collaboration thrived in an iterative process that enabled the evolution of our project, mirroring the spirit of innovation celebrated within our museum.',
    details: [
      { id: 28, label: 'Company', content: ['Downstream'], link: 'https://www.downstream.com/' },
      { id: 29, label: 'Role', content: ['Lead Developer'] },
      { id: 30, label: 'Tools', content: ['C++', 'OpenGL', 'DSCinder'] },
      { id: 31, label: 'Client', content: ['Boise State University'], link: 'https://www.boisestate.edu/luminary/' },
      { id: 32, label: 'Year', content: ['2021'] },
    ],
  },
  {
    id: 4,
    name: 'The Landing',
    square: '/assets/vf-la-square.jpg',
    hero: '/assets/vf-la-hero-1x.jpg',
    hero2x: '/assets/vf-la-hero-2x.jpg',
    galleryType: 'grid',
    videos: [
      { id: 33, src: '/assets/vf-la-00.mp4' },
      { id: 34, src: '/assets/vf-la-01.mp4' },
      { id: 35, src: '/assets/vf-la-02.mp4' },
    ],
    description:
      'The Landing is an interactive floor that redefines the way people engage with their environment. This was created for the headquarters of VF Corporation. The floor was brought to life through a symphony of modes that transitioned with each season. The modes were designed to evoke a unique and captivating experience inspired by the active season. The visuals would respond to the footsteps of people walking across the floor.\n\n This was a huge collaborative effort with designers to determine the look and feel of the each mode. This particular project was also heavy on the creative code side, allowing me to create various particle systems and procedural shaders to help transform the ordinary floor into a canvas of digital wonder.',
    details: [
      { id: 36, label: 'Company', content: ['Downstream'], link: 'https://www.downstream.com/' },
      { id: 37, label: 'Role', content: ['Lead Developer'] },
      { id: 38, label: 'Tools', content: ['C++', 'OpenGL', 'DSCinder'] },
      { id: 39, label: 'Client', content: ['VF Corp'], link: 'https://www.vfc.com/' },
      { id: 40, label: 'Year', content: ['2020'] },
    ],
  },
  {
    id: 5,
    hero: '/assets/prickly-blooms.png',
    name: 'Creative Code Sketchbook.',
    externalLink: 'https://www.instagram.com/antoinette.creates',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'ant.bchan@gmail.com',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ',
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};

const socialprofils = {
  github: 'https://github.com/aleannab',
  linkedin: 'https://www.linkedin.com/in/antbchan/',
  instagram: 'https://instagram.com/antoinette.creates',
};
export { meta, dataabout, dataportfolio, worktimeline, skills, services, introdata, contactConfig, socialprofils, logo };
