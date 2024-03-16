import Control from "@/type/Control";
import { ImArrowUp, ImArrowDown, ImArrowLeft, ImArrowRight } from "react-icons/im";

export default (direction: string) => {

    switch(direction) {
        case 'UP':
            return <ImArrowUp />
        case 'DOWN':
            return <ImArrowDown />
        case 'RIGHT':
            return <ImArrowRight />
        case 'LEFT':
            return <ImArrowLeft />
        default:
            return
    }
}