import React, { useRef, useState, useEffect, memo } from "react";

import { Tooltip } from "reactstrap";

import "./index.css";

type Props = {
  url: string;
  name: string;
  logo: string;
};

const Logo = ({ url, name, logo }: Props): JSX.Element => {
  const parentRef = useRef(null!);

  const [isReady, setIsReady] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (parentRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <>
      <a
        href={url}
        className="sponsor-wrapper"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="data-tip"
        ref={parentRef}
      >
        <>
          <img
            className={`sponsor-image normal ${showTooltip ? "show" : "hide"}`}
            src={require(`../../../images/sponsors/normal/${logo}`).default}
            alt={name}
          />
          <img
            className={`sponsor-image tint ${showTooltip ? "hide" : "show"}`}
            src={require(`../../../images/sponsors/tint/${logo}`).default}
            alt={name}
          />
        </>
      </a>
      {isReady && (
        <Tooltip
          placement="top"
          type="dark"
          effect="solid"
          isOpen={showTooltip}
          toggle={() => setShowTooltip(!showTooltip)}
          autohide={false}
          target={parentRef.current}
        >
          {name}
        </Tooltip>
      )}
    </>
  );
};

export default memo<Props>(Logo);
