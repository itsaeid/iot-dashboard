# 🛰️ IoT Sensor Management Dashboard

A modern, interactive dashboard for monitoring and managing IoT sensors across the globe, built with **React.js**, **TypeScript**, **Leaflet**, **Tailwind** and **shadcn/ui**.

This project provides real-time visualization of sensor locations, statuses, and management capabilities through an intuitive UI.

Back-end we just used a Mock api that used json srver.

---

## Figma design link:

https://www.figma.com/design/OZhGx4Va0zFvyubKcpk6am/Control-Dashboard?node-id=82-174&t=mlrQiObtkcR4hDDG-1

## ✨ Features

- 🌍 **Global Sensor Map**
  - Interactive map powered by **Leaflet**
  - Sensors displayed with color-coded markers:
    - 🟢 Online
    - 🟡 Offline
    - 🔴 Error
  - Filter sensors by status (Online / Offline / Error)

- 📊 **Dashboard Statistics**
  - Total sensors count
  - Online, Offline, and Error breakdown
  - Dynamic updates based on backend data

- 🧩 **Sensor Management Panel**
  - Scrollable sensor list with fixed header
  - Add new sensors via modal form
  - Edit or delete sensors using contextual menu
  - Icon-based sensor types (Camera, Radar, CPU, etc.)

- 🎛️ **Zone Controls**
  - Safe Zone, Alarm Zone, Restricted Area
  - Custom blue-themed switches (shadcn customized)
  - Toggle visibility and behavior per zone

- 🎨 **Clean UI / UX**
  - Fully responsive layout
  - Dark & light mode ready
  - Tailwind CSS based styling
  - Pixel-perfect implementation based on provided designs

---

## 🛠️ Tech Stack

- **Framework**: React.js (App Router)
- **Language**: TypeScript
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Map**: Leaflet + react-leaflet
- **State & Data Fetching**:
  - Custom React hooks
  - REST API (Mock / Backend on port 3000)
- **Icons**: lucide-react
- **Caching**: React Query

---


## How to run the project

**Install dependencies**: npm install
**Ru the service**: npm run dev
**Run the backend in a seprated teminal**: npx json-server --watch db.json --port 3000



##  Backend & Mock Data

Backend runs on port 3000

**Supports**:
- Sensor list
- Dashboard statistics
- Notifications
- Mock data includes:
- 15 sensors across different global locations
- 9 online, 4 offline, 2 error sensors



