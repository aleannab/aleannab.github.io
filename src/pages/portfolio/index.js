import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { dataportfolio, meta } from '../../content_option';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data) =>
            data.externalLink ? (
              <a key={`external-${data.id}`} href={`${data.externalLink}`} target="_blank" rel="noopener noreferrer">
                <div className="po_item">
                  <img src={data.hero} alt="" />
                  <div className="content">
                    <p>{data.name}</p>
                  </div>
                </div>
              </a>
            ) : (
              <Link key={data.id} to={`/projects/${data.id}`} state={{ projectData: data }} className="my-3">
                <div className="po_item">
                  <img src={data.hero} alt="" />
                  <div className="content">
                    <p>{data.name}</p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </Container>
    </HelmetProvider>
  );
};
