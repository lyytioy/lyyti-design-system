import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 18.75a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L7.72 14.78a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47V6.75a.75.75 0 011.5 0v9.439l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.258.046z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgDownloadCircle;
