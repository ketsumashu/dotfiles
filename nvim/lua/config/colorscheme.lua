---@diagnostic disable: undefined-global
vim.g.catppuccin_flavour = "frappe"

require 'catppuccin'.setup({
    transparent_background = true,
    term_colors = true,
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
    }
})

vim.cmd [[colorscheme catppuccin]]
