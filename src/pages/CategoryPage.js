import { useParams } from "react-router-dom"

const CategoryPage = () => {
  const { type } = useParams();
  return (
    <div style={{padding: "40px"}}>
      <h2>{type.toUpperCase()}페이지</h2>
    </div>
  )
}

export default CategoryPage