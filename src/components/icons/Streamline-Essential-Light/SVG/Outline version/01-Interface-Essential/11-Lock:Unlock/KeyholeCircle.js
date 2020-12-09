import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M9.5 19a.5.5 0 01-.495-.577l.923-6.005a4 4 0 114.142.001l.925 6.005A.499.499 0 0114.5 19h-5zm4.417-1l-.889-5.776a.495.495 0 01.277-.526A3.018 3.018 0 0015 9a2.978 2.978 0 00-.878-2.121 2.977 2.977 0 00-2.12-.881L12 5.747v.25a3.004 3.004 0 00-3 2.998 3.016 3.016 0 001.694 2.703c.199.096.31.308.276.526L10.083 18h3.834z" />
  );

export default SvgKeyholeCircle;
