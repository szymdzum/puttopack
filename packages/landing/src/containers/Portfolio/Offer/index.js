import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import { Icon } from 'react-icons-kit';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';

import {
  SkillItem,
  SkillDetails,
  SkillProgress,
  SuccessRate,
  ProgressBar,
  SkillIcon,
  SkillAbout,
} from './skill.style';
import { SKILLS } from 'common/data/Portfolio/data';
import { ic_thumb_up } from 'react-icons-kit/md/ic_thumb_up';

const OfferSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  skillTitle,
  skillDescription,
  skillSuccessRate,
  successRateText,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Oto, co mogę zaoferować Twojej firmie:" />
          <Text
            {...secDescription}
            content=" "
          />
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
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
};

OfferSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '140px'],
    pb: ['150px', '160px', '160px', '180px', '210px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px'],
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
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
  },
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
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0',
  },
  successRateText: {
    ml: '.3em',
    display: ['none', 'none', 'none', 'none', 'inline-block'],
  },
};

export default OfferSection;
