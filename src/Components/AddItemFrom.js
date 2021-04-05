import React, {useState} from 'react'
import { Button,  Form } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';
const FormExampleForm = ({handleImageUrl, formSubmit}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

  
      const [createItem] = useMutation(ADD_ITEM, {
        variables: {name:title, description },
        update(proxy, result) {
          const data = proxy.readQuery({
            query: GET_DATA
          });

          proxy.writeQuery({ query: GET_DATA, data: {
            getProducts: [result.data.addItem, ...data.getProducts],
          }});
        }
      });


      const handleSubmit = (e) =>{
            e.preventDefault()
            createItem()
      }

    return (<Form onSubmit = {handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input value = {title} onChange= {(e) =>setTitle(e.target.value)} placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input value ={description} onChange = {(e) => setDescription(e.target.value)} placeholder='Description' />
        </Form.Field>
        
        <Button>Submit</Button>
      </Form>)
}

const ADD_ITEM = gql`
mutation AddItem($name:String, $description:String){
  addItem(name:$name, description:$description,){
    name
    description
    createdAt
  }
  }
`

const GET_DATA = gql`
query{
  getProducts{
    name
    description
    createdAt
  }
}
`



export default FormExampleForm