import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.238 14.146a.25.25 0 01-.03-.316 5.05 5.05 0 10-1.381 1.381.25.25 0 01.316.03l2.535 2.534a.784.784 0 001.095 0 .774.774 0 000-1.094zm-4.206.373a3.484 3.484 0 113.484-3.484 3.488 3.488 0 01-3.484 3.484z" />,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
  );

export default SvgSearchCircle;
