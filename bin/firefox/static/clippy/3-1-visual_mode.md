# Visual mode (experimental)

"visual" mode is by default entered whenever non-text-area text is selected and left whenever it is deselected. It can be manually entered with
-   `v`
-   by using the mouse to select text
-   by selecting text with `;h` hint mode
-   by searching with `/`
-   using Firefox's "caret" mode on `F7`

The default behaviour can be modified with `:set visual{enter,exit}auto {true,false}`.

The visual mode keybinds:

-   Text selection using common movement keys:
    -   `h`,`j`,`k`,`l`,`e`,`w`,`b` moves the cursor and expands or reduces the selection
    -   `0` expands or reduces the selection to the beginning of the line
    -   `$` expands or reduces the selection to the end of the line
    -   `=` expands the selection successively until the whole web page is selected
    -   `o` moves the (invisible) cursor to the other end of the selection
-   `y` yanks selected text to the clipboard
-   `s` and `S` searches for selected text

See ":help vmaps" to see all the binds.

The [next page](./4-command_mode.md) will cover the command mode. <a href='./3-hint_mode.md' rel="prev"></a>
