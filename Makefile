SHELL=/bin/bash
DOCS=yat-docs
BUILDDIR=${DOCS}/build
DEBUG?="tari-docs:*"

clean:
	rm -fr $(BUILDDIR)

cleandocs:
	cd $(DOCS) && npm run clean-docs

clean-all: clean cleandocs

generate:
	cd $(DOCS) && npm run generate-docs

build: clean-all generate
	cd $(DOCS) && npm run build

preview:
	cd $(DOCS) && npm run serve
