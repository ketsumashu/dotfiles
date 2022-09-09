local bfline = require 'bufferline'

bfline.setup({
    options = {
        mode = "buffers",
        numbers = "none",
        diagnostics = false,
        color_icons = true,
        show_buffer_icons = true,
        show_buffer_close_icons = false,
        show_tab_indicators = true,
        separator_style = "thin",
    },
    highlights = {
        buffer_selected = {
            fg = "#e5e9f0",
            bg = "#2e3440",
            italic = false,
        },
        buffer_visible = {
            bg = "#3b4252",
            italic = false,
            bold = false,
        },
        fill = {
            bg = "#3b4252",
        },
        indicator_selected = {
            fg = '#8cafd2',
        },
        separator_selected = {
            fg = "#3b4252",
            bg = "#3b4252",
        },
        pick_visible = {
            fg = '#bf616a',
            bold = true,
            italic = false,
        },
        pick_selected = {
            fg = '#bf616a',
            bold = true,
            italic = false,
        },
    },
})
