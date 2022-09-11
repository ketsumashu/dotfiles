local wezterm = require 'wezterm'
return {
    default_prog = { '/usr/bin/fish', '-l' },
    window_background_opacity = 1.0,
    use_ime = false,
    color_scheme = "nordfox",
    hide_tab_bar_if_only_one_tab = true,
    font = wezterm.font_with_fallback {
        --        { family = "FiraCode Nerd Font",
        --            weight = "Medium",
        --            stretch = "Normal",
        --            style = "Normal"
        --        },
        {
            family = "Cozette",
            weight = "Medium",
            stretch = "Normal",
            style = "Normal",
        },
        {
            family = "JF Dot Shinonome Gothic 12",
            weight = "Regular",
            stretch = "Normal",
            style = "Normal"
        }
    },
    font_size = 8.0,
    line_height = 1.3,
}
