import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 16a4.505 4.505 0 01-4.5-4.5v-7C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5v7c0 2.481-2.019 4.5-4.5 4.5zm0-15c-1.93 0-3.5 1.57-3.5 3.5v7c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-7C15.5 2.57 13.93 1 12 1z" />,
    <path d="M12 24a.5.5 0 01-.5-.5v-4.519a7.467 7.467 0 01-7-7.481v-3a.5.5 0 011 0v3c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5v-3a.5.5 0 011 0v3a7.466 7.466 0 01-7 7.481V23.5a.5.5 0 01-.5.5z" />
  );

export default SvgMicrophone;
