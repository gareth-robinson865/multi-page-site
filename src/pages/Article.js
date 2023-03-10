import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams()
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, isPending, error } = useFetch(url)
  const history = useHistory()

  useEffect(() => {
    if(error) {
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error, history])
  return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>Sorry there is an error {error}</div>}
        {article && (
          <div>
            <h2>{article.title}</h2>
            <h4>Author: {article.author}</h4>
            <p>{article.body}</p>
          </div>
        )}
    </div>
  )
}

