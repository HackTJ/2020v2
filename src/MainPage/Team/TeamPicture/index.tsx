import React, { useState, memo } from "react";

import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

import "./index.css";

type Props = {
  name: string;
  image: string;
  about: string;
};

const TeamPicture = ({ name, image, about }: Props): JSX.Element => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  return (
    <li className={`question-group ${showAbout ? "is-open" : ""}`}>
      <Card
        className="figure fade question"
        onClick={() => setShowAbout(!showAbout)}
      >
        <CardImg className="img" src={image} />
        <CardImgOverlay>
          <CardTitle className="figcaption">{name}</CardTitle>
        </CardImgOverlay>
      </Card>
      <div
        className="answer"
        style={{
          maxHeight: showAbout ? "500px" : 0,
        }}
      >
        <p>{about}</p>
      </div>
    </li>
  );
};

export default memo<Props>(TeamPicture);
