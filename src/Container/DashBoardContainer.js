import React from "react";
import DashBoardComponent from "../Component/DashBoardComponent";
import "../Css/DashBoardComponent.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import {
  Card,
  CardBody,
  Button,
  CardText,
  CardHeader,
  CardTitle,
} from "reactstrap";
const DashBoardContainer = () => {
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <h1>DISCOVER PROJECT</h1>
      </CardHeader>
      <div className="projectCard">
        <DashBoardComponent
          view="MOST LIKED"
          icon={<FavoriteIcon />}
        ></DashBoardComponent>
        <DashBoardComponent
          view="MOST ACTIVE"
          icon={<TrendingUpIcon />}
        ></DashBoardComponent>
      </div>
    </Card>
  );
};
export default DashBoardContainer;
