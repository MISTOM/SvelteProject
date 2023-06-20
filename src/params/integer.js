/**
 * @param {string} param
 * @returns {boolean}
 */
export function match(param) {
    return /^\d+$/.test(param)
}