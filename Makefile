git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
install:
	@npm install
test:
	@echo ""
	@echo "make test-ios             Test sample for iOS"
	@echo "make test-ios-safari      Test sample for iOS Safari"
	@echo "make test-android         Test sample for Android"
	@echo "make test-android-chrome  Test sample for Android Chrome"
	@echo "make test-pc              Test sample for PC"
test-ios: install
	platform=ios macaca run --verbose -d ./macaca-test/macaca-mobile-sample.test.js
test-ios-safari: install
	browser=safari macaca run --verbose -d ./macaca-test/macaca-mobile-browser-sample.test.js
test-android-chrome: install
	browser=chrome macaca run --verbose -d ./macaca-test/macaca-mobile-browser-sample.test.js
test-android: install
	platform=android macaca run --verbose -d ./macaca-test/macaca-mobile-sample.test.js
test-pc:
	macaca run --verbose -d ./macaca-test/macaca-desktop-sample.test.js
travis-pc:
	${npm_bin}/macaca run -d ./macaca-test/macaca-desktop-sample.test.js --no-window
travis: install travis-pc
	@echo travis passed
jshint:
	@${npm_bin}/jshint .
.PHONY: test
