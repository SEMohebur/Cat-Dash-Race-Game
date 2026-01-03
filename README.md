# 🐱 Cat Dash Race

live link https://lighthearted-mermaid-d37a86.netlify.app/

**Project Overview**  
Cat Dash is a browser-based racing game where 10 cats compete in a race. Each cat moves at a randomized speed, making the race unpredictable and fun. The game is built using React and supports real-time animation and state updates.

---

## 🎮 Key Features
- Randomized and unbiased race outcomes  
- Real-time animation and state updates  
- Custom sound effects (mew, cheering, running)  
- Winner cat highlight and victory animation  
- Ability to restart the race  
- Scalable and clean component-based architecture  

---

## 🛠 Technology Used
- **Frontend:** React.js  
- **Styling:** Tailwind CSS + DaisyUI  
- **Animation:** Lottie (lottie-react)  
- **Sound:** mp3 files for effects  
- **Base Language:** JavaScript ES6+  

---

## ⚙️ Game Mechanics
1. 10 cats start from 0% position  
2. Race state updates every 0.5 seconds using `setInterval`  
3. Each tick randomly increases each cat's position  
4. The first cat to reach 100% wins  
5. Race stops immediately once a winner is determined  
6. Users can restart the race  

---



## 🔊 Sound Effects
- `mew.mp3` – Cat meow  
- `cheering.mp3` – Audience cheering  
- `run.mp3` – Cat running  
- `gameStartSound.mp3` – Game start sound  
- `resetSound.mp3` – Reset effect  
- `CheeringSong.mp3` – Winner cheering song  

---

## 🚀 How to Run
1. Clone the repository:  
   ```bash
   git clone <repo-link>
