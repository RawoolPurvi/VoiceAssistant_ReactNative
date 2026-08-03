# 🤖 AURA – AI Voice Assistant

AURA is an AI-powered Voice Assistant built with **React Native** that allows users to interact naturally using their voice.

The assistant can understand spoken commands, answer questions using **ChatGPT**, generate AI images using **DALL·E**, and even speak responses back to the user using Text-to-Speech.

---

## 📱 Demo

> 🔊 **Turn on the sound to experience the complete demo.**

https://github.com/user-attachments/assets/your-demo-video

*(Replace the above link with your uploaded GitHub video or GIF.)*

---

## ✨ Features

- 🎙️ Voice-to-Text using Speech Recognition
- 🤖 AI-powered conversations using ChatGPT
- 🎨 AI image generation using DALL·E
- 🗣️ Text-to-Speech responses
- 🧠 Conversation memory for contextual follow-up questions
- 🌙 Modern Dark UI
- 📱 Fully responsive design

---

## 💡 Example Conversation

**User:**

> What is React Native?

**AURA:**

> React Native is an open-source framework developed by Meta...

**User:**

> Compare it with React.js

AURA remembers the previous conversation and automatically compares **React Native** with **React.js** without asking the user to repeat the context.

---

## 🛠 Tech Stack

### Frontend

- React Native CLI
- JavaScript
- React Navigation

### APIs

- OpenAI ChatGPT API
- OpenAI Image Generation API (DALL·E / GPT Image)

### Libraries

- Axios
- react-native-responsive-screen
- @react-native-voice/voice
- react-native-tts

---


## 🧠 Architecture

```
User
   │
   ▼
Speech Recognition
   │
   ▼
Voice → Text
   │
   ▼
Detect Request Type
   │
   ├───────────────┐
   ▼               ▼
ChatGPT        DALL·E
(Text)         (Images)
   │               │
   └───────┬───────┘
           ▼
Conversation History
           ▼
Text-to-Speech
           ▼
Display Result
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/RawoolPurvi/VoiceAssistant_ReactNative.git
```

Go inside the project

```bash
cd VoiceAssistant_ReactNative
```

Install dependencies

```bash
npm install
```

Install iOS Pods

```bash
cd ios
pod install
cd ..
```

Run Android

```bash
npx react-native run-android
```

Run iOS

```bash
npx react-native run-ios
```

---

## 🔑 Environment Variables

Create a `.env` file or update your constants file.

```javascript
export const apiKey = "YOUR_OPENAI_API_KEY";
```

Never commit your API key.

---

## 📂 Project Structure

```
src
│
├── api
│     └── openAI.js
│
├── components
│     ├── Features.js
│     └── Message.js
│
├── constants
│
├── navigation
│
├── screens
│     └── HomeScreen.js
│
└── assets
      ├── images
      └── icons
```

---

## 📚 What I Learned

While building AURA, I gained hands-on experience with:

- React Native Development
- Native Android Modules
- Speech Recognition APIs
- Text-to-Speech
- OpenAI API Integration
- AI Image Generation
- API Design
- State Management
- Responsive Mobile UI
- React Hooks
- Asynchronous Programming

---

## 🔮 Future Improvements

- 🌍 Multi-language support
- 💬 Streaming AI responses
- 🔊 Better voice selection
- 📷 Camera integration
- 📄 PDF summarization
- 🎵 Voice customization
- 📌 Chat history persistence
- ☁️ Cloud synchronization

---

## 👨‍💻 Author

**Purvi Rawool**

Frontend Developer | React Native Developer

LinkedIn:
https://www.linkedin.com/in/YOUR-LINKEDIN

GitHub:
https://github.com/RawoolPurvi

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates me to build more!
