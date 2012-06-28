all: build deploy

build:
	jekyll

deploy:
	rsync -avz --delete --exclude=Makefile --exclude=README.md /Users/ramanan/Sites/s.vs.tpk/_site/ funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

clean:
	rm -rf _site/*


