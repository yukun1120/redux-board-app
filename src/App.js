import './App.css';
import { addPosts, deletePosts } from './features/Posts';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addPosts({
      id: postList.length + 1,
      name: name,
      content: content,
    }));
    setName('');
    setContent('');
  }

  const handleDelete = (id) => {
    dispatch(deletePosts({ 
      id: id,
    }));
  }

  return (
    <div className="App">
      <div>
        <h1>Reduxの掲示板</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
        <div key={post.id} className="post">
          <h1>{post.name}</h1>
          <h1 className="postContent">{post.content}</h1> 
          <button onClick={() => handleDelete(post.id)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
