const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
