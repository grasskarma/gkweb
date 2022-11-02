import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, colors } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

const Features = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="How it works"
        subtitle="No lock-in contract or hidden costs."
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} md={4} key={index} data-aos="fade-up">
            <CardBase liftUp noShadow variant="outlined">
              <DescriptionListIcon
                icon={
                  <Icon
                    size="large"
                    fontIconClass={item.icon}
                    fontIconColor={colors.yellow[700]}
                  />
                }
                title={item.title}
                subtitle={item.subtitle}
                align="left"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
