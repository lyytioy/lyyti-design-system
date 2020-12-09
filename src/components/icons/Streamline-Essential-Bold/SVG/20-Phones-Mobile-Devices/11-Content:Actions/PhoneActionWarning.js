import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 0H7a3 3 0 00-3 3v18a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3zm1 19a.5.5 0 01-.5.5h-11A.5.5 0 016 19V3.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5z" />,
    <path d="M12 12a1 1 0 001-1V6.5a1 1 0 00-2 0V11a1 1 0 001 1z" />,
    <circle cx={12} cy={14.5} r={1.5} />
  );

export default SvgPhoneActionWarning;
