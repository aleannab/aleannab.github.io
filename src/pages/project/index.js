import React, { useState, useEffect } from 'react';
import MyGallery from './gallery';
import './style.css';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, dataportfolio } from '../../content_option';

export const Project = ({}) => {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project that matches the projectId
  const projectData = dataportfolio.find((p) => p.id === parseInt(projectId, 10));
  if (!projectData) {
    // Handle the case where no matching project is found
    return <div>Project not found</div>;
  }

  return (
    <HelmetProvider>
      <Container className="Project-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {projectData.name} | {meta.title}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{projectData.name}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <img src={projectData.hero} alt={projectData.name} />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                {projectData.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex flex-column w-100 flex-md-row justify-content-between gap-5">
            {projectData.details.map((detail) => (
              <div className="d-flex flex-column">
                <h3 className="text-primary font-weight-bold text-uppercase small">{detail.label}</h3>
                <ul className="list-unstyled">
                  {detail.content.map((item, index) => (
                    <li key={index}>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none font-weight-bold text-secondary"
                        >
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Row>
        <Row className="sec_sp">
          {projectData.videos &&
            projectData.videos.length > 0 &&
            projectData.videos.map((video, index) => (
              <div key={video.id} className="d-flex">
                {video.src.startsWith('http') ? (
                  <iframe className="w-100 vh-100" src={video.src} title={`Video ${index}`} allowFullScreen></iframe>
                ) : (
                  <video className="w-100 vh-100" src={video.src} controls></video>
                )}
              </div>
            ))}
        </Row>
        <Row className="sec_sp">
          {projectData.images && projectData.images.length > 0 && (
            <MyGallery galleryID="my-test-gallery" galleryType={projectData.galleryType} images={projectData.images} />
          )}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
