
 import _ from "lodash"
export function paginate(items,pageNumber,pageSize) {
    let startIndex = (pageNumber-1)*pageSize
    console.log(startIndex);

    return _(items).slice(startIndex).take(pageSize).value();
}