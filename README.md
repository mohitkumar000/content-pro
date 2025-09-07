# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5dc0f5e0-79f1-4133-b393-676a079bafcd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5dc0f5e0-79f1-4133-b393-676a079bafcd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/YOUR_USERNAME/craft-your-brand-story.git

# Step 2: Navigate to the project directory.
cd craft-your-brand-story

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5dc0f5e0-79f1-4133-b393-676a079bafcd) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Craft Your Brand Story

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/craft-your-brand-story.git
   ```

2. Navigate to the project directory:

   ```bash
   cd craft-your-brand-story
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Troubleshooting

#### Security Vulnerabilities
When installing dependencies, you might see this warning:
```
3 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.
```

To investigate these issues:
1. Run `npm audit` to see detailed information
2. Run `npm audit fix` to attempt automatic fixes
3. If issues persist, they may require manual review of dependencies

#### Port Configuration
- Default port: 8081
- If port 8081 is in use, Vite will automatically try the next available port
- You can see the active port in the terminal when running `npm run dev`:
  ```
  ➜  Local:   http://localhost:8081/
  ➜  Network: http://192.168.0.127:8081/
  ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:

   ```
   http://localhost:8081
   ```

   Note: The default port is 8081. If this port is in use, Vite will automatically try the next available port.

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting
- `npm run test` - Run tests