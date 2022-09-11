---@diagnostic disable: undefined-global

local augroup = vim.api.nvim_create_augroup
local autocmd = vim.api.nvim_create_autocmd

-- bufclose but quit if buffer list is empty
vim.cmd [[
    autocmd BufDelete * if len(filter(range(1, bufnr('$')), '! empty(bufname(v:val)) && buflisted(v:val)')) == 1 | quit | endif
]]

-- Remove whitespace on save
autocmd("BufWritePre", {
    pattern = "*",
    command = ":%s/\\s\\+$//e",
})

-- Don't auto commenting new lines
autocmd("BufEnter", {
    pattern = "*",
    command = "set fo-=c fo-=r fo-=o",
})
