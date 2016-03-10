git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d'-e's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
install:
	@npm install
test: install
	macaca run --server --verbose
jshint:
	@${npm_bin}/jshint .
.PHONY: test
