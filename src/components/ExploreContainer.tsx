import React from "react";
import "./ExploreContainer.css";
import { useDataContext } from "../context/DataContext";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { data } = useDataContext();

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Context value: {data}</p>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
