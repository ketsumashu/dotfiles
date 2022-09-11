local wezterm = require 'wezterm'
return {
    default_prog = { '/usr/bin/fish', '-l' },
    font_size = 12.0,
    window_background_opacity = 0.90,
    use_ime = false,
    color_scheme = "nordfox",
    hide_tab_bar_if_only_one_tab = true,
    font = wezterm.font_with_fallback {
        { family = "FiraCode Nerd Font",
            weight = "Medium",
            stretch = "Normal",
            style = "Normal"
        },
        {
            family = "Noto Sans CJK JP",
            weight = "Medium",
            stretch = "Normal",
            style = "Normal"
        }
    },
}
