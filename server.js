const express = require('express');
const app = express();
const port = process.env.PORT || 8000; 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');        // 미들 웨어
const cookieparser = require('cookie-parser');    // 미들 웨어
const cors = require('cors');                     // 미들 웨어

app.use(bodyParser.json());                       // body에 있는 것들을 json으로 파싱 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());                          // cookie값 파싱
app.use(cors());                                  // cors 보안 

const userController = require('./controller/user.js');
const chatController = require('./controller/chatGpt.js');
const crawlController = require('./controller/crawl.js');

// 미들 웨어
function verifyToken(req, res, next) {
    const token = req.cookies['accessToken']; // accessToken추출

    console.log(token); 

    // token이 존재하지 않으면
    if (!token) {
        return res.status(403).json('notoken');
    }
    // token이 존재하면
    else {
        const secretKey = "accesstoken";

        // jwt를 사용하여 토큰 유효성 검증
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.clearCookie('accessToken', {path: '/', exprise: new Date(0)});
                return res.status(401).json({message:'TokenFail'});
            }
            else {
                // 복호화된 토큰의 내용 확인
                console.log('이메일: ', decoded.email);
                console.log('사용자 이름: ', decoded.name);
                req.email = decoded.email;
                req.name = decoded.name;
                req.email = decoded.email;
                next();
            }
        })
    }
}

// 크롤링 API
app.post('/crawl', crawlController.crawlApi);

// Chat GPT API
app.post('/chat', verifyToken, chatController.chatGpiApi);

// hi API
app.get('/hi', verifyToken, userController.hiApi);

// 회원가입 API
app.post('/signup', userController.signupApi);

// 로그인 API
app.post('/login', userController.loginApi);

// 마이페이지 API
//app.get('/mypage', verifyToken, userController.myPageApi);

// test API
//app.post('/test', userController.testApi);

app.listen(port, () => {
    console.log(`Server is running at ${port}!`);
});