import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 3a1 1 0 000 2 1 1 0 011 1v15a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1 1 1 0 000-2 3 3 0 00-3 3v15a3 3 0 003 3h10a3 3 0 003-3V6a3 3 0 00-3-3z" />,
    <path d="M10 20.5h4a.75.75 0 000-1.5h-4a.75.75 0 000 1.5zM9.172 3.732a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 00-1.061 1.061zM14.828 3.732l1.061-1.06a.75.75 0 00-1.061-1.061l-1.06 1.061a.75.75 0 001.06 1.06zM12 3a.75.75 0 00.75-.75V.75a.75.75 0 00-1.5 0v1.5A.75.75 0 0012 3z" />,
    <circle cx={12} cy={5.5} r={1.5} />
  );

export default SvgPhoneSelfieShoot;
