import { useFetch } from '../hooks/useFetch';

export default function Home() {

  const { data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
    </div>
  )
}
