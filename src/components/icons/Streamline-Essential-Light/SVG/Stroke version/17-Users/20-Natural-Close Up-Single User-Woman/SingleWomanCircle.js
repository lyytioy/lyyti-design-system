import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M14 14.26a6.857 6.857 0 004.038-.847.5.5 0 00.145-.752c-.471-.541-.8-1.241-.939-3.342C16.978 5.384 14.28 4 12 4S7.111 5.384 6.844 9.319c-.142 2.1-.468 2.8-.939 3.344a.5.5 0 00.137.747 6.54 6.54 0 003.958.85"
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M20.75 19.463c-.572-1.553-.993-1.792-6.238-3.734A.785.785 0 0114 15v-1.462a.847.847 0 01.3-.59 2.88 2.88 0 00.94-2.148V9.592a.984.984 0 00-.7-.949 5.288 5.288 0 01-2.18-1.256.505.505 0 00-.717 0 5.049 5.049 0 01-2.1 1.254.984.984 0 00-.7.946V10.8a2.881 2.881 0 00.885 2.1 1.021 1.021 0 01.272.643V15a.83.83 0 01-.542.774c-5.105 1.891-5.564 2.134-6.145 3.763"
    />
  );

export default SvgSingleWomanCircle;
