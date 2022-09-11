require 'nvim-treesitter.configs'.setup {
    ensure_installed = { "c", "lua", "rust" },
    highlight = {
        enable = true,
    },
    indent = {
        enable = true,
    },
}
