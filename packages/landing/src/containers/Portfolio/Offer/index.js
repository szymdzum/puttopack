import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';

import {
  SkillItem,
  SkillDetails,
  SkillIcon,
  SkillAbout,
} from './skill.style';
import { SKILLS } from 'common/data/Portfolio/data';

const OfferSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  row,
  col,
  skillTitle,
  skillDescription,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading  content="Moje usługi" {...secTitle} />
        </Box>

        <Box {...row}>
          {SKILLS.map((item, index) => (
            <Box {...col} key={`skill-item-${index}`}>
              <SkillItem>
                <SkillDetails>
                  <SkillIcon>
                    <NextImage
                      src={item.icon}
                      alt={`skill-icon-${index + 1}`}
                    />
                  </SkillIcon>
                  <SkillAbout>
                    <Heading content={item.title} {...skillTitle} />
                    <Text content={item.description} {...skillDescription} />
                  </SkillAbout>
                </SkillDetails>
              </SkillItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

OfferSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
};

OfferSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px'],
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px'],
  },
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '140px'],
    pb: ['60px', '80px', '80px', '90px', '100px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px'],
  },
  secTitle: {
    as: 'h3',
    color: '#000000',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
    textAlign: 'center',
  },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px',
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  }
};

export default OfferSection;
