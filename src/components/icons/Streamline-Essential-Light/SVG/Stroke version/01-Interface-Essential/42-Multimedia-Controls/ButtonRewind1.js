import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRewind1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-rewind-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-rewind-1_svg__a" cx={12} cy={11.999} r={11.5} />,
    <path
      className="button-rewind-1_svg__a"
      d="M5.973 11.612a.5.5 0 000 .774l4.21 3.445a.5.5 0 00.817-.387V13.5l3.723 2.482a.5.5 0 00.777-.416V8.433a.5.5 0 00-.777-.416L11 10.5V8.554a.5.5 0 00-.817-.387z"
    />
  );

export default SvgButtonRewind1;
