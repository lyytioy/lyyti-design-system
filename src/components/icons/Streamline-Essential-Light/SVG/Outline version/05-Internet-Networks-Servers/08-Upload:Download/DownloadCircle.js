import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.5C5.659 23.5.5 18.341.5 12S5.659.5 12 .5 23.5 5.659 23.5 12 18.341 23.5 12 23.5zm0-22C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M12 19a.492.492 0 01-.355-.148l-5.499-5.499a.5.5 0 11.708-.707l4.646 4.646V5.5a.5.5 0 011 0v11.793l4.646-4.646a.5.5 0 11.708.707l-5.5 5.5A.507.507 0 0112 19z" />
  );

export default SvgDownloadCircle;
