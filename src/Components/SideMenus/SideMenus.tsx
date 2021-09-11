import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Link } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  blog: {
    backgroundColor: palette.red,
    color: 'white',
    paddingLeft: 172,
  },
  container: {
    position: 'fixed',
    top: -4,
    transform: 'rotate(90deg) translate(48vw, calc(50vw - 24px))',
    width: '100vw',
    zIndex: 3,
  },
  forum: {
    backgroundColor: palette.yellow,
    color: palette.green,
    paddingLeft: 160,
  },
  menu: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 400,
    height: 24,
    justifyContent: 'flex-start',
    textTransform: 'uppercase',
    width: '100vh',
  },
}));

const SideMenus = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Hidden smDown>
      <div className={styles.container}>
        <Link target="_blank" className={`${styles.menu} ${styles.forum}`} href={'http://www.google.fr'}>
          Forum
        </Link>
        <Link target="_blank" className={`${styles.menu} ${styles.blog}`} href={'http://www.google.fr'}>
          Blog
        </Link>
      </div>
    </Hidden>
  );
};

export default SideMenus;
