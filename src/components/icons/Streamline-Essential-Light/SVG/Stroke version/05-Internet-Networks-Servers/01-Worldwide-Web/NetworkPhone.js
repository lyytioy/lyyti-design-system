import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="network-phone_svg__a" d="M11 20.5A10 10 0 1120.372 7" />,
    <rect
      className="network-phone_svg__a"
      x={14}
      y={8.5}
      width={9}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="network-phone_svg__a"
      d="M14 20.5h9M14 10.5h9M18 22h1M11 .5S6 3 6 10.5s5 10 5 10M11 .5A10.024 10.024 0 0115.591 7M2.338 5.5h17.324M2.338 15.5H11"
    />
  );

export default SvgNetworkPhone;
