import React from 'react';

import styles from './styles.module.css';

function VericoinButton({children, url}) {
  return (
    <a className={styles.vericoinButton} href={url} target="_blank">
        {children}
    </a>
  );
}

export default VericoinButton;