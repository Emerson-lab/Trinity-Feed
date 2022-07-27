import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from '../Avatar';
import styles from './Comment.module.css';

export default function Comment(props) {
  const [clap, setClap] = useState(0);

  const handleDeleteComment = () => {
    props.onDeletComment(props.content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/79539678?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Emerson Trindade</strong>
              <time
                title="11 de maio às 08:13"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              aria-label="Deletar comentário"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={() => setClap(clap + 1)}>
            <ThumbsUp />
            Aplaudir <span>{clap}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}