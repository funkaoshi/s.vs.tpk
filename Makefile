all: build deploy

build:
	hugo --minify

serve:
	hugo server -D

deploy-staging:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/beta.save.vs.totalpartykill.ca/
	ssh ramanan@funkaoshi.com chmod 644 beta.save.vs.totalpartykill.ca/grab-bag/synthexia/synthexia-header.gif


deploy:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/
	ssh ramanan@funkaoshi.com chmod 644 save.vs.totalpartykill.ca/grab-bag/synthexia/synthexia-header.gif

clean:
	rm -rf public/*
