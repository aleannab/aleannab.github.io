import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, dataportfolio } from '../../content_option';

export const Project = ({}) => {
  // Get the projectId from the URL
  const { projectId } = useParams();

  // Find the project that matches the projectId
  const projectData = dataportfolio.find((p) => p.id === projectId);
  if (!projectData) {
    // Handle the case where no matching project is found
    return <div>Project not found</div>;
  }

  return (
    <HelmetProvider>
      <Container className="Project-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Testing | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{projectData.name}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <img src={projectData.img} alt={projectData.name} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
