const THEME_LIST = [
    'soaring_skies',
    'solarized_dark',
    'solarized_light',
    'sonokai',
    'stealth',
    'strawberry',
    'striker'
];

const THEME_OPTIONS = function() {
    return THEME_LIST.map(themeName => { 
        return { value : themeName, label : themeName.replace(/_/g, ' ') }
    })
}

export { THEME_LIST as themes, THEME_OPTIONS as themesAsOptions }