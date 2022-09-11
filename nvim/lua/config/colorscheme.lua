---@diagnostic disable: undefined-global
require 'nightfox'.setup({
    options = {
        transparent = true,
    },
})
vim.cmd [[colorscheme nordfox]]
require 'virt-column'.setup()
