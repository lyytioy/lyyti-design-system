import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCharger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charger_svg__a"
      d="M12.1 1.914a1 1 0 011.415 0l7.071 7.071a1 1 0 010 1.414c-.7.706-1.871 1.871-3.183 3.183a5.783 5.783 0 01-8.131-.353A5.783 5.783 0 018.919 5.1zM14.929 3.328L17.757.5M19.172 7.57L22 4.742"
    />,
    <path
      className="charger_svg__a"
      d="M13.515 11.106a1.5 1.5 0 110-2.121 1.5 1.5 0 010 2.121zM10.455 14.167L8.211 16.41 6.09 14.289l2.243-2.244M9 23.5l1.914-1.914a1.535 1.535 0 00-2.171-2.172l-3.425 3.424a2.074 2.074 0 01-2.647.294 2 2 0 01-.257-3.046L7.15 15.35"
    />
  );

export default SvgCharger;
