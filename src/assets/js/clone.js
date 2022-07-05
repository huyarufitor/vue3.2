// 标准的深拷贝 =》 引用数据类型（数组、对象）
function deepClone(source) {
    // [] =》 Array (基类) =》Object,先看传入的是数组还是对象；
    const targetObj = source.constructor === Array ? [] : {};
    for (let keys in source) {
        // eslint-disable-next-line no-prototype-builtins
        if (source.hasOwnProperty(keys)) {
            // keys 有三种情况：基本数据类型、数组、对象
            if (targetObj[keys] && typeof source[keys] === 'object') {
                //引用数据类型--这一句多余
                // targetObj[keys] = source[keys].constructor === Array ? [] : {};
                // 递归
                targetObj[keys] = deepClone(source[keys]);
            } else {
                // 基本数据类型
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}
let objs = {
    name: 'hu',
    age: 18,
    array: [1, 2, 3, 4],
    obj1: {
        names: '122',
    },
};
let cloneObj = deepClone(objs);
cloneObj.age = 25;
cloneObj.obj1.names = '12';
console.log(objs, cloneObj);
