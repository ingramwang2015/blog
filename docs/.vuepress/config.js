module.exports = {
	title: 'ingramwang主页',
	description: 'Just playing around',
	markdown: {
		lineNumbers: true
	}
}

module.exports = {
	themeConfig: {
		nav: [
			{ text: '主页', link: '/'},
			{ text: '博文',
				items: [
					{ text: 'iOS', link: '/ios/ios1'},
					{ text: 'Web', link: '/web/web1'},
					{ text: 'Android', link: '/android/android1'},
				]
			},
			{ text: '关于', link: '/about/'},
			{ text: 'Github', link: 'https://github.com/ingramwang2015'},
		],
		sidebar: {
			'/ios/': ["ios1"],
			'/web/': ["web1"],
			'/android/': ["android1"]
		},
		sidebarDepth: 2,
		lastUpdated: 'Last Updated'
	}
}
