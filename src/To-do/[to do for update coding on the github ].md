[to do for update coding on the github ]
0)git add .
1)npm install react-router-dom
# or pin v6 explicitly:
npm install react-router-dom@6

2)npx update-browserslist-db@latest


3)npm run build

If the build now succeeds, you can proceed to push your changes.
If there are further errors, paste the error output here and I’ll help debug.
Commit your source changes and push to GitHub
From the repo root (Client folder if that’s the git repo), run:

# see current status
git status

# stage your changes
git add .

# commit with a helpful message
git commit -m "Add react-router-dom and update NavBar to use Link"

# push to the main branch on origin
git push origin main




If you haven’t set the remote origin, add it (choose SSH or HTTPS):

# HTTPS
git remote add origin https://github.com/Omran-creator/MobileFixHub.git

# or SSH
git remote add origin git@github.com:Omran-creator/MobileFixHub.git

# then push and set upstream
git push -u origin main






Notes about deployment vs source push

"Uploading to GitHub" usually means committing & pushing source (above). This will update the repository on github.com.
You also have a deploy script using gh-pages in package.json. To publish the production build to GitHub Pages (after installing deps and building), run:


npm run deploy