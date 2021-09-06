
clean:
	rm -Rf dist
build: clean
	yarn install && yarn build
image: build
	docker build -t bv/front .