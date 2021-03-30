import React from "react";
import { Card, Button, Image, Icon} from "semantic-ui-react";
import config from "../config/images";

function CardService(props) {
  const { image, header, meta, description } = props;
  return (
    <Card>
      <Image
        src={config(image)}
        wrapped
        ui={false}
      />
      <Card.Content>
      <Card.Header>{header}</Card.Header>
        <Card.Meta>
          <span className="date">service</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='purple' floated='right'>
          Записаться
        </Button>   
      </Card.Content>
    </Card>
  );
}

export default CardService;
