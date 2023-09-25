export function match(param) {
    // param이 숫자이면 true를 반환
    return /^\d+$/.test(param)
}