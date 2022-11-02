import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import mowerImage from "../../images/mower.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  //background: 'url(https://assets.maccarianagency.com/the-front/photos/rental/footer-bg.jpg) no-repeat center',
  background: `url(${mowerImage})`,
  backgroundPosition:"center",
    backgroundSize: 'cover',
  },
  section: {
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      marginLeft: 0,
      padding: theme.spacing(9),
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const FooterHero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        <Section className={classes.section}>
          <SectionHeader
            disableGutter
            data-aos="fade-up"
            align="left"
            titleVariant="h3"
            title={
              <span className={classes.textWhite}>Are you a good mower?</span>
            }
            subtitle={
              <span className={classes.textWhite}>
                Contact us if you would like to have scheduled consistent jobs, close to where you are located...
               
              </span>
            }
            ctaGroup={[
              <Button variant="contained" size="large" 
              component="a"
              target="blank"
              variant="contained"
              >
                contact
              </Button>,
            ]}
          />
        </Section>
      </Section>
    </div>
  );
};

export default FooterHero;
