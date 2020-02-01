// const findById = (arr, id) => {
//     if (arr.find(element => element.id === id)) return arr.find(element => element.id === id);
//     return null;
// };

function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export default findById;