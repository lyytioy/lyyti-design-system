import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="network_svg__a" cx={12.036} cy={11.998} r={11.5} />,
    <circle className="network_svg__a" cx={8.786} cy={7.748} r={2.25} />,
    <circle className="network_svg__a" cx={14.286} cy={17.748} r={1.25} />,
    <circle className="network_svg__a" cx={18.786} cy={10.248} r={1.75} />,
    <path
      className="network_svg__a"
      d="M11.036 7.5a9.307 9.307 0 016 2.5M19.135 11.964l.4.534s1.5 2 1.5 6.5M16.859 1.555l.177.445a19.176 19.176 0 011 6.662M17.536 11.5a10.3 10.3 0 01-2.136 5.681M13.688 18.846l-.152.154s-2.5 2.5-8 2.5M12.036.5a17.085 17.085 0 00-3.25 5"
    />,
    <path
      className="network_svg__a"
      d="M7.618 9.672L7.536 10a12.694 12.694 0 001 8c1.7 3.406 6 5 6 5l.373.139M6.536 7.748S2.7 8.023.761 9.721"
    />,
    <path
      className="network_svg__a"
      d="M.816 14.532l.22-.034s6.881-1.058 12.474 2.27"
    />
  );

export default SvgNetwork;
