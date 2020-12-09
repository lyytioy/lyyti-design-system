import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-podium_svg__cls-1"
      d="M21 16.5l-1.5 7M4.5 23.5l-1.5-7M1 16.5h22M13.936 10.19a6.34 6.34 0 003.746-.783.5.5 0 00.142-.751c-.433-.508-.733-1.178-.865-3.133C16.707 1.807 14.2.5 12.048.5s-4.66 1.307-4.912 5.023C7 7.478 6.7 8.148 6.271 8.656a.5.5 0 00.142.751 6.344 6.344 0 003.746.783"
    />,
    <path
      className="single-woman-podium_svg__cls-1"
      d="M19.6 14.5c-1-2-4.068-2.5-5.165-2.9a.756.756 0 01-.494-.709V9.508a.755.755 0 01.248-.559 2.722 2.722 0 00.886-2.027v-1.1a.989.989 0 00-.7-.946 4.9 4.9 0 01-1.986-1.181.494.494 0 00-.679 0 4.9 4.9 0 01-1.988 1.178.989.989 0 00-.7.946v1.1a2.722 2.722 0 00.886 2.027.755.755 0 01.248.559v1.38a.756.756 0 01-.494.709C8.568 12 5.5 12.5 4.5 14.5"
    />
  );

export default SvgSingleWomanPodium;
