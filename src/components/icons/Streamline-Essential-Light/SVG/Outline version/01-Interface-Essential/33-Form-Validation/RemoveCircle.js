import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 17.499a.5.5 0 01-.354-.146L12 12.706l-4.646 4.646a.5.5 0 11-.708-.707l4.646-4.646-4.646-4.646A.5.5 0 017 6.499a.5.5 0 01.354.146L12 11.292l4.646-4.646a.5.5 0 11.708.707l-4.646 4.646 4.646 4.646a.5.5 0 01-.354.854z" />,
    <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />
  );

export default SvgRemoveCircle;
