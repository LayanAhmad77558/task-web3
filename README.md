# task-web3
task-web3
🤖 Robot Arm Control Panel
 
A web-based control panel to manage and save robotic arm motor positions. This project allows users to control six motors, save specific poses, load them, run them, and delete them — all using a simple and clean interface built with HTML, CSS, JavaScript, and PHP connected to a MySQL database.
 
🛠 Features
 
- 🎛 Real-time control sliders for 6 motors (0° - 180°)
- 💾 Save current pose to the database
- ▶️ Run any saved pose
- 🧲 Load a saved pose into the control panel
- ❌ Delete pose from the database
- 📋 Dynamic table to view and manage all saved poses
 
📂 Project Structure
 
index.html          # Main UI
style.css           # Styling file
script.js           # Frontend logic
db.php              # Database connection
save_pose.php       # Save new motor values to DB
get_poses.php       # Fetch all saved poses
get_run_pose.php    # Run pose by ID
update_status.php   # Update status of a pose
delete_pose.php     # Delete a pose by ID
get.php             # Get pose data by ID (used in Load)
README.md           # Project documentation
 
🧠 Technologies Used
 
- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Backend: PHP 8+
- Database: MySQL
- Other: XAMPP / MAMP / WAMP for local server
 
🧱 Database Schema
 
CREATE TABLE poses (
 id INT AUTO_INCREMENT PRIMARY KEY,
 motor1 INT NOT NULL,
 motor2 INT NOT NULL,
 motor3 INT NOT NULL,
 motor4 INT NOT NULL,
 motor5 INT NOT NULL,
 motor6 INT NOT NULL,
 status INT DEFAULT 0
);
 
🚀 How to Use
 
1. Start local server (e.g. XAMPP, WAMP, etc.)
2. Create MySQL database named poses
3. Import table using the schema above
4. Place all files in your htdocs or equivalent root directory
5. Open browser and go to http://localhost/your-folder/index.html
6. Start controlling, saving, and running motor positions!
 
⚙️ Functions Explained
 
savePose()
Saves the current motor values (from sliders) to the database via save_pose.php.
 
runPose(id)
Sends a command to "run" a specific pose by its ID using get_run_pose.php.
 
loadPose(id)
Loads the selected pose into the sliders so you can modify or re-run it.
 
deletePose(id)
Deletes the selected pose from the database via delete_pose.php.
 
📌 Notes
 
- This project is designed to simulate controlling a robotic arm.
- You can easily integrate it with a real robot using Arduino and serial communication (not included in this version).
- Make sure to enable mysqli extension in your PHP server.
