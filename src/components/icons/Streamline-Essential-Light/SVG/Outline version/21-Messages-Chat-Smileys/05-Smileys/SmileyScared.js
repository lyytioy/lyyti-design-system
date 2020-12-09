import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyScared = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={6.5} cy={10} r={0.75} />,
    <circle cx={17.5} cy={10} r={0.75} />,
    <path d="M7.5 19C6.121 19 5 17.878 5 16.5S6.121 14 7.5 14h9c1.378 0 2.5 1.122 2.5 2.5S17.878 19 16.5 19h-9zm-1.412-2c.209.586.772 1 1.412 1h9c.64 0 1.203-.414 1.412-1H6.088zm11.824-1c-.209-.586-.772-1-1.412-1h-9c-.64 0-1.203.414-1.412 1h11.824z" />
  );

export default SvgSmileyScared;
