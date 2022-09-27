require("toggleterm").setup {
    start_insert = true,
    terminal_mappings = false,
    auto_chdir = true,
    auto_scroll = true,
    close_on_exit = true,
    shading_factor = 2,
    hide_numbers = true,
    open_mapping = [[@t]],
    shell = '/usr/bin/fish -l',
    direction = 'float',
}
