# v1 — Portfolio (Next.js)

แอปพอร์ตโฟลิโออยู่ที่**รากของ repo นี้** (ไฟล์ `package.json`, โฟลเดอร์ `app/`)

## เว็บไซต์ (Production)

**Live:** https://rootandrise-theta.vercel.app

บน Vercel **ไม่ต้องตั้ง Root Directory** (เว้นว่างหรือ `.`) เพราะ Next.js อยู่ที่ราก repo แล้ว

## Deploy บน Vercel

1. เชื่อม repo **[rootandrisedesign-wq/v1](https://github.com/rootandrisedesign-wq/v1)**
2. **Root Directory:** ปล่อยว่าง — ถ้าเคยใส่ `portfolio` ให้**ลบออก**แล้ว Save
3. **Deploy** / **Redeploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frootandrisedesign-wq%2Fv1)

## รันบนเครื่อง

```bash
npm install
npm run dev
```

### CLI deploy

```bash
npx vercel login
npx vercel --prod
```

Repository: [rootandrisedesign-wq/v1](https://github.com/rootandrisedesign-wq/v1)
