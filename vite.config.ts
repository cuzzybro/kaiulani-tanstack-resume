import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/kaiulani-tanstack-resume/',
	plugins: [react()],
})