return {
    {
        'lukas-reineke/indent-blankline.nvim',
        main = "ibl",
        config = function()
            require("ibl").setup()
        end,
        event = 'VimEnter',
    },
    {
        'kvrohit/substrata.nvim',
        event = 'VimEnter',
        config = function()
            vim.g.substrata_italic_functions = false
            vim.g.substrata_italic_keywords = false
            vim.g.substrata_italic_booleans = false
            vim.g.substrata_italic_comments = false
            vim.g.substrata_italic_variables = false
            vim.g.substrata_transparent = true
            vim.g.substrata_variant = "brighter"
            vim.cmd [[colorscheme substrata]]
            vim.cmd [[highlight FloatBorder guibg=NONE]]
        end
    },
    {
        'nvim-treesitter/nvim-treesitter',
        build = function()
            require('nvim-treesitter.install').update({
                with_sync = true
            })
        end,
        event = "bufRead",
        config = function()
            require 'nvim-treesitter.configs'.setup {
                ensure_installed = { "c", "lua", "rust" },
                highlight = {
                    enable = true,
                },
                indent = {
                    enable = true,
                },
            }
        end
    }
}
