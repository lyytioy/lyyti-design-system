import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-star_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2v3"
    />,
    <path
      className="server-star_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.25 3.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h10"
    />,
    <path
      className="server-star_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M18.206 11.93l1.539 3.57h2.995a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L17.5 21.433l-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgServerStar;
