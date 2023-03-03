import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = 'http://localhost:3000/articles' + id
  const { data, isPending, error} = useFetch(url)
  return (
    <div>
        Article page is here { id }
    </div>
  )
}

