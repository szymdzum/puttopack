import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Portfolio/portfolio.style';

import Navbar from 'containers/Portfolio/Navbar';
import BannerSection from 'containers/Portfolio/Banner';
import IntroSection from 'containers/Portfolio/Intro';
import OfferSection from 'containers/Portfolio/Offer';
import AboutSection from 'containers/Portfolio/About';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer';

const Portfolio = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Head>
          <title>Puttopack</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Lora:wght@500&family=Merriweather:ital,wght@1,300&family=Space+Mono&display=swap" rel="stylesheet" />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <IntroSection />
          <AboutSection />
          <OfferSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Portfolio;
