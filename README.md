# v1 — Portfolio (Next.js)

แอปพอร์ตโฟลิโออยู่ที่**รากของ repo นี้** (ไฟล์ `package.json`, โฟลเดอร์ `app/`)

## เว็บไซต์ (Production)

**Live:** https://rootandrise-theta.vercel.app — ถ้ายัง **404 NOT_FOUND** ให้อ่านหัวข้อ **แก้ 404 บน Vercel** ด้านล่าง (สาเหตุมักเป็นผิดโปรเจกต์หรือโดเมนไม่ชี้ deployment ที่สำเร็จ)

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

## แก้ 404 บน Vercel (หลังย้ายโค้ดขึ้นราก repo)

โค้ดบน GitHub พร้อม deploy แล้ว ถ้าเปิด `rootandrise-theta.vercel.app` ยังขึ้น **404: NOT_FOUND** ปัญหาอยู่ที่**โปรเจกต์ / โดเมนบน Vercel** ไม่ใช่ที่ repo

### A) โดเมน `*.vercel.app` ผูกกับโปรเจกต์ไหน

1. เปิด [Vercel Dashboard](https://vercel.com/dashboard) → ดูว่ามีกี่โปรเจกต์ (เช่น **rootandrise** กับ **portfolio**)
2. โดเมน **rootandrise-theta.vercel.app** เป็นของโปรเจกต์ **rootandrise** โดยประมาณ — โปรเจกต์นั้นต้องเป็นโปรเจกต์ที่ผูก **GitHub `rootandrisedesign-wq/v1`** และมี deployment ล่าสุดเป็น **Ready** (เขียว)
3. ถ้าโปรเจกต์ **portfolio** เป็นตัวที่เชื่อม **v1** แทน ให้เปิดโปรเจกต์ **portfolio** → คัดลอก **Production** URL จริง (จะไม่เหมือน `rootandrise-theta`) แล้วใช้ลิงก์นั้น — หรือไป **Settings → Domains** ของโปรเจกต์ที่ถูกต้อง แล้วเพิ่ม / ย้ายโดเมนให้ตรง

### B) ตรวจโปรเจกต์ที่ควรเป็น v1

1. **Settings → Git** → **Connected Repository** = **`rootandrisedesign-wq/v1`**
2. **Settings → Build and Deployment → Root Directory** = **ว่างเปล่า** (ลบ `portfolio` ถ้ามี)
3. **Deployments** → เปิด commit ล่าสุด ควรเห็น **`090d818`** หรือข้อความ **refactor: move Next.js app to repo root** — ถ้าไม่ใช่ แปลว่ายังไม่ได้ deploy รอบใหม่
4. ถ้า build **Error** เปิด **Build Logs** แล้วอ่านข้อความแดง — แก้ตามนั้น แล้ว **Redeploy**

### C) ทดสอบว่า deploy นี้มีเว็บจริง

ในแท็บ **Deployments** คลิก deployment เขียวล่าสุด → กดเปิด URL แบบยาว **`…vercel.app`** (ของรอบนั้นโดยตรง) — ถ้าเปิดนั้นได้ แต่โดเมน production ยัง 404 = โดเมน production **ยังไม่ชี้ deployment นั้น** (ต้องไปแก้ที่ **Domains** / **Production Branch**)

