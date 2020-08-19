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
import { useSelector } from "react-redux";
const DashBoardContainer = () => {
  const username = useSelector((state) => state.userdetails.full_name);
  console.log("username ", username);
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <h1>DISCOVER PROJECT</h1>
        {/* // <h2>{`Welcome ${username}`}</h2> */}
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
