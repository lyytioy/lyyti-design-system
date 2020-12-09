import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-phone_svg__a"
      d="M12.75 14.25v6.267a2.732 2.732 0 01-2.733 2.733H3.483A2.732 2.732 0 01.75 20.517V4.983A2.732 2.732 0 013.483 2.25H9M.75 18.75h12M17.25 9.656l-2.557-2.667a1.514 1.514 0 01-.283-1.746 1.511 1.511 0 012.422-.393l.418.417.418-.417a1.511 1.511 0 012.422.393 1.514 1.514 0 01-.283 1.746z"
    />,
    <circle className="love-it-phone_svg__a" cx={17.25} cy={6.75} r={6} />,
    <circle className="love-it-phone_svg__a" cx={6.75} cy={10.875} r={2.625} />,
    <path className="love-it-phone_svg__a" d="M2.25 18.75a4.5 4.5 0 019 0" />
  );

export default SvgLoveItPhone;
