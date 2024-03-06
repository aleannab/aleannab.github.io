import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { dataabout, meta, worktimeline, skills, services } from '../../content_option';
import TextWithLineBreaks from '../../components/textWithLineBreaks';

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <p>
              <TextWithLineBreaks text={dataabout.aboutme} />
            </p>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec">Creative Tech Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        {data.jobtitle.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div className="skills_" key={i}>
                  <h5 className="skill__title">{data.title}</h5>
                  <p className="skill_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
