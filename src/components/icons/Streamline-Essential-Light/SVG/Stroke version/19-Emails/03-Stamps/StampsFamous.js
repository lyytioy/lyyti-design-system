import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStampsFamous = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stamps-famous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="stamps-famous_svg__a" d="M4.5 4.5h15v15h-15z" />,
    <path
      className="stamps-famous_svg__a"
      d="M12.654 4.5l-.408 1.634a1 1 0 00.741 1.216L19.5 8.883"
    />,
    <path
      className="stamps-famous_svg__a"
      d="M12.48 7.053L10 13.5h1.5v2a1 1 0 001 1h3V18l-2 1.5"
    />,
    <path
      className="stamps-famous_svg__a"
      d="M13.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="stamps-famous_svg__a"
      d="M23.5 2.8a2.31 2.31 0 00-4.6-.3 2.323 2.323 0 00-4.6 0 2.323 2.323 0 00-4.6 0 2.322 2.322 0 00-4.6 0 2.31 2.31 0 10-2.6 2.6 2.323 2.323 0 000 4.6 2.323 2.323 0 000 4.6 2.323 2.323 0 000 4.6 2.31 2.31 0 102.6 2.6 2.323 2.323 0 004.6 0 2.323 2.323 0 004.6 0 2.323 2.323 0 004.6 0 2.31 2.31 0 102.6-2.6 2.323 2.323 0 000-4.6 2.323 2.323 0 000-4.6 2.323 2.323 0 000-4.6 2.323 2.323 0 002-2.3z"
    />
  );

export default SvgStampsFamous;
