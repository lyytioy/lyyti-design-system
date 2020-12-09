import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="server-information_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="server-information_svg__a"
      d="M17.5 20.5V17a.5.5 0 00-.5-.5h-1M16.75 14a.25.25 0 10.25.25.25.25 0 00-.25-.25M16 20.5h3M5.5 20.5h3M8.501 15.5v5M3.25 20a.25.25 0 10.25.25.25.25 0 00-.25-.25M.75 20a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.25 12.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.75 12.75A.25.25 0 107 13a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-information_svg__a"
      d="M12.5 10.5H3a2.5 2.5 0 000 5h6.5M4.25 7.75A.25.25 0 104.5 8a.25.25 0 00-.25-.25M6.75 7.75A.25.25 0 107 8a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-information_svg__a"
      d="M17.5 8A2.5 2.5 0 0015 5.5H3a2.5 2.5 0 000 5h9.5M4.25 2.75A.25.25 0 104.5 3a.25.25 0 00-.25-.25M6.75 2.75A.25.25 0 107 3a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-information_svg__a"
      d="M17.5 3A2.5 2.5 0 0015 .5H3a2.5 2.5 0 000 5h12A2.5 2.5 0 0017.5 3z"
    />
  );

export default SvgServerInformation;
