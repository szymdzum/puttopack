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
  problemWrapper,
  secTitle,
  secSubTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  secTitleWrapper,
  learningContentArea,
  learningSubTitle,
  learningDescription,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="about_section">
      <Container noGutter mobileGutter width="1200px">
        
      <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading content="Wprowadzasz do obrotu produkty w opakowaniach lub opakowania?" {...secTitle} />
          </Box>
          <Box {...learningContentArea}>
          <Heading content="Produkty w Opakowaniach" {...secSubTitle} />
          <Text content="Wprowadzasz do obrotu na rynek produkty własnej marki?" {...secDescription} />
          <Heading content="Import Produktów w Opakowaniach" {...secSubTitle} />
          <Text content="Importujesz produkty z zagranicy i wprowadzasz je do obrotu na terenie naszego kraju?" {...secDescription} />
          <Heading content="Opakowania Szklane i Tworzywa Sztuczne" {...secSubTitle} />
          <Text content="Twoje produkty są pakowane w szkło lub plastik?" {...secDescription} />
          <Heading content="Tekturowe Pudełka i Wypełniacze" {...secSubTitle} />
          <Text content="Czy korzystasz z usług firm zewnętrznych do pakowania Twoich produktów?" {...secDescription} />
          <Heading content="Zewnętrzne Usługi Pakowania" {...secSubTitle} />
          <Text content="Korzystasz z usług firm zewnętrznych do pakowania Twoich produktów?" {...secDescription} />
          </Box>
        </Box>

        <Box {...problemWrapper}>
          <Heading content="Jeśli na którekolwiek z tych pytań odpowiedziałeś/aś 'tak'" {...secTitle}/>
          <Text content="Oznacza to, że jesteś odpowiedzialny/a za swoje opakowania w świetle ustawy o gospodarce opakowaniami i odpadami opakowaniowymi. Pamiętaj, że zgodnie z art. 17 tej ustawy, jako wprowadzający produkty w opakowaniach, masz kluczowe zadanie - zapewnienie odzysku, w tym recyklingu odpadów opakowaniowych." {...secDescription} />
        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading content="Cześć, nazywam się Zuza." {...secTitle} />
            <Text content="Jestem ekspertką w dziedzinie gospodarki odpadami." {...learningSubTitle} />
            <Text content="Moją misją jest wspieranie przedsiębiorstw w Polsce i za granicą w odpowiedzialnym zarządzaniu odpadami, szczególnie tymi pochodzącymi z opakowań." {...learningDescription} />
            <Text content="Z wykształcenia jestem inżynierką ochrony środowiska, a moje doświadczenie i wiedza techniczna pozwalają mi na identyfikację i rozwiązywanie specyficznych problemów związanych z obowiązkami środowiskowymi firm." {...learningDescription} />
          </Box>
          <Box {...learningContentArea}>
          </Box>
        </Box>

        <Box {...sectionWrapper}>
          <Box {...secTitleWrapper}>
            <Heading {...secTitle} content="Specjalizuję się w raportowaniu" />
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
                  <Heading as="h3" content={item.title} {...processTitleStyle} />
                  <Text content={item.description} {...processDescriptionStyle} />
                </ProcessItem>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

AboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  problemWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secSubTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
};

AboutSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px'],
  },
  problemWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    pb: ['60px', '80px'],
    pt: ['100px', '140px'],
    textAlign: 'left',
  },
  secTitle: {
    as: 'h3',
    color: '#000000',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  secSubTitle: {
    as: 'h6',
    color: '#000000',
    fontSize: ['12px', '14px', '14px', '18px', '18px'],
    fontWeight: '600',
    mb: '8px',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '18px',
    textAlign: 'left',
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-30px', '-70px', '-70px'],
    mr: ['0', '-15px', '-30px', '-70px', '-70px'],
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
    fontWeight: '600',
    color: '#302b4e',
    textAlign: 'center',
    mb: ['20px', '20px', '27px', '27px', '27px'],
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  secTitleWrapper: {
    mb: ['60px', '105px'],
    width: ['100%', '100%', '100%', '100%', '100%'],
    mb: ['50px', '65px'],
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
  learningTitle: {
    fontSize: ['22px', '22px', '24px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['20px', '20px', '15px', '20px', '20px'],
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningSubTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '20px',
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningDescription: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '25px',
  },
};

export default AboutSection;
