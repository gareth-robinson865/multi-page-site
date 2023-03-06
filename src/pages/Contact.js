import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
        <h1>Hi {name}, this is the Contact Page</h1>
        <p>Voluptate ad aute amet non sunt occaecat laborum ut. Sint sit esse sunt laboris ullamco eu labore Lorem do commodo officia reprehenderit. Cupidatat veniam dolor aliquip esse. Commodo proident esse aute officia. Culpa pariatur consequat irure reprehenderit sint minim adipisicing ut. Lorem sint cillum ea deserunt magna minim magna laboris pariatur mollit ipsum commodo esse proident.</p>
    </div>
  )
}
