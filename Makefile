SHELL=/bin/bash
DOCS=yat-docs
BUILDDIR=${DOCS}/build
DEBUG?="yat-docs:*"
NODE_SRC=${DOCS}/sdks/nodejs

clean:
	rm -fr $(BUILDDIR)

cleandocs:
	cd $(DOCS) && npm run clean-docs

clean-all: clean cleandocs

generate:
	cd $(DOCS) && npm run generate-docs

build: clean-all generate
	cd $(DOCS) && npm run build

$(NODE_SRC)/package.json: build

build-node-dist: $(NODE_SRC)/package.json
	cd $(NODE_SRC) && npm i && npm run build

preview:
	cd $(DOCS) && npm run serve
