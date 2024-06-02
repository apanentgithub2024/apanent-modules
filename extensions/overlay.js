// Creator: apanentgithub2024 (GitHub acc), apanentscratch2022 (Scratch acc)
// Name: Compiler
// Description: Allows you to compile blocks below to JavaScript code.

// NOTE: This might need to be improved.

(function() {
  if (!Scratch.extensions.unsandboxed) {
    throw "The Compiler extension must run unsandboxed!"
  }
  class Extension {
    getInfo() {
      return {
        id: "apanentgithub2024compiler",
        name: "Compiler",
        color1: "#5555ff",
        color2: "#2222aa",
        color3: "#000055",
        blocks: [
          {
            opcode: "wrapper",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: ["wrap", "into JavaScript"]
          }
        ],
        menus: {
          CONSTANTS: ["pi", "euler"]
        }
      }
    }

    wrapper(_, util) {
      const blocks = util.thread.blockContainer._blocks
      const blockIDs = Object.keys(blocks)
      const wrapper = blockIDs.find(item => blocks[item].opcode === "apanentgithub2024_compiler") // find that block, since it's important.
      // The JSON has unnecessary keys, which makes it even harder to compile the blocks into usable JavaScript code. :(
      const starterBlock = blockIDs.find(item => blocks[item].)
      return false
    }
  }
})()
