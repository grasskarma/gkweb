import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import mowerImage from "../../images/mower.jpg"

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: '100%',
    background: theme.palette.primary.dark,
  },
  textWhite: {
    color: 'white',
  },
}));

const SellProperty = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image
           src={mowerImage}
          lazy={false} />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <SectionHeader
              title={
                <span className={classes.textWhite}>
                  Are you a mower?
                </span>
              }
              titleVariant="h3"
              subtitle={
                <span className={classes.textWhite}>
                  Contact us if you would like to have scheduled consistent jobs, close to where you are located...
                </span>
              }
              ctaGroup={[
                <Button variant="contained" size="large">
                  Contact
                </Button>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
            />
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

export default SellProperty;
