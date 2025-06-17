# Med-Pal

A comprehensive healthcare management application that helps users track medications, appointments, and health metrics.

## Features

- **Medication Management**: Track medicines, dosages, and schedules
- **Appointment Scheduling**: Manage doctor appointments and reminders
- **Health Metrics**: Monitor blood pressure, blood sugar, and hemoglobin levels
- **Dashboard**: Visual health insights and progress tracking
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend

- React.js
- CSS3 with custom styling
- Chart.js for data visualization
- Responsive design

### Backend

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication

## Project Structure

```
Med-Pal/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   └── data/          # Static data files
│   └── public/            # Static assets
└── server/                # Node.js backend
    ├── controllers/       # Route controllers
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    └── middleware/       # Custom middleware
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Med-Pal
   ```

2. **Install dependencies**

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**

   - Create `.env` file in the server directory
   - Add your MongoDB connection string and JWT secret

4. **Run the application**

   ```bash
   # Start the backend server (from server directory)
   npm start

   # Start the frontend (from client directory)
   npm start
   ```

## API Endpoints

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/medicines` - Get user medicines
- `POST /api/medicines` - Add new medicine
- `GET /api/appointments` - Get user appointments
- `POST /api/appointments` - Schedule appointment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue in the repository.
