YELLOW='\033[1;33m'
NC='\033[0m'

NODE_ENV=production npx webpack

echo "${YELLOW}move index.html to dist${NC}"
mkdir -p dist
cp docs/index.html dist/
cd dist

echo "${YELLOW}extracting javascript${NC}"
sed -E 's/.*\<script\>(.*)\<\/script\>/\1/' index.html > js.js

echo "${YELLOW}road roller${NC}"
npx roadroller js.js -o output.js

sed -E 's/(.*)\<script\>.*/\1/' index.html > template.html

echo "<script>" >> template.html
cat template.html output.js > final.html
echo "</script>" >> final.html

echo "${YELLOW}zip final build${NC}"
rm final.html.zip
ect -zip -9 final.html

echo "${YELLOW}src directory total size${NC}"
du -sh ../src | awk '{print $1}'

echo "${YELLOW}final size${NC}"
ls -hl final.html.zip | awk -F ' ' '{ print $5 }'

echo "${YELLOW}remaining bytes${NC}"
expr 13312 - $(ls -l final.html.zip | awk -F ' ' '{ print $5 }')
