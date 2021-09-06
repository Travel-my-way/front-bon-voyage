.PHONY: front
VERSION = $(shell git describe --tags --abbrev=0)
NEXT_VERSION = $(shell scripts/semver bump ${step} ${VERSION})

image_name ?=localhost:32000
component ?= front
version ?= latest
step ?= "minor"

clean:
	rm -Rf dist
build: clean
	npm i && npm run build
image: build
	docker build -t ${image_name}/${component}:${version} .


all:
	@echo "Please read this file !"

is_dirty:
	@git diff --cached --quiet --exit-code || (echo "Master in dirty state !!" && exit 1)

tag: is_dirty
	@echo "Current version: ${VERSION}"
	@echo "Next version: ${NEXT_VERSION}"
	git tag -a v${NEXT_VERSION} -m '${step} bump to v${NEXT_VERSION}'
