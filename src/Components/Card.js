import React from 'react'
import { Card } from 'semantic-ui-react'
import moment from 'moment';


const CardExampleCardProps = ({ description, name, createdAt}) => (
  <Card 
    image='https://react.semantic-ui.com/images/wireframe/image-square.png'
    header={name}
    meta={moment(createdAt).fromNow(true)}
    centered
    description={description}
  />
)

export default CardExampleCardProps