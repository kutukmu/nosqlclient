import React, {useState } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import AddForm from "./AddItemFrom"


function ModalExampleModal({handleFormSubmit}) {
  const [open, setOpen] = React.useState(false)
  const [imgUrl, setUrl] = useState('https://react.semantic-ui.com/images/wireframe/image-square.png')
  const uploadedImage = React.useRef(null);

 const changeUrl = (url) =>{
   console.log('iansdf')
    setUrl(url)
 }

 const handleClick = () =>{
    setOpen(false)
    setUrl('https://react.semantic-ui.com/images/wireframe/image-square.png')
 }


 
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='teal'>ADD MORE</Button>}
    >
      <Modal.Header>Add a Item</Modal.Header>
      <Modal.Content image> 
      <Image size='medium' src={imgUrl} wrapped refs={uploadedImage}/>
      <Modal.Description>
        <AddForm handleImageUrl = {changeUrl}/>
        </Modal.Description> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() =>{handleClick()} }>
          Close
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={() =>{handleClick()}}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal