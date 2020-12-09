import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 17.25a.75.75 0 01-.75-.75v-3.848A3.016 3.016 0 019 9.75c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.902V16.5a.75.75 0 01-.75.75zm0-9c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgKeyholeCircle;
