import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-flag_svg__a"
      d="M.5 23.504v-23M.5 18.515l3.224-.992a9.826 9.826 0 018.039 1.023 9.827 9.827 0 007.849 1.08l3.054-.873a1.149 1.149 0 00.834-1.106V4.488a1.151 1.151 0 00-1.466-1.106l-2.422.692A9.826 9.826 0 0111.763 3a9.822 9.822 0 00-8.039-1.028L.5 2.964z"
    />,
    <path
      className="programming-flag_svg__a"
      d="M15.5 7.504l3 3-3 3M8.5 7.504l-3 3 3 3M13 7.504l-2 6"
    />
  );

export default SvgProgrammingFlag;
