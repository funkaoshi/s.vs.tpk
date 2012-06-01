deploy:
	rsync -vr --delete  _site/ funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

clean:
	rm -rf _site/*


