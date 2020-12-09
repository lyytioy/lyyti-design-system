import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-landscape_svg__a"
      d="M9 17.492l-1.663-2a1 1 0 00-1.587.067L3 19.492h13l-3.1-6.211a1 1 0 00-1.789 0L8 19.492"
    />,
    <path
      className="retouch-landscape_svg__a"
      d="M18.5 13v8.5a1 1 0 01-1 1h-16a1 1 0 01-1-1v-15a1 1 0 011-1H8"
    />,
    <circle
      className="retouch-landscape_svg__a"
      cx={5.004}
      cy={9.992}
      r={1.5}
    />,
    <path
      className="retouch-landscape_svg__a"
      d="M23.496 14.5l-8.932-8.932M11.735 2.739l1.415 1.414M15.795 1.508l-.39 1.961M19.075 4.199l-1.848.766M10.504 6.799l1.961-.39M13.195 10.079l.766-1.848"
    />
  );

export default SvgRetouchLandscape;
