import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo'
import image from "../assets/temp-banner.png";
import MyGallery from "./MyGallery";
import { photos } from "../assets/photos";

const ProjectTemplate = () => {

  const [name] = useState('React');

  const images = [
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
      width: 1875,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
      width: 1669,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="max-w-5xl space-y-10">
        <img src={image} className="object-contain object-center justify-center rounded-lg shadow-2xl" />
        <h1 className="text-6xl font-bold text-center">Project Title</h1>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
        <div className="flex w-full flex-col md:flex-row justify-between space-y-4" >
          <ProjectInfo title="Role"/>
          <ProjectInfo title="Client"/>
          <ProjectInfo title="Tools"/>
          <ProjectInfo title="Year"/>
        </div>
        <MyGallery galleryID="my-test-gallery" images={images} />
      </div>
    </div>
  );
};

export default ProjectTemplate;