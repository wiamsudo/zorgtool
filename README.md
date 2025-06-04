# Patient Support Portal

## Overview
The Patient Support Portal is an innovative digital platform designed to enhance patient guidance through a collaborative approach between therapists and an AI chatbot. The primary goal is to empower patients throughout their journey while maintaining a personal touch from their therapist.

## Features
- **AI Chatbot**: A supportive tool that assists patients with reminders, journaling, and recognizing behavioral patterns.
- **Stoplight Method**: Early detection and intervention system that allows patients to communicate their status (Green, Orange, Red) to their therapist.
- **Therapist Dashboard**: A real-time overview for therapists to manage patient alerts and prioritize responses.
- **Personalization**: Admins can add patient-specific attachments to enhance AI interactions.
- **Gamification**: Patients earn coins for engagement, which can be redeemed for rewards.

## Project Structure
```
patient-support-portal
├── client
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   └── ChatUI.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
├── server
│   ├── src
│   │   ├── server.ts
│   │   ├── api
│   │   │   └── index.ts
│   │   ├── services
│   │   │   └── AIService.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── shared
│   └── types
│       └── index.ts
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/patient-support-portal.git
   ```
2. Navigate to the client and server directories and install dependencies:
   ```
   cd patient-support-portal/client
   npm install
   cd ../server
   npm install
   ```

## Running the Application
- Start the server:
  ```
  cd patient-support-portal/server
  npm start
  ```
- Start the client:
  ```
  cd patient-support-portal/client
  npm start
  ```

## Usage
- Access the portal through your web browser at `http://localhost:3000`.
- Patients can interact with the chatbot for support and guidance.
- Therapists can monitor patient statuses through their dashboard.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.