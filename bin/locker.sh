if pgrep -f hyprlock; then
    hyprctl dispatch dpms off
fi
