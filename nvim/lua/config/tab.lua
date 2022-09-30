---@diagnostic disable: undefined-global
local frappe = require("catppuccin.palettes").get_palette "frappe"
require 'bufferline'.setup({
    highlights = require("catppuccin.groups.integrations.bufferline").get({
        styles = { "bold" },
        custom = {
            frappe = {
                buffer_selected = {
                    bold = true,
                    italic = false,

                },
            }
        }
    }),
    options = {
        mode = "buffers",
        numbers = "none",
        diagnostics = false,
        color_icons = true,
        show_buffer_icons = true,
        show_buffer_close_icons = false,
        show_tab_indicators = true,
        separator_style = "thin",
    }
})
