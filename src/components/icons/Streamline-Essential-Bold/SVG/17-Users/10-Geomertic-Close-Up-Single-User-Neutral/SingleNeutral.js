import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutral = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={6.25} r={5.5} />,
    <path d="M12 13.25a9.511 9.511 0 00-9.5 9.5.5.5 0 00.5.5h18a.5.5 0 00.5-.5 9.511 9.511 0 00-9.5-9.5z" />
  );

export default SvgSingleNeutral;
