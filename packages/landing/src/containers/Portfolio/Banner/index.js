import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper from './banner.style';

const BannerSection = ({
  row,
  contentArea,
  subheaderStyle,
  headerStyle,
  imageArea
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Profesjonalne Doradztwo w Zakresie Obowiązków Ekologicznych." {...headerStyle} />
            <Heading content="Kompleksowe wsparcie na każdym etapie - od diagnozy obowiązków, przez rejestrację w BDO, aż po optymalizację kosztów związanych z przepisami środowiskowymi." {...subheaderStyle} />
          </Box>
          <Box {...imageArea} className="image_area">
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  subheaderStyle: PropTypes.object,
  headerStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '70%', '60%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '30%', '40%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  headerStyle: {
    as: 'h1',
    opacity: 1,
    color: '#000000',
    fontSize: ['19px', '19px', '22px', '30px', '40px'],
    fontWeight: '800',
    mb: '6px',
  },  
  subheaderStyle: {
    as: 'h3',
    color: '#000000',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  }
};

export default BannerSection;
