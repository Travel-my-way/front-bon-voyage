import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  separator: {
    backgroundColor: palette.yellow,
    width: '50px',
    height: '5px',
  },
}));

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps): JSX.Element => {
  const styles = useStyles();

  return <div className={`${styles.separator} ${className}`} />;
};

export default Separator;
