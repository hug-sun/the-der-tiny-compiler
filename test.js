// 0: {type: "tagstart", val: "div"}
// 1: {type: "props", val: "id="app""} token
// 2: {type: "tagstart", val: "p"}
// 3: {type: "props", val: "@click="add""}
// 4: {type: "props", val: ":id="name""}
// 5: {type: "text", val: "{{name}}"}
// 6: {type: "tagend", val: "p"}
// 7: {type: "tagstart", val: "h1"}
// 8: {type: "props", val: "class="item""}
// 9: {type: "text", val: "技术摸鱼"}
// 10: {type: "tagend", val: "h1"}
// 11: {type: "tagstart", val: "h2"}
// 12: {type: "props", val: "class="item""}
// 13: {type: "text", val: "技术摸鱼"}
// 14: {type: "tagend", val: "h2"}
// 15: {type: "tagstart", val: "h3"}
// 16: {type: "props", val: "class="item""}
// 17: {type: "tagstart", val: "span"}
// 18: {type: "text", val: "123"}
// 19: {type: "tagend", val: "span"}
// 20: {type: "text", val: "技术摸鱼"}
// 21: {type: "tagend", val: "h3"}
// 22: {type: "tagend", val: "div"}
// length: 23


function invertTree(sourceArr) {
    let obj = {}
    for (let i = 0; i < sourceArr.length; i++) {
        obj[sourceArr[i].id] = sourceArr[i]
    }
    const result = []
    sourceArr.forEach(node => {
        if (!obj[node.pid]) {
            result.push(node)
            return
        }
        obj[node.pid].children = obj[node.pid].children || []
        obj[node.pid].children.push(node)
    })
    return result
}