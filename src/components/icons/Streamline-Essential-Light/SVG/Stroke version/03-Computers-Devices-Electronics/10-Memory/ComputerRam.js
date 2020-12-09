import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerRam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-ram_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-ram_svg__a"
      d="M23.5 6.968L6.969 23.5.5 17.032l7.188-7.188.359.359A1.525 1.525 0 1010.2 8.046l-.359-.358L17.031.5z"
    />,
    <path
      className="computer-ram_svg__a"
      d="M4.812 18.469l3.594-3.594 2.156 2.156-3.594 3.595zM9.844 13.437l3.594-3.593L15.594 12 12 15.593zM14.875 8.407l3.594-3.594 2.156 2.156-3.594 3.594zM1.954 15.611l1.53 1.53M3.392 14.173l1.529 1.531M4.829 12.736l1.531 1.529M6.267 11.298l1.53 1.53M11.281 6.249l1.547 1.547M12.719 4.812l1.546 1.547M14.156 3.375l1.547 1.546M15.593 1.937l1.547 1.547"
    />
  );

export default SvgComputerRam;
