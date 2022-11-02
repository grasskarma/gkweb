import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';

import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProperties,
  FooterHero,
  Hero,
  Partners,
  Places,
  Reviews,
  Search,
  SellProperty,
  Teaser,
  HouseTypes,
} from './components';

import {
  aricles,
  featuredProperties,
  places,
  reviews,
  partners,
  features,
} from './data';

import { colors } from '@material-ui/core';
import Features from './components/Features';
import QuickStart from './components/QuickStart';
import Process from './components/Process';
import MobileApp from './components/MobileApp';

const useStyles = makeStyles(theme => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const Rental = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      {/* <Section>
        <Advantages data={advantages} />
      </Section> */}
        {/* <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate> */}
      {/* <Section>
          <Process />
        </Section> */}
        <Section>
        <MobileApp data={['no overgrowth', 'no weeds', 'no garbage', 'cut not too short']} />
      </Section>
       <Section>
          <Features data={features} />
        </Section>
      {/* <SectionAlternate>
        <Search />
      </SectionAlternate> */}
      <Section>
        <Teaser />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Articles data={aricles} />
      </Section>
      <SectionAlternate>
        <FeaturedProperties data={featuredProperties} />
      </SectionAlternate>
      <Section>
        <Places data={places} />
      </Section>
      <SectionAlternate innerNarrowed>
        <HouseTypes />
      </SectionAlternate>
      <Section>
        <Reviews data={reviews} />
      </Section>
      <SellProperty />
      <Section>
        <Partners data={partners} />
      </Section>
      {/* <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate> */}

      {/* <Section>
        <AskExpert />
      </Section> */}
      <FooterHero />
    </div>
  );
};

export default Rental;
