call npm install gh-pages --save-dev --legacy-peer-deps
call npm run build
git init
git add .
git commit -m "Deploy_Update"
git branch -M main
git remote add origin https://github.com/kartikey-itis/portfolio.git
git remote set-url origin https://github.com/kartikey-itis/portfolio.git
call npm run deploy
