#/bin/bash
set -e

rm -rf .next

# clone
if [ ! -d out ]; then
    git clone git@github.com:supertassu/supertassu.github.io.git out
fi

# export
./node_modules/.bin/next build
./node_modules/.bin/next export

# keybase
rm -f out/keybase.txt
cp keybase.txt out/keybase.txt

# cname
rm -f out/CNAME
echo "tassu.me" > out/CNAME

rm -rf out/404
cp out/not-found/index.html out/404.html
touch out/.nojekyll
