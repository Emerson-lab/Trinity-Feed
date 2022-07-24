import {PencilLine} from 'phosphor-react' 
import Avatar from '../Avatar';

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPs0ERcJncNggAeoArZs-gkUMvmBCdG6VmA&usqp=CAU"
        alt="banner do sidebar"
      />

      <div className={styles.profile}>
      <Avatar src="https://avatars.githubusercontent.com/u/79539678?v=4"/>

        <strong>Emerson Trindade</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}