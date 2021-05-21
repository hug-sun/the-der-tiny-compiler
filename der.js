// 一个非常der的compiler实现

function log(arg){
    console.log(JSON.stringify(arg,null,2))
  }
  
  
  function tokenizer(input) {
    let tokens = []
    let type = ''
    let val = ''
    // 粗暴循环
    for (let i = 0; i < input.length; i++) {
      let ch = input[i]
      if (ch === '<') {
        push()
        if (input[i + 1] === '/') {
          type = 'tagend'
        } else {
          type = 'tagstart'
        }
      } if (ch === '>') {
        push()
        type="text"
        continue
      } else if (/[\s]/.test(ch)) { // 碰见空格夹断一下
        push()
        type = 'props'
        continue
      }
      val += ch
    }
    return tokens
  
    function push() {
      if (val) {
        if (type === "tagstart") val = val.slice(1) // <div => div
        if (type === "tagend") val = val.slice(2)   //  </div  => div
        tokens.push({
          type,
          val
        })
        val = ''
      }
    }
  }
  
  function parse(template) {
    const tokens = tokenizer(template)
    let cur = 0
    let ast = {
      type: 'root',
      body: []
    }
    while (cur < tokens.length) {
      const next = walk()
      next && ast.body.push(next)
    }
    return ast
  
    function walk() {
      let token = tokens[cur]
      if (token.type == 'tagstart') {
        // cur++
        let node = {
          type: 'element',
          tag: token.val,
          props:[],
          children:[]
        }
        token = tokens[++cur]
        while(token.type!=='tagend'){
          if(token.type=='props'){
            node.props.push(walk())
          }else{
            node.children.push(walk())
          }
          token = tokens[cur]
        }
        return node
      }
      if (token.type === 'tagend') {
        cur++
      }
      if(token.type=="text"){
        // tojeb
        cur++
        return token
      }
      if (token.type === "props") {
        cur++
        const [key,val] = token.val.split('=')
        return {
          key,
          val
        }
      }
    }
  
  }
  function transform(ast) {
    // 优化一下ast
    let context = {
      
    }
  
  }
  
  function generate() {
  
  }
  
  
  function compiler(template) {
    const ast = parse(template);
    // log(ast)
  
    transform(ast)
    console.log(ast)
  
    // const code = generate(ast)
    // console.log('compiler之后的代码')
  
    // return new Function(code);
  
  }
  
  
  let tmpl = `<div id="app">
      <p @click="add" :id="name">{{name}}</p>
      <h1 class="item">技术摸鱼</h1>
  </div>`
  
  
  let render = compiler(tmpl)
  