import styles from './Header.module.css';

import trnityLogo from '../../assets/trinity-logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={trnityLogo} alt="lgotipo trnity developer"/>
      <strong>Trinity Feed</strong>
    </header>
  )
}