import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M12 18.75a.754.754 0 01-.71-.51.746.746 0 01.039-.573 7.457 7.457 0 016.719-4.167.75.75 0 110 1.5 5.964 5.964 0 00-5.376 3.333.747.747 0 01-.672.417z" />,
    <circle cx={8.25} cy={9} r={1.125} />,
    <circle cx={15.75} cy={9} r={1.125} />
  );

export default SvgSmileyUnhappy;
