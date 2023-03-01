import { useFetch } from '../hooks/useFetch';

export default function Home() {

  const { data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  //need to continue
  return (
    <div>
        <h2>Homepage</h2>
        <p>Proident cillum commodo dolore aute laboris ex ea ex nulla exercitation. Magna eiusmod laboris consequat ea excepteur velit fugiat commodo nostrud enim ipsum non deserunt aliqua. Reprehenderit aliquip officia exercitation commodo officia velit quis. Incididunt et aliqua duis labore consectetur quis labore fugiat.</p>
    </div>
  )
}
