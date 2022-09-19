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
        loops = {},
        functions = {},
        keywords = {},
        strings = {},
        variables = {},
        numbers = {},
        booleans = {},
        properties = {},
        types = {},
        operators = {},
    },
    integrations = {
        cmp = true,
        hop = true,
        telescope = true,
        native_lsp = {
            enabled = true,
            virtual_text = {
                errors = {},
                hints = {},
                warnings = {},
                information = {},
            },
            underlines = {
                errors = { "underline" },
                hints = { "underline" },
                warnings = { "underline" },
                information = { "underline" },
            },
        },
        nvimtree = true,
    }
})

--require("poimandres").setup({
--    disable_background = false,
--    disable_italics = true,
--})
vim.cmd [[colorscheme catppuccin]]
--vim.cmd [[colorscheme poimandres]]
