module.exports = {
	"root":true,
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/stylistic-type-checked"
	],
	"overrides": [
		{
			"env": {
				"node": true,
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"indent": [
			"off"
		],
		"linebreak-style": [
			"off"
		],
		"quotes": [
			"error",
			"double"
		],
		"react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
		// "semi": [
		// 	"error",
		// 	"always"
		// ]
	}
};
