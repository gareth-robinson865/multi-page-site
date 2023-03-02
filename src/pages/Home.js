import { useFetch } from '../hooks/useFetch';

//styles
import './Home.css'

export default function Home() {

  const { data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>Sorry there was an error. It is as follows: {error}</div>}
      {articles && articles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </div>
      ))} 
    </div>
  )
}
