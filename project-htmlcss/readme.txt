INTEGRATING ONLINE EDUCATION WITH FREELANCING PLATFORM 
----------- ------ --------- ---- ----------- --------


DEMO VIDEO LINK:
https://drive.google.com/file/d/1BO0Apb9iHfMKKU6jYZgI8uJYB6e9QtQ7/view?usp=sharing


---------------------------------------------------------------------------------------------------------------------
PROBLEM STATEMENT:
Integrate a freelancing platform with online education to provide hands-on experience and financial appreciation,
addressing the lack of structured, self-paced learning and learner engagement.

Detailed view:-
Low student engagement, ineffective assessments, and inadequate support systems in online education lead to suboptimal learning outcomes.

Students often feel isolated, have limited interaction with peers and instructors, and lack immediate feedback and accountability.

Ineffective assessment methods fail to accurately gauge students' understanding, progress, and mastery.

Many online platforms lack comprehensive support systems, leaving students without sufficient guidance or personalized assistance.

Addressing these issues is crucial for improving learning outcomes and ensuring the viability of online education as an alternative to traditional learning.

-------------------------------------------------------------------------------------------------
SOLUTION:
WHAT ARE LACKING IN THE CURRENT AVAILABLE MARKET PRODUCTS:

FREELANCING PLATFORM--
No skillbased learning path.
Receival of projects is complex task
Approaching the known clients for future projects after the first project.
no app recommendations 
No concrete platform to build our profile weightage and get more complex projects.

ONLINE EDUCATION PLATFORM--
Lack of gaining Practical knowledge
Social media distractions due to self 
Paced learning
Technical Issues that cause distraction
Lack of Interest
Mindless watching of classes
Use of chat gpt to complete assignments

-------------------------------------------------------------------------------------------
PROPOSED SOLUTION:

Hybrid Learning Platform – Combines academic learning with practical freelancing experience.

Industry-Collaborated Courses – Developed with experienced freelancers for real-world relevance.

Skill Development – Focus on time management, client communication, project management, and technical skills.

Hands-on Projects – Students work on real projects to build portfolios for potential clients.

Freelance Platform Partnerships – Collaborations with Upwork, Fiverr, and Freelancer for direct opportunities.

Mentorship & Expert Guidance – Access to experienced freelancers for mentorship and feedback.

Intuitive User Interface – Easy navigation for accessing courses, mentorship, and freelance jobs.

Continuous Feedback & Improvement – Regular input from students and freelancers for platform enhancement.

Marketing & Outreach – Targeting students and freelancers to grow platform adoption.

Seamless Transition to Freelancing – Equipping students with skills, networks, and job access for career success.

-------------------------------------------------------------------------------------------
STEPS INVOLVED IN DESIGNING THE WEB APPLICATION:

•	Frontend: React for a responsive web application, providing a smooth user experience across devices and allowing seamless navigation between freelancing and educational features.
•	Backend: Node.js with Express for handling application logic, user requests, and API integration, ensuring quick response times and efficient data processing.
•	Database: MongoDB for storing user profiles, course content, project data, and user interactions, providing flexibility for handling diverse content.

--------------------------------------------------------------------------------------------
INSTRUCTIONS AND WORK FLOW OF THE WEB APPLICATION:


Instructions:

First run the node server , next start the react client

Users must first log in to access the platform.

Users can choose between learning a course or freelancing.

If learning, they must complete all modules, assessments, and receive a badge.

If freelancing, they can either post work or complete tasks after uploading earned badges.

All progress, assessments, and work details are stored in the database.
-------------------------------------------------------------------------------------------
Workflow:

Page 1: Login Page
Users enter their credentials to access the platform.

Authenticate users before proceeding.

Page 2: Choose Path
Two options:

Learn a Course → Navigate to course selection.

Freelance → Navigate to work options.

Learning Path:
Page 3: Course List
Display a list of available courses.

Users can select a course to view details.

Page 4: Course Details
Show course description.

Provide a "Start Course" button.

Page 5: Course Modules
Display 4 modules, each containing:

Video content

PDF materials

Assessment

Users must pass the assessment with at least 60% to unlock the next module.

Store marks in the database.

Page 6: Completion & Badge
After completing all modules successfully:

Award a badge.

Display a success message.

Freelancing Path:
Page 7: Choose Freelance Action
Two options:

Do Work (Find and complete freelance tasks).

Post Work (List a freelance task for others).

If "Do Work" Selected:
Page 8: Upload Badge
Users must upload their earned course badge to verify expertise.

Page 9: Browse & Complete Work
Display freelance tasks related to the uploaded badge.

Users select a task, complete it, and submit it.

Return to Page 7 after task completion.

If "Post Work" Selected:
Page 10: Post Work Form
Users enter details of a freelance task.

Store work details in the database.

The task will then be displayed in the "Do Work" section.

Database Considerations:

User Data (Login credentials, badges earned, assessment scores).

Course Progress (Modules completed, scores stored, badge awarded).

Freelance Tasks (Posted work, completed work, assigned users).

Uploaded Badges (For verification before accessing freelance tasks).

------------------------------------------------------------------------------------------
Intructions to follow:

Step 1: Clone the Repository (if available)
bash
Copy
git clone <your-repository-url>
cd learning-freelance-platform

Step 2: Backend Setup
bash
Copy
# Navigate to server directory
cd server

# Install backend dependencies
npm install express mysql2 jsonwebtoken bcryptjs cors dotenv

# Create required directories
mkdir config controllers models routes middleware

# Create necessary files
touch config/db.js controllers/authController.js models/User.js routes/authRoutes.js middleware/auth.js server.js .env

# Initialize package.json (if not already present)
npm init -y

Step 3: Frontend Setup
bash
Copy
# Navigate to client directory
cd ../client

# Install frontend dependencies
npm install axios react-router-dom

# Create component structure
mkdir -p src/components/{Auth,Learning,Freelance} src/utils src/styles
touch src/components/Auth/Login.js src/components/Learning/CourseList.js src/components/Freelance/FreelanceOptions.js src/utils/api.js src/styles/App.css

Step 4: Database Setup
Create MySQL database:

sql
Copy
CREATE DATABASE learning_freelance;
Run the schema from the previous SQL script to create tables

Step 5: Environment Configuration
bash
Copy
# In server directory
cd ../server

# Create .env file with these variables
echo "JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" > .env
echo "DB_HOST=localhost" >> .env
echo "DB_USER=root" >> .env
echo "DB_PASSWORD=yourpassword" >> .env
echo "DB_NAME=learning_freelance" >> .env

Step 6: Start the Application
Start backend:

bash
Copy
cd server
node server.js
Start frontend (in new terminal):

bash
Copy
cd client
npm start

Step 7: Verify Setup
Check backend is running on http://localhost:5000

Check frontend is running on http://localhost:3000

Test the login with sample credentials