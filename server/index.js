const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// 创建MySQL连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my-blog-db'
});

// 处理GET请求，查询博客列表
app.get('/blogs', (req, res) => {
  pool.query('SELECT * FROM blogs', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// 处理POST请求，创建新博客
app.post('/blogs', (req, res) => {
  const { title, content } = req.body;

  pool.query('INSERT INTO blogs (title, content) VALUES (?, ?)', [title, content], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true });
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
