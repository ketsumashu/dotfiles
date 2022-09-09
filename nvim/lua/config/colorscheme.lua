---@diagnostic disable: undefined-global
require 'nvim-treesitter.configs'.setup {
    ensure_installed = "all",
    highlight = {
        enable = true,
    },
    indent = {
        enable = true,
    },
}

require 'nightfox'.setup({
    options = {
        transparent = true,
    },
})
vim.cmd [[colorscheme nordfox]]
