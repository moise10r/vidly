import { AiOutlineFundProjectionScreen } from "react-icons/ai"

 import _ from "lodash"
export function paginate(items,pageNumber,pageSize) {
    let startIndex = (pageNumber-1)*pageSize

    return _(items).slice(startIndex).take(pageSize).value();
}