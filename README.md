# CafeFausse

A full-stack web application for a restaurant, featuring a marketing website and reservation management system. Built with React, Flask, and PostgreSQL.

## Project Structure

- `restaurant-website/` - Frontend marketing website (React)
- `flask_app/` - Backend reservation system (Flask)

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.7 or higher)
- PostgreSQL
- npm or yarn
- pip

## Environment Setup

### Frontend (Marketing Website)

1. Navigate to the frontend directory:
   ```bash
   cd restaurant-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend (Reservation System)

1. Navigate to the backend directory:
   ```bash
   cd flask_app
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the flask_app directory with:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/cafe_fausse
   FLASK_APP=run.py
   FLASK_ENV=development
   ```

## Database Setup

1. Create a PostgreSQL database:
   ```bash
   createdb cafe_fausse
   ```

2. Initialize the database:
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd flask_app
   source venv/bin/activate
   flask run
   ```

2. Start the frontend development server:
   ```bash
   cd restaurant-website
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Deployment

### Frontend Deployment

1. Build the production version:
   ```bash
   cd restaurant-website
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your hosting service.

### Backend Deployment

1. Set up a production PostgreSQL database and update the DATABASE_URL in your environment.

2. Configure your WSGI server (e.g., Gunicorn):
   ```bash
   pip install gunicorn
   gunicorn -w 4 "app:create_app()"
   ```

3. Set up a reverse proxy (e.g., Nginx) to serve both frontend and backend.

## Environment Variables

### Frontend (.env)
- `VITE_API_URL`: URL of the backend API

### Backend (.env)
- `DATABASE_URL`: PostgreSQL connection string
- `FLASK_APP`: Application entry point
- `FLASK_ENV`: Environment (development/production)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

