---@diagnostic disable: undefined-global
local opts = { noremap = true, silent = true }
local term_opts = { silent = true }

--local keymap = vim.keymap
local keymap = vim.api.nvim_set_keymap

--Remap space as leader key
keymap("", "<Space>", "<Nop>", opts)
vim.g.mapleader = " "
vim.g.maplocalleader = " "

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
keymap("n", "<Leader>fe", ":Telescope file_browser<CR>", opts)
-- Better window navigation
keymap("n", "<C-h>", "<C-w>h", opts)
keymap("n", "<C-j>", "<C-w>j", opts)
keymap("n", "<C-k>", "<C-w>k", opts)
keymap("n", "<C-l>", "<C-w>l", opts)
-- move tab
keymap("n", "gh", ":BufferLineCyclePrev<CR>", opts)
keymap("n", "gl", ":BufferLineCycleNext<CR>", opts)

-- Do not yank with x
keymap("n", "x", '"_x', opts)

-- Delete a word backwards
keymap("n", "dw", 'vb"_d', opts)

-- move sursor
keymap("n", "<Leader>h", "^", opts)
keymap("n", "<Leader>l", "$", opts)

-- improve word hop
keymap("n", "f", ":HopWord<CR>", opts)

-- 行末までのヤンクにする
keymap("n", "Y", "y$", opts)

-- <Leader>q で強制終了
keymap("n", "<Leader>q", ":bd<Return>", opts)
keymap("n", "<Leader>w", ":<C-u>w<Return>", opts)

-- ESC*2 でハイライトやめる
keymap("n", "<Esc><Esc>", ":<C-u>set nohlsearch<Return>", opts)

-- Insert --
-- jj to esc
keymap("i", "jj", "<ESC>", opts)
