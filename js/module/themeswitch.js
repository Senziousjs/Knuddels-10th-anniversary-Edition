(function($) {
  $.fn.themeSwitch = function(theme) {
    const Themes = [
      {
        name: 'Classic',
        color: '#d1b2e3'
      },
      {
        name: 'Classic Blue',
        color: '#b2b4e3'
      }
    ]
    const ThemeHandler = {
      init: () => $('html').attr('data-theme', ThemeHandler.getTheme()),
      getTheme: () => (localStorage.getItem('theme') == null) ? Themes[0].name : localStorage.getItem('theme'),
      setTheme: (theme) => {
        if(!theme || theme == ThemeHandler.getTheme()) {
          return false
        }
        localStorage.setItem('theme', theme);
        $('html').attr('data-theme', theme)
      }
    }

    ThemeHandler.init()

    Themes.map(({ name, color }) => $(this).append(`
      <div name="${name}" 
        style="display:inline-block;width:20px;height:20px;box-shadow:0 0 10px 0 rgba(0, 0, 0, .1);background:${color};border-radius:var(--border-radius);border:1px solid white;"
      />
    `))
    $(this).find('div').each((_, el) => $(el).bind('click', (e) => ThemeHandler.setTheme($(e.currentTarget).attr('name'))))
  }
}(jQuery))