import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

import styles from './App.module.css';

import './global.css';

import {posts} from "./utils/postsData";

export default function App() {

  return (
    <div>
      <Header />
      <div className={styles.warapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}


