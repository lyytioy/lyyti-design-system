import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-star_svg__a"
      d="M22.916 12.651a4.872 4.872 0 00-7.306-5.786 7.5 7.5 0 10-7.361 8.886"
    />,
    <path
      className="cloud-star_svg__a"
      d="M17.954 11.678l1.539 4.073h2.994A.735.735 0 0123 17.034l-2.6 1.812 1.44 3.314a.785.785 0 01-1.117.982l-3.479-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.314-2.6-1.812a.734.734 0 01.514-1.283H15l1.542-4.073a.793.793 0 011.412 0z"
    />,
    <path
      className="cloud-star_svg__a"
      d="M23.1 9.659a4.87 4.87 0 00-7.49-2.794 7.5 7.5 0 10-7.361 8.886"
    />
  );

export default SvgCloudStar;
