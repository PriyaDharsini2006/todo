# Todo App

This is a Todo Application built using Next.js, Supabase, Prisma, Zod, React-Toast, and Docker. The app allows users to manage tasks with the ability to add, edit, and delete todos, as well as marking them as completed. The backend uses Supabase for authentication and database management, while Prisma is used for data modeling.

## Features

- **Add, Edit, Delete, and Mark Todos**: Manage your tasks easily.
- **User Authentication**: Secure login and signup using Supabase.
- **Real-time Updates**: Todos are updated in real-time.
- **Error Handling**: Alerts and success messages using React-Toast.
- **Dockerized**: The app is fully containerized with Docker for easy deployment.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Supabase**: An open-source Firebase alternative that provides a backend-as-a-service (BaaS) for authentication and real-time database.
- **Prisma**: A next-generation ORM for Node.js to handle database queries with ease and type safety.
- **Zod**: A TypeScript-first schema declaration and validation library used to ensure safe data handling.
- **React-Toast**: A library for showing toast notifications (alerts) in the application.
- **Docker**: Used for containerizing the app to ensure it works in any environment without issues.

## Setup

### 1. Clone the repository

git clone https://github.com/your-username/todo-app.git
cd todo-app
### 2. Install dependencies
bash
Copy code
npm install
or if you're using pnpm:

bash
Copy code
pnpm install
### 3. Set up environment variables
Create a .env file at the root of the project and add the following environment variables:

plaintext
Copy code
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
You can get your Supabase credentials by creating a new project on Supabase.

### 4. Prisma Setup
Run the following command to set up Prisma and generate the database schema:

bash
Copy code
npx prisma migrate dev
### 5. Run the development server
Once everything is set up, you can start the app in development mode:

bash
Copy code
npm run dev
or if you're using pnpm:

bash
Copy code
pnpm run dev
This will start the app at http://localhost:3000.

### Docker Setup
If you want to run the app in a containerized environment, you can use Docker:

Build the Docker image:
bash
Copy code
docker build -t todo-app .
Run the Docker container:
bash
Copy code
docker run -p 3000:3000 todo-app
This will make the app accessible at http://localhost:3000.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Next.js
Supabase
Prisma
Zod
React-Toast
Docker
markdown
Copy code

### Explanation of Key Sections:

1. **Features**: Highlights what users can do with the app.
2. **Tech Stack**: Lists the major technologies used in your project.
3. **Setup**: Instructions on how to clone the repo, install dependencies, and set up environment variables.
4. **Prisma Setup**: Instructions to generate the database schema using Prisma.
5. **Development Server**: How to run the app in development mode.
6. **Docker Setup**: Detailed instructions on building and running the app in a Docker container.
7. **License**: Mentions the MIT License.
8. **Acknowledgments**: Credits for the technologies and services used.


