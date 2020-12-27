import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContentContainer from '../styles/ContentContainer.styled';

import Title from '../components/resume/Title';
import Content from '../components/resume/Content';
import Skill from '../components/resume/Skill';

const Resume = () => {
  return (
    <ContentContainer className="px-3">
      <Row className="pb-5">
        <Col xs="12" md="8">
          {/* employment section */}
          <Title name="Employment">
            <Content
              title="Koding Next"
              subtitle="Front-End Lecturer"
              time="Jul 2020 - Present"
            >
              <ul className="pl-3">
                <li>Teaching Front-end web development for Bootcamp students.</li>
              </ul>
            </Content>

            <Content
              title="Pijak Digital Indonesia"
              subtitle="Full Stack Developer"
              time="Jan 2020 - Dec 2020"
            >
              <ul className="pl-3">
                <li>Developed marketplace website using Node.js and React.js.</li>
                <li>Developed mobile apps using React Native.</li>
                <li>Integrated 3rd parties with marketplace.</li>
                <li>Handled and lead all development process.</li>
              </ul>
            </Content>

            <Content
              title="Red Eye Group"
              subtitle="Software Engineer"
              time="Jul 2019 - Dec 2019"
            >
              <ul className="pl-3">
                <li>Developed marketplace website using Node.js and React.js.</li>
                <li>Developed server-side rendering news portal using Next.js</li>
                <li>Optimized website SEO score.</li>
              </ul>
            </Content>
          </Title>

          {/* education section */}
          <Title name="Education">
            <Content
              title="Hacktiv8 Indonesia"
              subtitle="Fullstack Javascript Immersive Program"
              time="2018 - 2019"
            />
            <Content
              title="Universitas Gunadarma"
              subtitle="Information System"
              time="2013 - 2018"
            />
          </Title>

          {/* volunteering section */}
          <Title name="Volunteering">
            <Content
              title="Markoding"
              subtitle="Mentor"
              time="Feb 2020 - Present"
            >
              <ul className="pl-3">
                <li>Volunteered at a non-profit organization as a mentor for teaching web development to high school students.</li>
              </ul>
            </Content>
          </Title>
        </Col>
        <Col xs="12" md="4">
          <Title name="Programming Languages">
            <Skill name="JavaScript" score={7} />
            <Skill name="Golang" score={3} />
          </Title>
          <Title name="Backend Skills">
            <Skill name="Node.js" score={6} />
            <Skill name="MongoDB" score={5} />
            <Skill name="PostgreSQL" score={5} />
            <Skill name="MySQL" score={5} />
          </Title>
          <Title name="Frontend Skills">
            <Skill name="HTML + CSS" score={6} />
            <Skill name="React" score={6} />
            <Skill name="React Native" score={5} />
            <Skill name="Vue" score={4} />
            <Skill name="GraphQL" score={5} />
          </Title>
          <Title name="Other Skills">
            <Skill name="Git" score={5} />
            <Skill name="GCP" score={4} />
            <Skill name="CI/CD" score={4} />
            <Skill name="Testing" score={3} />
            <Skill name="SEO" score={4} />
            <Skill name="Writing" score={5} />
          </Title>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default React.memo(Resume);
