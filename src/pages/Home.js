import { useFetch } from '../hooks/useFetch';

export default function Home() {

  const { data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  
  return (
    <div className="home">
      <h2></h2>
    </div>
  )
}
