all: build deploy

build:
	jekyll build

deploy:
	rsync -avz --delete --exclude=Makefile --exclude=README.md \
	      --exclude .gitignore --exclude=.git --exclude=new_post_template.md \
	      --exclude new.rb \
	      /Users/ramanan/Documents/Code/s.vs.tpk/_site/ \
	      funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

clean:
	rm -rf _site/*


