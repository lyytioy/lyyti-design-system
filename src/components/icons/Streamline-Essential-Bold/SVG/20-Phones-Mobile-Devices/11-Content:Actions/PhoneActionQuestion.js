import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 0H7a3 3 0 00-3 3v18a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3zm1 19a.5.5 0 01-.5.5h-11A.5.5 0 016 19V3.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5z" />,
    <circle cx={12} cy={15} r={1.25} />,
    <path d="M12 5.5a3 3 0 00-3 3 1 1 0 002 0 1 1 0 111.4.917 2.334 2.334 0 00-1.4 2.139V12a1 1 0 002 0v-.444a.334.334 0 01.2-.306A3 3 0 0012 5.5z" />
  );

export default SvgPhoneActionQuestion;
