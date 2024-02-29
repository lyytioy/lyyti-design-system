import { Slider as MuiSlider } from "@mui/material";
import { SliderProps as MuiSliderProps } from '@mui/material/Slider/Slider'

export interface SliderProps extends MuiSliderProps {}

const Slider = ({ ...props }: SliderProps) => {
    return <MuiSlider {...props}  />
}

export default Slider;
