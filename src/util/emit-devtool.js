/**
 * @file 给 devtool 发通知消息
 * @author errorrik(errorrik@gmail.com)
 */

// #[begin] devtool
var san4devtool;

/**
 * 给 devtool 发通知消息
 *
 * @param {string} name 消息名称
 * @param {*} arg 消息参数
 */
function emitDevtool(name, arg) {
    if (san4devtool && san4devtool.debug && root.__san_devtool__) {
        root.__san_devtool__.emit(name, arg);
    }
}

emitDevtool.start = function (main) {
    san4devtool = main;
    emitDevtool('san', main);
};
// #[end]

exports = module.exports = emitDevtool;
