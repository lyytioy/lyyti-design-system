import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-user_svg__a"
      d="M14.5 23.5a4.5 4.5 0 019 0zM16.638 13.862a4.571 4.571 0 005.075 1.021"
    />,
    <circle className="iris-scan-user_svg__a" cx={19} cy={15.25} r={2.75} />,
    <circle className="iris-scan-user_svg__a" cx={12} cy={7} r={3.5} />,
    <path
      className="iris-scan-user_svg__a"
      d="M12 5.5A1.5 1.5 0 1110.5 7M19.815 10.57a22.994 22.994 0 003.561-3.242.5.5 0 000-.656C22.213 5.352 17.562.5 12 .5S1.787 5.352.624 6.672a.5.5 0 000 .656C1.787 8.648 6.438 13.5 12 13.5a10.494 10.494 0 002.755-.382"
    />
  );

export default SvgIrisScanUser;
