import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout"
import DashboardPage from "@/pages/dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}