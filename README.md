# theme-switcher
🌙 Little JS tool for switching dark and light theme, with a default on your browser/os settings

## How to use

First, import the JS file, the way you want depending on your project.

```javascript
import ThemeSwitcher from 'theme-switcher'
```

In your markup, set a Checkbox / Switch on your page (This one has Bootstrap 5 classes):

```html
<div id="color-scheme" class="form-check form-switch">
	<label class="form-check-label" for="SwitchTheme">
		<i class="fas fa-moon" aria-hidden="true"></i>
		<span class="sr-only">Thème</span>
	</label>
	<input class="form-check-input" type="checkbox" id="SwitchTheme">
</div>
```

Then, set a bunch of changes in your CSS, by using root-classes `.theme-light` and `.theme-dark` (they’ll figure on the root element, by default `<html>` for a html page).

The use of CSS Custom Properties would be a nice way to do your stuff:

```css
.theme-light {
	--global-color-background: #fff;
	--global-color-text: #292929;
}

.theme-dark {
	--global-color-background: #343434;
	--global-color-text: #dedede;
}

body {
	color: var(--global-color-text);
	background: var(--global-color-background);
}
```

You can also only define one and suppose the other is default.

Then, just call the class and give it your switcher we defined earlier, the way you want:

```javascript
new ThemeSwitcher(document.querySelector('#SwitchTheme'))
```

## Todo

Maybe someday, a few options to set custom classnames and stuff would be cool.
