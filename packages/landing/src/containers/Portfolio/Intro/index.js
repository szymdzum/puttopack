import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';

const IntroSection = ({
  sectionWrapper,
  problemWrapper,
  sectionTitle,
  secSubTitle,
  secDescription,
  learningRow,
  learningContentArea,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="about_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...problemWrapper}>
          <Heading content="Wprowadzasz do obrotu produkty w opakowaniach lub opakowania?" {...sectionTitle}/>
        </Box>
        <Box {...learningRow}>
          <Box {...learningContentArea}>

          </Box>
          <Box {...learningContentArea}>
            <Text content="Niezależnie od tego, czy są to produkty własnej marki, importowane produkty, czy towary pakowane w szkło, plastik, tekturę lub korzystasz z usług firm zewnętrznych do pakowania" {...secDescription} />
          </Box>
        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Text content="Jako przedsiębiorca wprowadzający produkty w opakowaniach, podlegasz regulacjom dotyczącym recyklingu i zrównoważonego rozwoju." {...secDescription} />
          </Box>
          <Box {...learningContentArea}>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

IntroSection.propTypes = {
  sectionWrapper: PropTypes.object,
  problemWrapper: PropTypes.object,
  sectionTitle: PropTypes.object,
  secSubTitle: PropTypes.object,
  secDescription: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
};

IntroSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px'],
  },
  problemWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    pb: ['60px', '80px'],
    pt: ['100px', '140px'],
    textAlign: 'center',
  },
  sectionTitle: {
    as: 'h3',
    color: '#000000',
    fontSize: ['20px', '20px', '22px', '24px', '34px'],
    fontWeight: '400',
    mb: '8px',
    textAlign: 'center',
  },
  secSubTitle: {
    as: 'h6',
    color: '#000000',
    fontSize: ['14px', '16px', '16px', '20px', '22px'],
    fontWeight: '600',
    mb: '8px',
  },
  secDescription: {
    fontSize: ['16px', '22px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '18px',
    textAlign: 'left',
  },
  learningRow: {
    flexBox: true,
    flexWrap: 'wrap',
    mt: ['20px', '30px', '70px', '80px', '110px'],
  },
  learningContentArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    pr: ['0px', '0px', '60px', '80px', '160px'],
    mb: ['70px', '70px', '0', '0', '0'],
  },
};

export default IntroSection;
