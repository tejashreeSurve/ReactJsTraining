import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardText,
  CardHeader,
  CardTitle,
} from "reactstrap";
import projectList from "../projectList";
import "../Css/DashBoardComponent.css";
const DashBoardComponent = (props) => {
  return (
    <Card className="text-center">
      <CardBody>
        <h3>
          {props.icon}
          {props.view}
        </h3>
        <hr></hr>
        {projectList.map((project) => (
          <div>
            <CardTitle>
              <img src={project.image_url}></img>
              {project.name}
            </CardTitle>
            <CardText>{project.description}</CardText>
            <hr></hr>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default DashBoardComponent;
