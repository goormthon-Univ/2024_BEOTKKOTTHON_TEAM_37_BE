# 2024_BEOTKKOTTHON_TEAM_37_BE

크롬 설치 - window
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

npm install puppeteer

최신 버전
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install node
nvm use node

node module 삭제 후 재 설치
rm -rf node_modules
npm install


```
2024_BEOTKKOTTHON_TEAM_37_BE
├─ .dockerignore
├─ .nvmrc
├─ config
│  └─ config.json
├─ controller
│  ├─ chatGpt.js
│  ├─ crawl.js
│  └─ user.js
├─ crawling_kakao.js
├─ crawling_naver.js
├─ Dockerfile
├─ models
│  ├─ index.js
│  └─ user.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ results.json
└─ server.js

```