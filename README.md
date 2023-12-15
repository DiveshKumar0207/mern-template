# MERN Stack Template

This is a template repository for projects using the `MERN` (MongoDB, Express.js, React, Node.js) stack + `TS` (Typescript). It provides a basic project structure to help you get started quickly.

## Project Structure

```
/ # Root directory
├── client/    
│ ├── public/   
│ ├── src/   
│    ├── assets/   
│    ├── components/   
│    ├── redux/   
│ ├── prettier.config.js/      
│ ├── tailwind.config.js/      
│ ├── package.json/      
│ ----other files and configuration  
├── server/     
│ ├── @types/   
│ ├── config/
│    ├── database/
│    ├── keys/
│ ├── db/ 
│    ├── connection/  
│    ├── models/  
│ ├── middleware/ 
│ ├── router/ 
│    ├──  controllers/
│    ├──  routes/
│ ├── utils/ 
│ ├── validation/  
│ └── index.ts 
│ └── .env 
├── .gitignore 
├── package.json 
├── tsconfig.json 
├── README.md 

````

## Styling

### Tailwind CSS

This project utilizes [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.

### Material Tailwind

Additionally, the project incorporates [Material Tailwind](https://material-tailwind.com/), a Material Design component library built on top of Tailwind CSS. Material Tailwind provides ready-to-use components that follow the Material Design guidelines.

Feel free to explore the documentation of both [Tailwind CSS](https://tailwindcss.com/docs) and [Material Tailwind](https://material-tailwind.com/docs) for more details on styling and available components.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-stack-template.git

2. Navigate to the project directory:

   ```bash
   cd mern-template
   ```

3. Install dependencies:

   ```bash
   # Install SERVER dependencies
   npm install

   # Install CLIENT dependencies
   cd ../client
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory.
      - Enter necessary info like PORT, DatabaseURL etc 

5. Run the development server:

   ```bash
   # Start the SERVER
   npm run dev

   # Start both CLIENT and SERVER
   npm run both

   # Start the CLIENT
   cd ../client
   npm run dev 
   ```

6. Open your browser and visit `http://localhost:5173` (vite default port) to see the React application.

## Additional Instructions

- Update this `README.md` file to provide specific instructions, features, and documentation for your project.
- Customize the project structure, configurations, and dependencies as needed for your application.

