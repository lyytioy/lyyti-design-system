import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonArrowCurve = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23c-4.411 0-8-3.589-8-8v-2.794l-2.646 2.646a.5.5 0 11-.708-.706l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.707L5 12.206V15c0 3.86 3.14 7 7 7s7-3.14 7-7V3.206l-2.646 2.646a.5.5 0 11-.708-.706l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.707L20 3.206V15c0 4.411-3.589 8-8 8z" />
  );

export default SvgButtonArrowCurve;
