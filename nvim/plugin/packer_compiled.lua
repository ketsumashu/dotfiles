-- Automatically generated packer.nvim plugin loader code

if vim.api.nvim_call_function('has', {'nvim-0.5'}) ~= 1 then
  vim.api.nvim_command('echohl WarningMsg | echom "Invalid Neovim version for packer.nvim! | echohl None"')
  return
end

vim.api.nvim_command('packadd packer.nvim')

local no_errors, error_msg = pcall(function()

_G._packer = _G._packer or {}
_G._packer.inside_compile = true

local time
local profile_info
local should_profile = false
if should_profile then
  local hrtime = vim.loop.hrtime
  profile_info = {}
  time = function(chunk, start)
    if start then
      profile_info[chunk] = hrtime()
    else
      profile_info[chunk] = (hrtime() - profile_info[chunk]) / 1e6
    end
  end
else
  time = function(chunk, start) end
end

local function save_profiles(threshold)
  local sorted_times = {}
  for chunk_name, time_taken in pairs(profile_info) do
    sorted_times[#sorted_times + 1] = {chunk_name, time_taken}
  end
  table.sort(sorted_times, function(a, b) return a[2] > b[2] end)
  local results = {}
  for i, elem in ipairs(sorted_times) do
    if not threshold or threshold and elem[2] > threshold then
      results[i] = elem[1] .. ' took ' .. elem[2] .. 'ms'
    end
  end
  if threshold then
    table.insert(results, '(Only showing plugins that took longer than ' .. threshold .. ' ms ' .. 'to load)')
  end

  _G._packer.profile_output = results
end

time([[Luarocks path setup]], true)
local package_path_str = "/home/mashu/.cache/nvim/packer_hererocks/2.1.1693350652/share/lua/5.1/?.lua;/home/mashu/.cache/nvim/packer_hererocks/2.1.1693350652/share/lua/5.1/?/init.lua;/home/mashu/.cache/nvim/packer_hererocks/2.1.1693350652/lib/luarocks/rocks-5.1/?.lua;/home/mashu/.cache/nvim/packer_hererocks/2.1.1693350652/lib/luarocks/rocks-5.1/?/init.lua"
local install_cpath_pattern = "/home/mashu/.cache/nvim/packer_hererocks/2.1.1693350652/lib/lua/5.1/?.so"
if not string.find(package.path, package_path_str, 1, true) then
  package.path = package.path .. ';' .. package_path_str
end

if not string.find(package.cpath, install_cpath_pattern, 1, true) then
  package.cpath = package.cpath .. ';' .. install_cpath_pattern
end

time([[Luarocks path setup]], false)
time([[try_loadstring definition]], true)
local function try_loadstring(s, component, name)
  local success, result = pcall(loadstring(s), name, _G.packer_plugins[name])
  if not success then
    vim.schedule(function()
      vim.api.nvim_notify('packer.nvim: Error running ' .. component .. ' for ' .. name .. ': ' .. result, vim.log.levels.ERROR, {})
    end)
  end
  return result
end

time([[try_loadstring definition]], false)
time([[Defining packer_plugins]], true)
_G.packer_plugins = {
  LuaSnip = {
    config = { "\27LJ\2\nM\0\0\3\0\3\0\0066\0\0\0'\2\1\0B\0\2\0029\0\2\0B\0\1\1K\0\1\0\14lazy_load luasnip.loaders.from_vscode\frequire\0" },
    loaded = false,
    needs_bufread = true,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/LuaSnip",
    url = "https://github.com/L3MON4D3/LuaSnip"
  },
  ["alpha-nvim"] = {
    config = { "require('config.alpha')" },
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/alpha-nvim",
    url = "https://github.com/goolord/alpha-nvim"
  },
  ["cmp-buffer"] = {
    after_files = { "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-buffer/after/plugin/cmp_buffer.lua" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-buffer",
    url = "https://github.com/hrsh7th/cmp-buffer"
  },
  ["cmp-cmdline"] = {
    after_files = { "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-cmdline/after/plugin/cmp_cmdline.lua" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-cmdline",
    url = "https://github.com/hrsh7th/cmp-cmdline"
  },
  ["cmp-nvim-lsp"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/cmp-nvim-lsp",
    url = "https://github.com/hrsh7th/cmp-nvim-lsp"
  },
  ["cmp-path"] = {
    after_files = { "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-path/after/plugin/cmp_path.lua" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-path",
    url = "https://github.com/hrsh7th/cmp-path"
  },
  ["cmp-skkeleton"] = {
    after_files = { "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-skkeleton/after/plugin/cmp_skkeleton.lua" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp-skkeleton",
    url = "https://github.com/rinx/cmp-skkeleton"
  },
  cmp_luasnip = {
    after_files = { "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp_luasnip/after/plugin/cmp_luasnip.lua" },
    load_after = {
      ["nvim-cmp"] = true
    },
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/cmp_luasnip",
    url = "https://github.com/saadparwaiz1/cmp_luasnip"
  },
  ["denops.vim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/denops.vim",
    url = "https://github.com/vim-denops/denops.vim"
  },
  ["hop.nvim"] = {
    config = { "\27LJ\2\n1\0\0\3\0\3\0\0066\0\0\0'\2\1\0B\0\2\0029\0\2\0B\0\1\1K\0\1\0\nsetup\bhop\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/hop.nvim",
    url = "https://github.com/phaazon/hop.nvim"
  },
  ["impatient.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/impatient.nvim",
    url = "https://github.com/lewis6991/impatient.nvim"
  },
  ["indent-blankline.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/indent-blankline.nvim",
    url = "https://github.com/lukas-reineke/indent-blankline.nvim"
  },
  ["mason-lspconfig.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/mason-lspconfig.nvim",
    url = "https://github.com/williamboman/mason-lspconfig.nvim"
  },
  ["mason.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/mason.nvim",
    url = "https://github.com/williamboman/mason.nvim"
  },
  ["nvim-autopairs"] = {
    config = { "\27LJ\2\n<\0\0\3\0\3\0\0066\0\0\0'\2\1\0B\0\2\0029\0\2\0B\0\1\1K\0\1\0\nsetup\19nvim-autopairs\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/nvim-autopairs",
    url = "https://github.com/windwp/nvim-autopairs"
  },
  ["nvim-bufdel"] = {
    config = { "\27LJ\2\nK\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\3\0B\0\2\1K\0\1\0\1\0\2\tnext\ttabs\tquit\2\nsetup\vbufdel\frequire\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/nvim-bufdel",
    url = "https://github.com/ojroques/nvim-bufdel"
  },
  ["nvim-cmp"] = {
    after = { "cmp_luasnip", "cmp-buffer", "cmp-cmdline", "cmp-path", "cmp-skkeleton" },
    config = { "require('config.cmp')" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/nvim-cmp",
    url = "https://github.com/hrsh7th/nvim-cmp",
    wants = { "LuaSnip" }
  },
  ["nvim-lspconfig"] = {
    config = { "require('config.lspservers')" },
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/nvim-lspconfig",
    url = "https://github.com/neovim/nvim-lspconfig"
  },
  ["nvim-treesitter"] = {
    config = { "require('config.treesitter')" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/nvim-treesitter",
    url = "https://github.com/nvim-treesitter/nvim-treesitter"
  },
  ["packer.nvim"] = {
    loaded = false,
    needs_bufread = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/packer.nvim",
    url = "https://github.com/wbthomason/packer.nvim"
  },
  ["plenary.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/plenary.nvim",
    url = "https://github.com/nvim-lua/plenary.nvim"
  },
  skkeleton = {
    after = { "cmp-skkeleton" },
    config = { "\27LJ\2\n˜\5\0\0\4\0\5\0\r6\0\0\0009\0\1\0009\0\2\0'\2\3\0+\3\1\0B\0\3\0016\0\0\0009\0\1\0009\0\2\0'\2\4\0+\3\1\0B\0\3\1K\0\1\0]                call skkeleton#register_keymap('input', ';', 'henkanPoint')\n            õ\3                call skkeleton#config({\n                    \\  'eggLikeNewline': v:true,\n                    \\  'useSkkServer': v:true,\n                    \\  'markerHenkan': \">\",\n                    \\  'markerHenkanSelect': \">>\",\n                    \\  'globalJisyo': \"/home/mashu/dotfiles/libskk/SKK-JISYO.L\",\n                    \\  'showCandidatesCount': 2,\n                    \\  'registerConvertResult': v:true,\n                    \\  'keepState': v:true\n                    \\})\n            \14nvim_exec\bapi\bvim\0" },
    loaded = true,
    only_config = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/skkeleton",
    url = "https://github.com/vim-skk/skkeleton"
  },
  ["skkeleton_indicator.nvim"] = {
    config = { "\27LJ\2\nœ\1\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\3\0B\0\2\1K\0\1\0\1\0\6\reijiText\aen\rhiraText\akn\16hankataText\bhkt\16hankanaText\bhkn\rkataText\akt\16zenkakuText\b2en\nsetup\24skkeleton_indicator\frequire\0" },
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/skkeleton_indicator.nvim",
    url = "https://github.com/delphinus/skkeleton_indicator.nvim"
  },
  ["substrata.nvim"] = {
    config = { "\27LJ\2\nà\2\0\0\3\0\f\0!6\0\0\0009\0\1\0+\1\1\0=\1\2\0006\0\0\0009\0\1\0+\1\1\0=\1\3\0006\0\0\0009\0\1\0+\1\1\0=\1\4\0006\0\0\0009\0\1\0+\1\1\0=\1\5\0006\0\0\0009\0\1\0+\1\1\0=\1\6\0006\0\0\0009\0\1\0+\1\2\0=\1\a\0006\0\0\0009\0\1\0'\1\t\0=\1\b\0006\0\0\0009\0\n\0'\2\v\0B\0\2\1K\0\1\0\26colorscheme substrata\bcmd\rbrighter\22substrata_variant\26substrata_transparent\31substrata_italic_variables\30substrata_italic_comments\30substrata_italic_booleans\30substrata_italic_keywords\31substrata_italic_functions\6g\bvim\0" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/substrata.nvim",
    url = "https://github.com/kvrohit/substrata.nvim"
  },
  ["telescope-file-browser.nvim"] = {
    loaded = true,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/start/telescope-file-browser.nvim",
    url = "https://github.com/nvim-telescope/telescope-file-browser.nvim"
  },
  ["telescope.nvim"] = {
    commands = { "Telescope" },
    config = { "require('config.telescope')" },
    loaded = false,
    needs_bufread = true,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/telescope.nvim",
    url = "https://github.com/nvim-telescope/telescope.nvim"
  },
  ["toggleterm.nvim"] = {
    config = { "require('config.term')" },
    loaded = false,
    needs_bufread = false,
    only_cond = false,
    path = "/home/mashu/.local/share/nvim/site/pack/packer/opt/toggleterm.nvim",
    url = "https://github.com/akinsho/toggleterm.nvim"
  }
}

time([[Defining packer_plugins]], false)
local module_lazy_loads = {
  ["^Telescope"] = "telescope.nvim"
}
local lazy_load_called = {['packer.load'] = true}
local function lazy_load_module(module_name)
  local to_load = {}
  if lazy_load_called[module_name] then return nil end
  lazy_load_called[module_name] = true
  for module_pat, plugin_name in pairs(module_lazy_loads) do
    if not _G.packer_plugins[plugin_name].loaded and string.match(module_name, module_pat) then
      to_load[#to_load + 1] = plugin_name
    end
  end

  if #to_load > 0 then
    require('packer.load')(to_load, {module = module_name}, _G.packer_plugins)
    local loaded_mod = package.loaded[module_name]
    if loaded_mod then
      return function(modname) return loaded_mod end
    end
  end
end

if not vim.g.packer_custom_loader_enabled then
  table.insert(package.loaders, 1, lazy_load_module)
  vim.g.packer_custom_loader_enabled = true
end

-- Config for: alpha-nvim
time([[Config for alpha-nvim]], true)
require('config.alpha')
time([[Config for alpha-nvim]], false)
-- Config for: nvim-lspconfig
time([[Config for nvim-lspconfig]], true)
require('config.lspservers')
time([[Config for nvim-lspconfig]], false)
-- Config for: skkeleton_indicator.nvim
time([[Config for skkeleton_indicator.nvim]], true)
try_loadstring("\27LJ\2\nœ\1\0\0\3\0\4\0\a6\0\0\0'\2\1\0B\0\2\0029\0\2\0005\2\3\0B\0\2\1K\0\1\0\1\0\6\reijiText\aen\rhiraText\akn\16hankataText\bhkt\16hankanaText\bhkn\rkataText\akt\16zenkakuText\b2en\nsetup\24skkeleton_indicator\frequire\0", "config", "skkeleton_indicator.nvim")
time([[Config for skkeleton_indicator.nvim]], false)
-- Config for: skkeleton
time([[Config for skkeleton]], true)
try_loadstring("\27LJ\2\n˜\5\0\0\4\0\5\0\r6\0\0\0009\0\1\0009\0\2\0'\2\3\0+\3\1\0B\0\3\0016\0\0\0009\0\1\0009\0\2\0'\2\4\0+\3\1\0B\0\3\1K\0\1\0]                call skkeleton#register_keymap('input', ';', 'henkanPoint')\n            õ\3                call skkeleton#config({\n                    \\  'eggLikeNewline': v:true,\n                    \\  'useSkkServer': v:true,\n                    \\  'markerHenkan': \">\",\n                    \\  'markerHenkanSelect': \">>\",\n                    \\  'globalJisyo': \"/home/mashu/dotfiles/libskk/SKK-JISYO.L\",\n                    \\  'showCandidatesCount': 2,\n                    \\  'registerConvertResult': v:true,\n                    \\  'keepState': v:true\n                    \\})\n            \14nvim_exec\bapi\bvim\0", "config", "skkeleton")
time([[Config for skkeleton]], false)

-- Command lazy-loads
time([[Defining lazy-load commands]], true)
pcall(vim.api.nvim_create_user_command, 'Telescope', function(cmdargs)
          require('packer.load')({'telescope.nvim'}, { cmd = 'Telescope', l1 = cmdargs.line1, l2 = cmdargs.line2, bang = cmdargs.bang, args = cmdargs.args, mods = cmdargs.mods }, _G.packer_plugins)
        end,
        {nargs = '*', range = true, bang = true, complete = function()
          require('packer.load')({'telescope.nvim'}, {}, _G.packer_plugins)
          return vim.fn.getcompletion('Telescope ', 'cmdline')
      end})
time([[Defining lazy-load commands]], false)

vim.cmd [[augroup packer_load_aucmds]]
vim.cmd [[au!]]
  -- Event lazy-loads
time([[Defining lazy-load event autocommands]], true)
vim.cmd [[au bufRead * ++once lua require("packer.load")({'nvim-treesitter'}, { event = "bufRead *" }, _G.packer_plugins)]]
vim.cmd [[au VimEnter * ++once lua require("packer.load")({'nvim-bufdel', 'substrata.nvim', 'hop.nvim', 'toggleterm.nvim'}, { event = "VimEnter *" }, _G.packer_plugins)]]
vim.cmd [[au InsertEnter * ++once lua require("packer.load")({'nvim-cmp', 'nvim-autopairs', 'LuaSnip'}, { event = "InsertEnter *" }, _G.packer_plugins)]]
vim.cmd [[au CmdlineEnter * ++once lua require("packer.load")({'nvim-cmp'}, { event = "CmdlineEnter *" }, _G.packer_plugins)]]
time([[Defining lazy-load event autocommands]], false)
vim.cmd("augroup END")

_G._packer.inside_compile = false
if _G._packer.needs_bufread == true then
  vim.cmd("doautocmd BufRead")
end
_G._packer.needs_bufread = false

if should_profile then save_profiles() end

end)

if not no_errors then
  error_msg = error_msg:gsub('"', '\\"')
  vim.api.nvim_command('echohl ErrorMsg | echom "Error in packer_compiled: '..error_msg..'" | echom "Please check your config for correctness" | echohl None')
end
