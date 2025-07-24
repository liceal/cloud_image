module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        // 'stylelint-config-recommended-vue', //开启这个会vue文件css部分异常
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-recess-order'
    ],
	customSyntax: 'postcss-html',
	overrides:[
		{
			files: ['**/*.{scss,sass}'],
			customSyntax: 'postcss-scss',
		}
	],
    rules: {
        'selector-class-pattern': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-empty-source': null,
        'function-url-quotes': null,
        'no-descending-specificity': null,
        'declaration-block-single-line-max-declarations': null,
        'no-duplicate-selectors': null,
        'max-line-length': null,
        indentation: 4,
        'declaration-block-no-duplicate-properties': null,
		'custom-property-empty-line-before':null,
        'value-no-vendor-prefix':null,
		'selector-pseudo-class-no-unknown':null,
		'block-no-empty':null
    }
}
