import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDisplay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.444 6.125h-1.316a.534.534 0 01-.481-.346C19.029 4.475 18.39 3.125 17 3.125h-5c-1.071 0-1.636.778-2.659 2.191-.384.527-.51.809-.844.809h-6C.434 6.125 0 7.334 0 8.348v10.388a2.254 2.254 0 002.556 2.389h18.888A2.254 2.254 0 0024 18.736V8.348c0-1.014-.443-2.223-2.556-2.223zm-1.444 6h-2.5a.5.5 0 010-1H20a.5.5 0 010 1zm.5 2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 010-1H20a.5.5 0 01.5.5zm-6-3.5v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h9.5a1 1 0 011 1z" />,
    <path d="M2.5 5.109l3 .016a.5.5 0 00.5-.5v-.25a1.5 1.5 0 00-1.5-1.5h-1a1.5 1.5 0 00-1.5 1.5v.234a.5.5 0 00.5.5z" />
  );

export default SvgCameraDisplay;
