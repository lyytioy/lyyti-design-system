import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flags_svg__a"
      d="M8.507 3.659L1.39 7.314c-.489.251-.449.551.088.666L5 8.731l-1.184 3.551c-.174.522.07.718.542.436L11.085 8.7M15.493 3.659l7.117 3.655c.489.251.449.551-.088.666L19 8.731l1.184 3.551c.174.522-.07.718-.542.436L12.915 8.7M8.05 2.769l9.45 18.462M15.95 2.769L6.5 21.231"
    />
  );

export default SvgFlags;
