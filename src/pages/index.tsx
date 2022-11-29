import React from 'react';

import SectionHero from 'components/SectionHero';
import SectionAboutProject from 'components/SectionAboutProject';
import SectionTech from 'components/SectionTech';
import SectionConcepts from 'components/SectionConcepts';
import SectionModules from 'components/SectionModules';
import SectionAgenda from 'components/SectionAgenda';
import PricingBox from 'components/PricingBox';
import SectionAboutUs from 'components/SectionAboutUs';
import SectionReviews from 'components/SectionReviews';
import SectionFaq from 'components/SectionFaq';
import Footer from 'components/Footer';
import JsonSchema from 'components/JsonSchema';
import { GetStaticProps } from 'next';
import client from 'graphql/client';
import GET_LANDING_PAGE from 'graphql/queries/get-landing-page';
import { LandingPageProps } from 'types/api';

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq,
}: LandingPageProps) => {
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
      <PricingBox {...pricingBox} />
      <SectionAboutUs {...sectionAboutUs} />
      <SectionReviews {...sectionReviews} />
      <SectionFaq {...sectionFaq} />
      <Footer />
      <JsonSchema />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    landingPage: {
      data: {
        attributes: {
          logo: { ...logo },
          header: { ...header },
          sectionAboutProject: { ...sectionAboutProject },
          sectionTech: { ...sectionTech },
          sectionConcepts: { ...sectionConcepts },
          sectionModules: { ...sectionModules },
          sectionAgenda: { ...sectionAgenda },
          pricingBox: { ...pricingBox },
          sectionAboutUs: { ...sectionAboutUs },
          sectionReviews: { ...sectionReviews },
          sectionFaq: { ...sectionFaq },
        },
      },
    },
  } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      logo: { ...logo },
      header: { ...header },
      sectionAboutProject: { ...sectionAboutProject },
      sectionTech: { ...sectionTech },
      sectionConcepts: { ...sectionConcepts },
      sectionModules: { ...sectionModules },
      sectionAgenda: { ...sectionAgenda },
      pricingBox: { ...pricingBox },
      sectionAboutUs: { ...sectionAboutUs },
      sectionReviews: { ...sectionReviews },
      sectionFaq: { ...sectionFaq },
    },
  };
};

export default Index;
