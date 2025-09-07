cd /Users/mohitkumar/Documents/content-pro

# Configure git if you haven't already
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mohitkumar000/content-pro.git
git push -u origin main
# If your default branch is 'main'
git push -u origin main
# Or if your default branch is 'master'
git push -u origin master
