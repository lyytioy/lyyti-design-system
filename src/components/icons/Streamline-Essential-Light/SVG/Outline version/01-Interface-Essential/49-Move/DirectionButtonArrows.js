import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButtonArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.499a.492.492 0 01-.355-.148l-2.999-2.999a.5.5 0 01.708-.707l2.146 2.146v-9.293H2.207l2.146 2.146a.5.5 0 01-.707.709l-3-3a.508.508 0 010-.708l3-3a.501.501 0 01.708.707l-2.146 2.146H11.5V2.206L9.354 4.352a.496.496 0 01-.707 0 .5.5 0 010-.707l3-3a.495.495 0 01.544-.108.515.515 0 01.163.108l3 3a.5.5 0 01-.708.708L12.5 2.206v9.293h9.293l-2.146-2.146a.5.5 0 01.708-.707l3 3a.505.505 0 010 .707l-2.999 3a.5.5 0 11-.708-.707l2.146-2.146H12.5v9.293l2.146-2.146a.5.5 0 11.708.707l-3 3a.507.507 0 01-.163.109.54.54 0 01-.191.036z" />
  );

export default SvgDirectionButtonArrows;
