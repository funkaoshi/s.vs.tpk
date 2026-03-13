all: build deploy-staging

build:
	hugo

serve:
	hugo server -D

deploy-staging:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/beta.save.vs.totalpartykill.ca/

deploy:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

prod: build deploy

clean:
	rm -rf public/*

validate-urls:
	python3 scripts/validate-urls.py
