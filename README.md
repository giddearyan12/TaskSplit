
<body>

  <h1>TaskSplit - MERN Based Task Distribution System</h1>

  <p><strong>TaskSplit</strong> is a MERN (MongoDB, Express.js, React, Node.js) based web application for efficient task assignment and tracking. It includes secure login/register functionality, agent management, and task distribution via CSV file uploads.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>👥 <strong>User Authentication</strong> (JWT)</li>
    <li>📄 <strong>Task Upload via CSV</strong></li>
    <li>🧑‍💼 <strong>Agent Management</strong></li>
    <li>📊 <strong>Dashboard View</strong></li>
    <li>✅ <strong>Real-time Task Assignment Tracking</strong></li>
    <li>🌐 <strong>Frontend in React</strong></li>
    <li>💾 <strong>Backend in Node.js + Express</strong></li>
    <li>📦 <strong>MongoDB for data storage</strong></li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>React</li>
    <li>Tailwind CSS</li>
    <li>Axios</li>
    <li>React Router DOM</li>
    <li>Toastify</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>JWT (jsonwebtoken)</li>
    <li>Multer (for CSV file uploads)</li>
  </ul>


  <h2>🧪 Local Setup</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/your-username/TaskSplit.git
cd TaskSplit</code></pre>

  <h3>2. Install Dependencies</h3>
  <strong>Backend</strong>:
  <pre><code>cd backend
npm install</code></pre>

  <strong>Frontend</strong>:
  <pre><code>cd ../frontend
npm install</code></pre>

  <h3>3. Setup Environment Variables</h3>
  <p>Create a <code>.env</code> file in the <code>/backend</code> folder:</p>
  <pre><code>PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret</code></pre>

  <h3>4. Run the Application</h3>
  <strong>Backend</strong>:
  <pre><code>cd backend
npm start</code></pre>

  <strong>Frontend</strong>:
  <pre><code>cd frontend
npm run dev</code></pre>

  <h2>📤 CSV Task Upload Format</h2>
  <p>Your CSV file should follow this format:</p>
  <pre><code>firstName, email, phone, notes</code></pre>

  <h2>📬 Contact</h2>
  <p>If you have any issues or suggestions, feel free to contact <strong>Aryan Gidde</strong>.</p>

</body>
</html>
