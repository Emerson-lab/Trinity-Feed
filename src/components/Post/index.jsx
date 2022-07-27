import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { useState } from 'react';
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  //formatar data com a date-fns lib
  const publishedDateFormatted =
    format(props.publishedAt,
      "d de LLLL 'às' HH:mm'h'",
      {
        locale: ptBR
      }
    )

  //tempo decorrido apos a data publicada do post
  const publishedDateRelativeToNow =
    formatDistanceToNow(props.publishedAt,
      {
        locale: ptBR,
        addSuffix: true
      }
    )

  const handleCreateNewContent = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('')
   
  }

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value)
  }

  const deletComment = (commentToDelete) => {
    const commentWithoutDeletOne = comments.filter(comment => {
    return comment !== commentToDelete
    })

    setComments(commentWithoutDeletOne)    
  }

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
            src="https://avatars.githubusercontent.com/u/79539678?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Emerson Trindade</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.content}>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewContent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeletComment={deletComment}
            />
          )
        })}
      </div>

    </article>
  )
}