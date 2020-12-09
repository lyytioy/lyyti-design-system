import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={7.5} r={4.75} />,
    <path d="M12 13.25a7.508 7.508 0 00-7.5 7.5.5.5 0 00.5.5h14a.5.5 0 00.5-.5 7.508 7.508 0 00-7.5-7.5z" />
  );

export default SvgSingleNeutralActions;
