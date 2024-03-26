swayidle -w timeout 300 'swaylock' \
            timeout 301 'hyprctl dispatch dpms off' \
            resume 'hyprctl dispatch dpms on && sway-audio-idle-inhibit' \
            before-sleep 'swaylock' &
