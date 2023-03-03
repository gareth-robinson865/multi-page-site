import { useParams } from "react-router-dom"

export default function Article() {
  const { id } = useParams();

  return (
    <div>
        Article page is here { id }
    </div>
  )
}

