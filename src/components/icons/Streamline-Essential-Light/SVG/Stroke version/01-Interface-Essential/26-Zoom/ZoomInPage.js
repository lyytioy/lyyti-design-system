import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomInPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-in-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zoom-in-page_svg__a"
      d="M.5 3.566V1.5a1 1 0 011-1h2.067M3.567 23.5H1.5a1 1 0 01-1-1v-2.067M.5 7.399v3.067M.5 13.533v3.066M23.5 7.399v3.067M7.4.499h3.067M13.533.499H16.6M20.433.5H22.5a1 1 0 011 1v2.066M10.467 23.499H7.4"
    />,
    <circle className="zoom-in-page_svg__a" cx={14.3} cy={14.299} r={6.133} />,
    <path
      className="zoom-in-page_svg__a"
      d="M12.3 14.299h4M14.3 12.299v4M18.637 18.636l4.863 4.863"
    />
  );

export default SvgZoomInPage;
