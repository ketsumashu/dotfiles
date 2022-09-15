---@diagnostic disable: undefined-global

local fbact = require "telescope".extensions.file_browser.actions
local actions = require "telescope.actions"
require("telescope").setup {
    defaults = {
        layout_config = {
            horizontal = {
                prompt_position = "bottom",
                preview_width = 0.55,
                results_width = 0.8,
            },
            vertical = {
                mirror = false,
            },
            width = 0.87,
            height = 0.80,
            preview_cutoff = 120,
        },
        winblend = 0,
        color_devicons = true,
        set_env = { ["COLORTERM"] = "truecolor" },
        mappings = {
            ["n"] = {
                ["q"] = actions.close
            },
        },
        file_ignore_patterns = {
            "tmp"
        }
    },
    pickers = {
        find_files = {
            hidden = true
        }
    },
    extensions = {
        file_browser = {
            hijack_netrw = true,
            hidden = true,
            mappings = {
                ["i"] = {
                    ["<C-]>"] = fbact.change_cwd,
                    ["<C-t>"] = actions.select_tab
                },
                ["n"] = {
                    ["q"] = actions.close,
                    ["<C-]>"] = fbact.change_cwd
                },
            },
        },
    },
}
-- To get telescope-file-browser loaded and working with telescope,
-- you need to call load_extension, somewhere after setup function:
require("telescope").load_extension "file_browser"
