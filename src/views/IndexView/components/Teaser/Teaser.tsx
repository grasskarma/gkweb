import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

import plantImage from "../../images/plant.jpg"


const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 500,
  },
}));

const Teaser = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="How verge is different to garden lawn?"
              subtitle="Whether or not you have a lawn in the garden there are reasons why you might want to handle your council strip separately..."
              align="left"
              titleVariant="h3"
              disableGutter
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src={plantImage}
            alt="Features"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Teaser;
