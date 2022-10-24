import styles from './Header.module.css';

import trnityLogo from '../../assets/trinity-logo.svg';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(true);

  return (
    <header className={styles.header}>
      <img src={trnityLogo} alt="lgotipo trnity developer" />
      <strong>Trinity Feed</strong>
    </header>
  )
}