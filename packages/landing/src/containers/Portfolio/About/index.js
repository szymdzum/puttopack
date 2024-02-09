import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import ProcessItem from './process.style';
import { PROCESS_STEPS } from 'common/data/Portfolio/data';

const AboutSection = ({
  sectionWrapper,
  sectionTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  sectionTitleWrapper,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="about_section">
      <Container noGutter mobileGutter width="1200px">

          <Box {...sectionTitleWrapper}>
            <Heading {...sectionTitle} content="Prosta ścieżka do spełnienia wymogów zrównoważonego rozwoju" />
            <Text {...secDescription} content="Puttopack pomaga przedsiębiorcom w zakresie dokumentowania ilości wprowadzonych produktów i odpadów oraz wypełniania wymogów prawnych związanych z recyklingiem i gospodarką odpadami. Specjalizujemy się w takich obszarach jak:" />
          </Box>

          <Box {...processRow}>
            {PROCESS_STEPS.map((item, index) => (
              <Box
                {...processCol}
                key={`process-item-${index}`}
                className="process_item_col"
              >
                <ProcessItem className="process_item">
                  <NextImage
                    src={item.image}
                    alt={`process-image-${index + 1}`}
                    {...processImageStyle}
                  />
                  <Heading content={item.title} {...processTitleStyle} />
                  <Text content={item.description} {...processDescriptionStyle} />
                </ProcessItem>
              </Box>
            ))}
          </Box>
      </Container>
    </Box>
  );
};

AboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  sectionTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  sectionTitleWrapper: PropTypes.object,
};

AboutSection.defaultProps = {

  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px'],
  },
  sectionTitleWrapper: {
    pl: '240px',
    pr: '240px',
    mb: '120px',
  },
  sectionTitle: {
    as: 'h2',
    color: '#232115',
    fontSize: ['18px', '18px', '18px', '20px', '36px'],
    fontWeight: '500',
    textAlign: 'center',
    pb: '24px',
  },
  secDescription: {
    color: '#232115',
    opacity: '0.6',
    fontSize: ['18px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
    fontWeight: '400',
    mb: '8px',
    lineHeight: '1.6',
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-30px', '-70px', '-70px'],
    mr: ['0', '-15px', '-30px', '-70px', '-70px'],
    background: '#f9f9f9',
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '30px', '70px', '70px'],
    pr: ['0', '15px', '30px', '70px', '70px'],
    mb: '40px',

  },
  processImageStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '35px',
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '500',
    color: '#302b4e',
    textAlign: 'center',
    pt: ['15px', '15px', '15px', '15px', '15px'],
    mb: ['20px', '20px', '20px', '20px', '20px'],
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    textAlign: 'center',
    lineHeight: '1.5',
    pl: '20px',
    pr: '20px',
  },
};

export default AboutSection;
