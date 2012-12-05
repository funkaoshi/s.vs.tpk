all: build deploy

build:
	jekyll

deploy:
	rsync -avz --delete --exclude=Makefile --exclude=README.md \
	      --exclude .gitignore --exclude=.git \
	      /Users/ramanan/Documents/Code/s.vs.tpk/_site/ \
	      funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

clean:
	rm -rf _site/*


