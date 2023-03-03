import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();

  return (
    <div>
        Article page is here { id }
    </div>
  )
}

