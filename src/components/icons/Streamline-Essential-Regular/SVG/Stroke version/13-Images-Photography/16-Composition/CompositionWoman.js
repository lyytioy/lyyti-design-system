import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="composition-woman_svg__a"
      d="M18.763 22.5a6.77 6.77 0 00-6.75-6.75 6.77 6.77 0 00-6.75 6.75zM7.783 10.233v.995a5.905 5.905 0 01-.859 3.272M16.023 10.233v.995a5.9 5.9 0 00.859 3.269M7.794 10.451a5.479 5.479 0 004.109-1.9 5.479 5.479 0 004.108 1.9"
    />,
    <circle
      className="composition-woman_svg__a"
      cx={11.903}
      cy={10.122}
      r={4.122}
    />,
    <path
      className="composition-woman_svg__a"
      d="M.75 5.249V3a1.5 1.5 0 011.5-1.5H4.5M4.5 15H2.25a1.5 1.5 0 01-1.5-1.5v-2.25M23.25 11.25v2.25a1.5 1.5 0 01-1.5 1.5H19.5M19.5 1.5h2.245A1.5 1.5 0 0123.25 3v2.25"
    />
  );

export default SvgCompositionWoman;
