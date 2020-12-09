import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 0H7a3 3 0 00-3 3v18a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3zm1 19a.5.5 0 01-.5.5h-11A.5.5 0 016 19V3.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5z" />,
    <path d="M12 6.5a5 5 0 105 5 5.006 5.006 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3z" />,
    <circle cx={12} cy={11.5} r={1.25} />
  );

export default SvgPhoneActionRecord;
