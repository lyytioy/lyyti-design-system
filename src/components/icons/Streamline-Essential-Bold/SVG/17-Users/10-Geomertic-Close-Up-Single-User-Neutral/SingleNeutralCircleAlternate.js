import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralCircleAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 21.5a9.5 9.5 0 119.5-9.5 9.511 9.511 0 01-9.5 9.5z" />,
    <circle cx={12} cy={9} r={4} />,
    <path d="M12 13.768a6.625 6.625 0 00-5.952 3.767.5.5 0 00.452.715h11a.5.5 0 00.452-.715A6.625 6.625 0 0012 13.768z" />
  );

export default SvgSingleNeutralCircleAlternate;
