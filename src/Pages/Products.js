import Layout from '../Components/Layout'
import { useQuery, gql } from '@apollo/client';
import Card from "../Components/Card"
import Button from '../Components/AddForm'
const Products = () =>{

    const {  data } = useQuery(GET_DATA);

    console.log(data)
    return <Layout>
        <div className = "products">
            <div className = "products-header">
                <h1>All Products</h1>
                <Button />
            </div>
            <div className = "products-info">
                {data && data.getProducts.map((item, idx) =>{
                    return <Card key = {idx}  description = {item.description} name = {item.name} createdAt = {item.createdAt}/>
                })}
            </div>
        </div>
    </Layout>


}


const GET_DATA = gql`
query{
  getProducts{
    name
    description
    createdAt
  }
}
`

export default Products