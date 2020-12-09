import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageTemplate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1 6.5c-.551 0-1-.449-1-1V2C0 1.173.673.5 1.5.5h21c.827 0 1.5.673 1.5 1.5v3.5c0 .551-.448 1-1 1H1zm22-1V2a.5.5 0 00-.5-.5H18v4h5zm-21.5-4A.5.5 0 001 2v3.5h16v-4H1.5z" />,
    <path d="M20.5 4.5a.5.5 0 01-.354-.146l-1-1A.5.5 0 0119.5 2.5a.5.5 0 01.354.146l.646.647.646-.646a.5.5 0 11.708.707l-1 1a.5.5 0 01-.354.146zM1.5 23.5C.673 23.5 0 22.827 0 22V8.5c0-.551.449-1 1-1h22c.552 0 1 .449 1 1V22c0 .827-.673 1.5-1.5 1.5h-21zM1 22a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-3.5H1V22zm22-4.5v-4H1v4h22zm0-5v-4H1v4h22z" />,
    <circle cx={20.5} cy={10.5} r={0.75} />,
    <circle cx={20.5} cy={15.5} r={0.75} />,
    <circle cx={20.5} cy={20.5} r={0.75} />
  );

export default SvgUiWebpageTemplate;
