// 一个非常der的compiler实现

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
      type = "text"
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
    props:[],
    children: []
  }
  while (cur < tokens.length) {
    ast.children.push(walk())
  }
  return ast

  function walk() {
    let token = tokens[cur]
    if (token.type == 'tagstart') {
      let node = {
        type: 'element',
        tag: token.val,
        props: [],
        children: []
      }
      token = tokens[++cur]
      while (token.type !== 'tagend') {
        if (token.type == 'props') {
          node.props.push(walk())
        } else {
          node.children.push(walk())
        }
        token = tokens[cur]
      }
      cur++
      return node
    }
    if (token.type === 'tagend') {
      cur++
      // return token
    }
    if (token.type == "text") {
      cur++
      return token
    }
    if (token.type === "props") {
      cur++
      const [key, val] = token.val.split('=')
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
    // import { toDisplayString , createVNode , openBlock , createBlock } from "vue"
    helpers:new Set(['openBlock','createVnode']), // 用到的工具函数 
  }
  traverse(ast, context)
  ast.helpers = context.helpers
}
function traverse(ast, context){
  switch(ast.type){
    case "root":
      context.helpers.add('createBlock')
      // log(ast)
    case "element":
      ast.children.forEach(node=>{
        traverse(node,context)
      })
      ast.flag = {props:false,class:false,event:false}
      ast.props = ast.props.map(prop=>{
        const {key,val} = prop
        if(key[0]=='@'){
          ast.flag.event = true
          return {
            key:'on'+key[1].toUpperCase()+key.slice(2),
            val
          }
        }
        if(key[0]==':'){
          ast.flag.props = true
          return{
            key:key.slice(1),
            val
          }
        }
        if(key.startsWith('v-')){
          // pass such as v-model
        }
        return {...prop,static:true}
      })
      break
    case "text":
      // trnsformText
      let re = /\{\{(.*)\}\}/g
      if(re.test(ast.val)){
        //有{{
          ast.static = false
          context.helpers.add('toDisplayString')
          ast.val = ast.val.replace(/\{\{(.*)\}\}/g,function(s0,s1){
            return s1
          })
      }else{
        ast.static = true
      }
  }
}

function generate(ast) {
  const {helpers} = ast 

  let code = `
import {${[...helpers].map(v=>v+' as _'+v).join(',')}} from 'vue'\n
export function render(_ctx, _cache, $props){
  return(_openBlock(), ${ast.children.map(node=>walk(node))})}`

  function walk(node){
    switch(node.type){
      case 'element':
        let {flag} = node // 编译的标记
        let props = '{'+node.props.reduce((ret,p)=>{
          if(flag.props){
            //动态属性
            ret.push(p.key +':_ctx.'+p.val.replace(/['"]/g,'') )
          }else{
            ret.push(p.key +':'+p.val )
          }

          return ret
        },[]).join(',')+'}'
        return `_createVnode("${node.tag}",${props}),[
          ${node.children.map(n=>walk(n))}
        ],${JSON.stringify(flag)}`
        break
      case 'text':
        if(node.static){
          return '"'+node.val+'"'
        }else{
          return `_toDisplayString(_ctx.${node.val})`
        }
        break
    }
  }
  return code
}

function compiler(template) {
  const ast = parse(template);
  console.log(JSON.stringify(ast,null,2))
  transform(ast)
  const code = generate(ast)
  console.log(code)
  // return new Function(code);
}

let tmpl = `<div id="app">
      <p @click="add" :id="name">{{name}}</p>
      <h1 class="item">技术摸鱼</h1>
  </div>`

  compiler(tmpl)