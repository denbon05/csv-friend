setup:
	npm ci

lint:
	npm run lint

format:
	npx prettier --write .

fix: format
	npx eslint --fix .

test:
	clear && npm run test

cover:
	npm test -- --coverage --coverageProvider=v8

build:
	rm -fr dist && npm run build
