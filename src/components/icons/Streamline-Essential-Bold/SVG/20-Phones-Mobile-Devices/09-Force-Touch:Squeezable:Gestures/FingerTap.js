import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFingerTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 5.5A7.5 7.5 0 007.5 19v3.5a1 1 0 002 0V13a2.5 2.5 0 015 0v9.5a1 1 0 002 0V19A7.5 7.5 0 0012 5.5z" />,
    <path d="M13.5 13.5a1.5 1.5 0 00-3 0v1.25a.25.25 0 00.25.25h2.5a.25.25 0 00.25-.25zM11.646 3.854a.5.5 0 00.708 0l2.5-2.5A.5.5 0 0014.5.5h-5a.5.5 0 00-.354.854zM23.691 9.038a.5.5 0 00-.545.108l-2.5 2.5a.5.5 0 000 .708l2.5 2.5A.5.5 0 0024 14.5v-5a.5.5 0 00-.309-.462zM.854 9.146A.5.5 0 000 9.5v5a.5.5 0 00.854.354l2.5-2.5a.5.5 0 000-.708z" />
  );

export default SvgFingerTap;
