---@diagnostic disable: undefined-global

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
        --set_env = { ["COLORTERM"] = "truecolor" },
        mappings = {
            ["n"] = {
                ["q"] = actions.close
            },
        },
        file_ignore_patterns = {
            "tmp",
            ".git",
        }
    },
    pickers = {
        find_files = {
            hidden = true
        }
    },
    extensions = {
        file_browser = {
            theme = "dropdown",
            hidden = true,
            -- disables netrw and use telescope-file-browser in its place
            hijack_netrw = false,
            mappings = {
                ["i"] = {
                },
                ["n"] = {
                },
            },
        },
    },
}
require 'telescope'.load_extension "file_browser"
