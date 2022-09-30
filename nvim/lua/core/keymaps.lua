---@diagnostic disable: undefined-global
local opts = { noremap = true, silent = true }
local term_opts = { silent = true }

--local keymap = vim.keymap
local keymap = vim.api.nvim_set_keymap

vim.g.mapleader = " "
-- Modes
--   normal_mode = 'n',
--   insert_mode = 'i',
--   visual_mode = 'v',
--   visual_block_mode = 'x',
--   term_mode = 't',
--   command_mode = 'c',

-- command --
-- jj to esc
keymap("c", "jj", "<ESC>", opts)

-- Terminal --
keymap("t", "jj", "<C-\\><C-n>", term_opts)

-- Normal --
-- file managements
keymap("n", "<Leader>ff", ":Telescope find_files<CR>", opts)
keymap("n", "<Leader>fb", ":Telescope buffers<CR>", opts)
keymap("n", "<Leader>e", ":Telescope file_browser<CR>", opts)
keymap("n", "gh", ":bp<CR>", opts)
keymap("n", "gl", ":bn<CR>", opts)

-- Better window navigation
keymap("n", "<C-h>", "<C-w>h", opts)
keymap("n", "<C-j>", "<C-w>j", opts)
keymap("n", "<C-k>", "<C-w>k", opts)
keymap("n", "<C-l>", "<C-w>l", opts)

-- Do not yank with x
keymap("n", "x", '"_x', opts)

-- move sursor
keymap("n", "<Leader>h", "^", opts)
keymap("n", "<Leader>l", "$", opts)

-- improve word hop
keymap("n", "f", ":HopWord<CR>", opts)

-- Y to yank entire line
keymap("n", "Y", "y$", opts)

-- save and quit
keymap("n", "<Leader>q", ":bd<CR>", opts)
keymap("n", "<Leader>w", ":<C-u>w<CR>", opts)

-- escesc to nohl
keymap("n", "<Esc><Esc>", ":<C-u>set nohlsearch<Return>", opts)

-- Insert --
-- jj to esc
keymap("i", "jj", "<ESC>", opts)
