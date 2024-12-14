export const style =
`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

.main-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsl(217, 19%, 35%);
}

.article-card {
    max-width: 730px;
    border-radius: 10px;
}

.img-box {
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    max-height: 300px;
}

.article-banner {
    width: 100%;
    height: 100%;
}

.article-content {
    background: hsl(0, 0%, 100%);
    padding: 32px 40px;
    border-radius: 0 0 10px 10px;
}

.article-title {
    font-size: 20px;
    margin-bottom: 12px;
    line-height: 1.4;
}

.article-text {
    font-size: 13px;
    color: hsl(214, 17%, 51%);
    margin-bottom: 18px;
    line-height: 1.5;
}`;