import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 18a.75.75 0 01-.75-.75V7.811l-2.47 2.47a.744.744 0 01-1.06 0 .747.747 0 010-1.061l3.749-3.749a.74.74 0 01.245-.163l.025-.009a.723.723 0 01.522-.001l.02.007c.097.04.179.095.25.166L16.28 9.22c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v9.439A.75.75 0 0112 18z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgUploadCircle;
