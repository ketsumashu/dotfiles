local wezterm = require 'wezterm'
return {
    default_prog = { '/usr/bin/fish', '-l' },
    window_background_opacity = 0.9,
    color_scheme = "Substrata",
    use_ime = true,
    warn_about_missing_glyphs = false,
    hide_tab_bar_if_only_one_tab = true,
    window_close_confirmation = "NeverPrompt",
    font = wezterm.font_with_fallback {
        {
            family = "Cozette",
            weight = "Regular",
            stretch = "Normal",
            style = "Normal",
        },
        { family = "FiraCode Nerd Font",
          weight = "Medium",
          stretch = "Normal",
          style = "Normal"
        },
        { family = "Blobmoji",
          weight = "Regular",
          stretch = "Normal",
          style = "Normal",
          assume_emoji_presentation = true
        },
        {
            family = "mplus12",
            weight = "Regular",
            stretch = "Normal",
            style = "Normal"
        }
    },
    font_size = 10.0,
    line_height = 1.3,
}

