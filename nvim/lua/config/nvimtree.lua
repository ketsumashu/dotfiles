require 'nvim-tree'.setup({
    view = {
        adaptive_size = true,
        centralize_selection = true,
    },
    hijack_netrw = true,
    disable_netrw = true,
    hijack_unnamed_buffer_when_opening = true,
    hijack_directories = {
        enable = true,
        auto_open = true,
    },
    filters = {
        dotfiles = false,
    },
    actions = {
        change_dir = {
            enable = true,
            global = true,
            restrict_above_cwd = false,
        }
    },
    renderer = {
        indent_markers = {
            enable = true,
            inline_arrows = true,
        },
        icons = {
            glyphs = {
                default = "",
                symlink = "",
                bookmark = "",
                folder = {
                    arrow_closed = "⭢",
                    arrow_open = "⭣",
                    default = "",
                    open = "",
                    empty = "",
                    empty_open = "",
                    symlink = "",
                    symlink_open = "",
                },
            },
        },
    },
})
