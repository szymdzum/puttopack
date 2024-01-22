import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';

import { CLIENTS } from 'common/data/Portfolio/data';
import { AboutImage } from './clients.style';

const AboutSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
}) => {
  return (
    <Box {...sectionWrapper} id="about_section" as="section" >
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Kim Jesteśmy" />
          <Text
            {...secDescription}
            content="Put To Pack to Twój zaufany partner w zarządzaniu opakowaniami. Z ponad 10-letnim doświadczeniem w branży oferujemy profesjonalne wsparcie w zakresie rejestracji, raportowania i optymalizacji kosztów opakowań na rynku polski."
          />
        </Box>
        <Box {...row}>
          {CLIENTS.map((item, index) => (
            <AboutImage key={`client-${index}`}>
              <Image
                src={item.image?.src}
                alt={item.title}
                title={item.title}
              />
            </AboutImage>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

AboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

AboutSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '100px', '130px', '130px'],
  },
  secTitleWrapper: {
    mb: '60px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default AboutSection;
