import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading-2_svg__a"
      d="M8.16 15.775a.961.961 0 010 .866l-2 3.461a.528.528 0 01-1 0l-3.591-6.238C1.3 13.388 1.52 13 2.07 13h3.99a.962.962 0 01.75.433zM8.16 7.355a.961.961 0 010 .866l-1.35 2.344a.962.962 0 01-.75.435H2.07c-.55 0-.775-.39-.5-.867l3.591-6.239a.528.528 0 011 0zM15.6 2.028c.55 0 .775.39.5.866l-2 3.461a.96.96 0 01-.75.433h-2.7a.96.96 0 01-.75-.433l-2-3.461c-.275-.476-.05-.866.5-.866zM22.431 10.131c.274.477.049.867-.5.867H17.94a.962.962 0 01-.75-.433l-1.35-2.344a.961.961 0 010-.866l2-3.461a.528.528 0 011 0zM21.93 13c.55 0 .775.39.5.866L18.839 20.1a.528.528 0 01-1 0l-2-3.461a.961.961 0 010-.866l1.35-2.344A.962.962 0 0117.94 13zM16.1 21.1c.275.476.05.866-.5.866H8.4c-.55 0-.775-.39-.5-.866l2-3.461a.96.96 0 01.75-.433h2.7a.96.96 0 01.75.433z"
    />
  );

export default SvgLoading2;
