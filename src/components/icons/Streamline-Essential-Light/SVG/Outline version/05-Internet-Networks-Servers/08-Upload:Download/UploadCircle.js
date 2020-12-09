import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.5C5.659 23.5.5 18.341.5 12S5.659.5 12 .5 23.5 5.659 23.5 12 18.341 23.5 12 23.5zm0-22C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M12 19a.5.5 0 01-.5-.5V6.707l-4.646 4.646a.5.5 0 11-.708-.707l5.5-5.5A.495.495 0 0112 5a.5.5 0 01.354.146l5.5 5.5a.5.5 0 01-.354.854.5.5 0 01-.354-.146L12.5 6.707V18.5a.5.5 0 01-.5.5z" />
  );

export default SvgUploadCircle;
