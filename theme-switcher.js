export default class ThemeSwitcher {

	/**
	 * @param {HTMLElement} element Checkbox switching the change event
	 */
	constructor(element = document.querySelector('#switchTheme')) {
		// Init properties
		if (!element) return
		this.switcher = element
		this.sessionChoice = localStorage.getItem('color-preference')

		// Load stored or default values
		// this.getTheme()
		this.setSwitcher(this.getTheme() === 'dark' ? true : false)

		// Events
		this.switcher.addEventListener('change', ({ currentTarget }) => this.setTheme(currentTarget.checked ? 'dark' : 'light'))
	}

	/**
	 * Add corresponding class on body
	 * Set persistent data
	 * @param {String} mode either 'dark' or 'light'
	 */
	setTheme (mode) {
		localStorage.setItem('color-preference', mode)
		document.documentElement.classList.remove('theme-dark', 'theme-light')
		document.documentElement.classList.add(`theme-${mode}`)

		// Enable if you use Bootstrap’s default navbar
		// this.setNavbar(mode)
	}

	/**
	 * Set the switcher checkbox according to the pref
	 * @param {Bool} checked
	 */
	setSwitcher (checked = true) {
		this.switcher.checked = checked
	}

	/**
	 * Set Bootstrap’s navbar to proper classes
	 * @param {String} mode either 'dark' or 'light'
	 */
	setNavbar (mode) {
		const navbar = document.querySelector('body > .navbar')
		if (!navbar) return

		if (mode === 'dark') {
			navbar.classList.remove('navbar-light', 'bg-light')
			navbar.classList.add('navbar-dark', 'bg-dark')
		}
		else {
			navbar.classList.remove('navbar-dark', 'bg-dark')
			navbar.classList.add('navbar-light', 'bg-light')
		}
	}

	/**
	 * Get user’s browser prefrence over theme
	 * @returns {String} 'dark' or 'light'
	 */
	getDefaultUserPreference () {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}

	/**
	 * Select theme at loading, according on user’s choice if set, or browser’s setting by default
	 * @returns {String} 'dark' or 'light'
	 */
	getTheme () {
		if (this.sessionChoice) {
			this.setTheme(this.sessionChoice)
			return this.sessionChoice
		}
		else {
			this.setTheme(this.getDefaultUserPreference())
			return this.getDefaultUserPreference()
		}
	}
}
