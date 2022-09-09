---@diagnostic disable: undefined-global
require 'impatient'
require 'plugins'
require 'options'
require 'keymaps'
require 'cmd'

local g = vim.g

local disabled_built_ins = {
    'gzip',
    'man',
    'matchit',
    'matchparen',
    'shada_plugin',
    'tarPlugin',
    'tar',
    'zipPlugin',
    'zip',
    'netrwPlugin',
    'tutor_mode_plugin',
    '2html_plugin',
}

for i = 1, 12 do
    g['loaded_' .. disabled_built_ins[i]] = 1
end
