import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="retouch-graph_svg__a" d="M2.5.5v21h21" />,
    <circle className="retouch-graph_svg__a" cx={10.5} cy={16.504} r={2} />,
    <circle className="retouch-graph_svg__a" cx={17.5} cy={4.504} r={2} />,
    <path
      className="retouch-graph_svg__a"
      d="M19.022 3.208A7.013 7.013 0 0123.5 1.5M11.947 15.126A17.6 17.6 0 0014 11a21.339 21.339 0 012.354-4.861M2.5 21.5s3.064-.222 6.792-3.4M.5 2.5l2-2 2 2M21.5 19.5l2 2-2 2"
    />
  );

export default SvgRetouchGraph;
