git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
install:
	@npm install
test:
	@echo ""
	@echo "make test-ios             Test sample for iOS"
	@echo "make test-android         Test sample for Android"
	@echo "make test-pc              Test sample for PC"
test-ios: install
	platform=ios macaca run --server --verbose -d ./macaca-test/macaca-mobile-sample.test.js
test-android: install
	platform=android macaca run --server --verbose -d ./macaca-test/macaca-mobile-sample.test.js
test-pc:
	macaca run --verbose -d ./macaca-test/macaca-desktop-sample.test.js
jshint:
	@${npm_bin}/jshint .
.PHONY: test
