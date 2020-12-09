import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-star_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-action-star_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-star_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12.465 8.287l1.027 2.213h2a.49.49 0 01.346.855L14.1 13.066l.962 2.208a.524.524 0 01-.746.655l-2.325-1.307-2.322 1.307a.524.524 0 01-.746-.655l.961-2.208-1.735-1.709a.489.489 0 01.343-.855h2l1.03-2.215a.531.531 0 01.943 0z"
    />
  );

export default SvgPhoneActionStar;
