import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleThree1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-three-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="module-three-1_svg__a"
      d="M.75 15v5.25l5.25 3 3.75-2.143M6 23.25V18M18 12l-5.25 3L18 18l5.25-3L18 12z"
    />,
    <path
      className="module-three-1_svg__a"
      d="M12.75 15v5.25l5.25 3 5.25-3V15M18 18v5.25M12 .75l-5.25 3 5.25 3 5.25-3-5.25-3z"
    />,
    <path
      className="module-three-1_svg__a"
      d="M6.75 3.75V9L12 12l5.25-3V3.75M12 6.75V12M9.75 14.143L6 12 .75 15 6 18l3-1.714"
    />
  );

export default SvgModuleThree1;
