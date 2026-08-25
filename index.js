const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud Computing - Lab 2</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          background-color: #f4f7f6; 
          display: flex; justify-content: center; align-items: center; 
          height: 100vh; margin: 0; 
        }
        .card { 
          background: #ffffff; padding: 40px; 
          border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); 
          text-align: center; max-width: 450px; width: 100%; 
        }
        h1 { color: #2c3e50; margin-bottom: 5px; }
        h3 { color: #7f8c8d; font-weight: 400; margin-bottom: 30px; }
        .team-box { 
          text-align: left; background: #f8f9fa; 
          padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 5px solid #3498db;
        }
        .team-box p { margin: 0 0 10px 0; font-size: 14px; color: #95a5a6; text-transform: uppercase; font-weight: bold; }
        .team-box ul { list-style-type: none; padding: 0; margin: 0; }
        .team-box li { font-size: 18px; color: #34495e; font-weight: 500; margin-bottom: 8px; }
        .status { 
          display: inline-block; padding: 10px 25px; 
          background-color: #e8f8f5; color: #1abc9c; 
          border-radius: 30px; font-weight: bold; font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>☁️ Cloud Computing</h1>
        <h3>Báo cáo thực hành Lab 2</h3>
        
        <div class="team-box">
          <p>Thành viên nhóm</p>
          <ul>
            <li>Nguyễn Minh Đức </li>
            <li>Nguyễn Tấn Phong</li>
            <li> Huỳnh Nguyễn Hoàng Vinh </li>
          </ul>
        </div>

        <div class="status">🟢 Server is running smoothly!</div>
      </div>
    </body>
    </html>
  `;
  
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});