local g = vim.g
local disabled_built_ins = {
    'gzip',
    'man',
    'matchit',
    'shada_plugin',
    'tarPlugin',
    'tar',
    'zipPlugin',
    'zip',
    'netrwplugin'
}

for i = 1, 9 do
    g['loaded_' .. disabled_built_ins[i]] = 1
end
