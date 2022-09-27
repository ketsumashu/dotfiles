---@diagnostic disable: undefined-global
local alpha = require 'alpha'
local dashboard = require 'alpha.themes.dashboard'

local function footer()
    local total = #vim.tbl_keys(packer_plugins)
    local date = os.date("%y-%m-%d %H:%M:%S")
    return date .. "     " .. total .. " plugins"
end

dashboard.section.header.val = {
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
    "                             ",
}


dashboard.section.buttons.val = {
    dashboard.button("h", "   Recently opened", ":Telescope oldfiles<CR>"),
    dashboard.button("f", "   Find file", ":Telescope fd<CR>"),
    dashboard.button("e", "   New file", ":enew<CR>"),
    dashboard.button("s",
        "   config dotfiles",
        ":cd $HOME/dotfiles/ | Telescope file_browser<CR>"
    ),
    dashboard.button("p", "ﰮ   Update plugins", ":PackerSync<CR>"),
    dashboard.button("q", "   Exit", ":qa<CR>"),
}
dashboard.section.buttons.opts = {
    spacing = 1,
}
dashboard.section.footer.val = footer()
dashboard.section.footer.opts.hl = "Constant"

alpha.setup(dashboard.config)
