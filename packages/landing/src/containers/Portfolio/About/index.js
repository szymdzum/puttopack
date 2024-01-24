import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import ProcessItem from './process.style';
import {  PROCESS_STEPS } from 'common/data/Portfolio/data';
const AboutSection = ({
  sectionWrapper,
  problemWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="about_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...problemWrapper}>
          <Heading {...secTitle} content="Sprawdź, Czy Twoja Działalność Spełnia Wymogi Ekologiczne:" />
          <Text
            {...secDescription}
            content="**Opakowania Szklane i Tworzywa Sztuczne:** Czy Twoje produkty są pakowane w szkło lub plastik? "
          />
          <Text
            {...secDescription}
            content="**Tekturowe Pudełka i Wypełniacze:** Czy wysyłasz towary w kartonach, wykorzystując różne materiały wypełniające?"
          />
          <Text
            {...secDescription}
            content="- **Zewnętrzne Usługi Pakowania:** Czy korzystasz z usług firm zewnętrznych do pakowania Twoich produktów?"
          />

          <Text
            {...secDescription}
            content="Jeśli na którekolwiek z tych pytań odpowiedziałeś/aś 'tak', to prawdopodobnie Twoja działalność podlega pod przepisy dotyczące sprawozdawczości ilości wprowadzanych produktów w opakowaniach. Zmiany w przepisach środowiskowych mogą być skomplikowane, ale **nie musisz tego robić sam/a. Jako ekspertka w tej dziedzinie, mogę Ci pomóc zrozumieć i spełnić te obowiązki**, minimalizując potencjalne ryzyko i zapewniając zgodność z obowiązującymi przepisami."
          />



        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading
              content="Cześć, nazywam się Zuza."
              {...learningTitle}
            />
            <Text
              content="Jestem ekspertką w dziedzinie gospodarki odpadami."
              {...learningSubTitle}
            />
            <Text
              {...learningDescription}
              content="Moją misją jest wspieranie przedsiębiorstw w Polsce i za granicą w odpowiedzialnym zarządzaniu odpadami, szczególnie tymi pochodzącymi z opakowań."
            />
            <Text
              {...learningDescription}
              content="Z wykształcenia jestem inżynierką ochrony środowiska, a moje doświadczenie i wiedza techniczna pozwalają mi na identyfikację i rozwiązywanie specyficznych problemów związanych z obowiązkami środowiskowymi firm.
              "
            />
          </Box>
          <Box {...learningContentArea}>
          </Box>
        </Box>

        </Container>
        <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            {...secTitle}
            content="Specjalizuję się w raportowaniu:"
          />
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

      </Container>
    </Box>
  );
};

AboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  problemWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
};

AboutSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px'],
  },
  problemWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: ['50px', '65px']
  },
  secTitleWrapper: {
    mb: ['60px', '105px'],
    textAlign: 'left',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
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
