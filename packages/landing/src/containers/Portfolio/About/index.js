import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';


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
          <Heading {...secTitle} content="O mnie" />
          <Text
            {...secDescription}
            content="Cześć, jestem Zuza. Pomagam zidentyfikować problemy polskich i zagranicznych przedsiębiorców
            prowadzących działalność na terenie naszego kraju."
            />
            <Text
            {...secDescription}
            content="Od czasów skończenia studiów na politechnice warszawskiej na kierunku ochrony środowiska zajmuję się
            obowiązkami środowiskowymi firm w Polsce.
            Czy sprzedajesz w swojej firmie produkty w opakowaniach szklanych? A może z tworzyw sztucznych?
            Przygotowujesz je do wysyłki w pudełkach z tektury wraz z wypełniaczami lub wykonuje to za Ciebie
            zewnętrzny podmiot? Jeśli na któreś z pytań odpowiedzia-łąś/łeś TAK to znaczy, że obowiązek
            sprawozdawania ilości wprowadzonych produktów w opakowaniach dotyczy Ciebie.
            Jeśli chcesz wiedzieć czy Twoja firma posiada obowiązek z tytułu"
          />
        </Box>
        <Box {...row}>
          
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
