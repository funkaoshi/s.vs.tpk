all: build deploy

build:
	hugo --minify

serve:
	hugo server -D

deploy:
	rsync -avz --delete --exclude=Makefile --exclude=README.md \
	      --exclude .gitignore --exclude=.git --exclude=new_post_template.md \
	      --exclude new.rb --exclude=migrate_to_hugo.rb \
	      public/ \
	      ramanan@funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/
	ssh ramanan@funkaoshi.com chmod 644 save.vs.totalpartykill.ca/grab-bag/synthexia/synthexia-header.gif

clean:
	rm -rf public/*
