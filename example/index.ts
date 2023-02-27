import { createApp } from "vue";

import App from './App.vue'

import Button from "../packages/components/botton";

const app = createApp(App)

app.use(Button)