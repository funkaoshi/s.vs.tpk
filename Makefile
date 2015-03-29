all: build deploy

build:
	jekyll build

deploy:
	rsync -avz --delete --exclude=Makefile --exclude=README.md \
	      --exclude .gitignore --exclude=.git --exclude=new_post_template.md \
	      --exclude new.rb \
	      _site/ \
	      ramanan@funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/
	ssh ramanan@funkaoshi.com chmod 644 save.vs.totalpartykill.ca/grab-bag/synthexia/synthexia-header.gif

clean:
	rm -rf _site/*


