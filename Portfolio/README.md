# Thabiso Sekhu: Portfolio

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Run locally
    npm install
    npm run dev                  # http://localhost:3000
    npm run build && npm start   # production check

## Edit your content
- `lib/data.tsx`: LinkedIn/GitHub/email links, LinkedIn headline, projects (case studies), certifications, tools.
- `public/avatar.jpg`: your photo. `public/Thabiso_Sekhu_CV.pdf`: your CV (the download button).

## Deploy to Vercel
1. Create a GitHub repo and push this folder:
       git init && git add . && git commit -m "Portfolio"
       git branch -M main
       git remote add origin https://github.com/<you>/portfolio.git && git push -u origin main
2. Go to vercel.com, sign in with GitHub, press Add New > Project and import the repo.
3. Keep the defaults (Framework: Next.js) and press Deploy. You get a link like `https://portfolio-xxxx.vercel.app`.
4. Optional: rename the project in Settings > General for a shorter link, e.g. `thabiso-sekhu.vercel.app`.
5. Optional custom domain: Settings > Domains. Then add `NEXT_PUBLIC_SITE_URL=https://your-domain.com` under Settings > Environment Variables and redeploy.

## Share on LinkedIn
- Add the link under Contact info > Website and in the Featured section of your profile.
- Paste the link in a post: LinkedIn shows a preview card (photo, name, "Open to work").
- If the card looks old after a change, open https://www.linkedin.com/post-inspector/, paste your link and press Inspect.
