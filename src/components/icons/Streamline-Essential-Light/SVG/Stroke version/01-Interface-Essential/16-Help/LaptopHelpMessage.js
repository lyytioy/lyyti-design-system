import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHelpMessage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-help-message_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-help-message_svg__a"
      d="M9 7.5H5.167A1.667 1.667 0 003.5 9.168V20.5M20.5 20.501v-6.5"
    />,
    <path
      className="laptop-help-message_svg__a"
      d="M23.5 20.5a3 3 0 01-3 3h-17a3 3 0 01-3-3zM16 5.5A1.5 1.5 0 1117.5 7M17.5 8.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="laptop-help-message_svg__a"
      d="M17.433.5A5.954 5.954 0 0011.5 6.567a5.944 5.944 0 00.781 3.193L10.5 13.5l3.741-1.782A6.064 6.064 0 1017.433.5z"
    />
  );

export default SvgLaptopHelpMessage;
