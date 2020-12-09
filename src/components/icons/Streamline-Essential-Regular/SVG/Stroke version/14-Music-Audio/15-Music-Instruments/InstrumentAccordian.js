import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentAccordian = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-accordian_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-accordian_svg__a"
      d="M9.346 17.1a.978.978 0 01-.682 1.2l-2.829.782a1.957 1.957 0 01-2.407-1.365L.821 8.3a1.957 1.957 0 011.365-2.411l2.828-.782a.978.978 0 011.2.682zM4.171 9.4L7 8.618M5.214 13.171l2.828-.782M5.889 15.612l2.828-.782M14.478 16.975a.979.979 0 00.659 1.217l2.813.835a1.956 1.956 0 002.433-1.318l2.785-9.377A1.956 1.956 0 0021.85 5.9l-2.813-.835a.978.978 0 00-1.216.659z"
    />,
    <path
      className="instrument-accordian_svg__a"
      d="M19.946 9.448a.375.375 0 11-.467.252.375.375 0 01.467-.252M18.339 14.306a.375.375 0 11-.466.253.376.376 0 01.466-.253M12 13.155V4.84M10.043 12.177l-.978-6.848M13.956 12.177l.978-6.848"
    />
  );

export default SvgInstrumentAccordian;
