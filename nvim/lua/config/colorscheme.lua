---@diagnostic disable: undefined-global
vim.g.catppuccin_flavour = "frappe"
require 'catppuccin'.setup({
    compile = {
        enabled = true,
        path = vim.fn.stdpath("cache") .. "/catppuccin",
    },
    styles = {
        comments = {},
        conditionals = {},
    },
    integrations = {
        cmp = true,
        hop = true,
        telescope = true,
    },
})
--vim.cmd [[colorscheme nordfox]]
vim.cmd [[colorscheme catppuccin]]
