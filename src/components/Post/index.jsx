import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

export default function Post(props) {

  //formatar data com a lib date-fns
  const publishedDateFormatted =
    format(props.publishedAt,
      "d de LLLL 'às' HH:mm'h'",
      {
        locale: ptBR
      }
    )
  //tempo decorrido apos à data publicada do post
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  //formatar data com javascript
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour:'2-digit',
  //   minute: '2-digit'
  // }).format(props.publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={props.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>

    </article>
  )
}