YELLOW='\033[1;33m'
NC='\033[0m'

NODE_ENV=production npx webpack

echo "${YELLOW}move index.html to dist${NC}"
mkdir -p dist
cp docs/index.html dist/
cd dist

echo "${YELLOW}zip final build${NC}"
zip final.zip index.html

echo "${YELLOW}final size${NC}"
ls -hl final.zip | awk -F ' ' '{ print $5 }'

echo "${YELLOW}remaining bytes${NC}"
expr 13312 - $(ls -l final.zip | awk -F ' ' '{ print $5 }')
