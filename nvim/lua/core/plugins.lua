---@diagnostic disable: undefined-global

local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath("data") .. "/site/pack/packer/opt/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
    PACKjER_BOOTSTRAP = fn.system({
        "git",
        "clone",
        "--depth",
        "1",
        "https://github.com/wbthomason/packer.nvim",
        install_path,
    })
    print("Installing packer close and reopen Neovim...")
end
vim.cmd([[packadd packer.nvim]])
-- Autocommand that reloads neovim whenever you save the plugins.lua file
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerSync
  augroup end
]])

-- Use a protected call so we don't error out on first use
local status_ok, packer = pcall(require, "packer")
if not status_ok then
    return
end

-- Have packer use a popup window
packer.init({
    display = {
        open_fn = function()
            return require("packer.util").float({ border = "rounded" })
        end,
    },
})

---------- add plugins below here ----------
require 'packer'.startup(function()

    ---------------------------
    ---------- inits ----------
    ---------------------------
    use {
        'wbthomason/packer.nvim',
        opt = true,
    }
    use 'lewis6991/impatient.nvim'

    ---------------------------------
    ---------- lsp-configs ----------
    ---------------------------------
    use {
        'neovim/nvim-lspconfig',
        config = [[require('config.lspservers')]]
    }
    use 'williamboman/mason.nvim'
    use 'williamboman/mason-lspconfig.nvim'

    --------------------------------
    ---------- completion ----------
    --------------------------------
    use {
        'hrsh7th/nvim-cmp',
        requires = {
            { 'hrsh7th/cmp-path', after = 'nvim-cmp', },
            { 'hrsh7th/cmp-cmdline', after = 'nvim-cmp', },
            { 'saadparwaiz1/cmp_luasnip', after = 'nvim-cmp' },
            'hrsh7th/cmp-nvim-lsp',
        },
        config = [[require('config.cmp')]],
        event = { 'InsertEnter', 'CmdlineEnter' },
        wants = 'LuaSnip',
    }
    use {
        'L3MON4D3/LuaSnip',
        event = 'InsertEnter',
        config = function()
            require 'luasnip.loaders.from_vscode'.lazy_load()
        end,
    }

    ---------------------------------
    ---------- appearances ----------
    ---------------------------------
    use 'lukas-reineke/indent-blankline.nvim'
    use {
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
        end
    }
    use { 'nvim-treesitter/nvim-treesitter',
        run = function()
            require('nvim-treesitter.install').update({
                with_sync = true
            })
        end,
        event = "bufRead",
        config = [[require('config.treesitter')]]
    }

    ---------------------------------
    ---------- other utils ----------
    ---------------------------------
    use {
        'phaazon/hop.nvim',
        branch = 'v2',
        config = function()
            require 'hop'.setup()
        end,
        event = 'VimEnter'
    }
    use {
        'windwp/nvim-autopairs',
        config = function()
            require 'nvim-autopairs'.setup()
        end,
        event = 'InsertEnter'
    }

    use {
        'goolord/alpha-nvim',
        config = [[require('config.alpha')]],
    }
    use {
        'ojroques/nvim-bufdel',
        config = function()
            require 'bufdel'.setup({
                quit = true,
                next = 'tabs'
            })
        end,
        event = 'VimEnter'
    }
    ----------------------------------------
    ---------- filer and terminal ----------
    ----------------------------------------
    use {
        'nvim-telescope/telescope.nvim', tag = '0.1.0',
        requires = { 'nvim-lua/plenary.nvim' },
        config = [[require('config.telescope')]],
        cmd = 'Telescope',
        module = 'Telescope',
    }
    use {
        'nvim-telescope/telescope-file-browser.nvim',
        cmd = 'Telescope',
    }
    use {
        'akinsho/toggleterm.nvim',
        tag = "*",
        config = [[require('config.term')]],
        event = 'VimEnter'
    }
end)
