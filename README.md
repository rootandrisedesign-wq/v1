# v1

Monorepo root: แอปพอร์ตโฟลิโอ Next.js อยู่ในโฟลเดอร์ **`portfolio/`**

## เว็บไซต์ (Production)

หลัง deploy สำเร็จบน Vercel จะได้ URL ลักษณะ `https://…vercel.app` — นำมาแทนบรรทัดด้านล่าง แล้ว commit หรือใส่ที่ GitHub → **About → Website**

**Live:** https://rootandrise-theta.vercel.app — ถ้าเปิดแล้วขึ้น **404 NOT_FOUND** ให้ทำตามหัวข้อ **แก้ 404** ด้านล่าง

## แก้เว็บ 404 หรือไม่ตรงกับโค้ดบน GitHub (สำคัญ)

### เช็กว่า Vercel ดึง repo ถูกต้อง

บน GitHub โปรเจกต์ที่ถูกต้องคือ **[rootandrisedesign-wq/v1](https://github.com/rootandrisedesign-wq/v1)** — commit ล่าสุดควรมีข้อความแบบ `docs:` หรือ `feat(portfolio):` **ไม่ใช่**แค่ `"Initial commit"` อย่างเดียว

ถ้าหน้า **Deployment** บน Vercel แสดง commit สั้นๆ แปลกๆ (เช่น `07f1e2c` + ข้อความ *Initial commit*) แต่บน GitHub ไม่มี commit นั้น แปลว่าโปรเจกต์ Vercel **ยังเชื่อมกับ repository อื่น** หรือ repo ว่าง

**แก้:**

1. ใน Vercel เปิดโปรเจกต์ → **Settings** → **Git**
2. ดู **Connected Git Repository** — ต้องเป็น **`rootandrisedesign-wq/v1`**
3. ถ้าไม่ใช่: **Disconnect** แล้ว **Connect Git Repository** → เลือก **`rootandrisedesign-wq/v1`** ใหม่
4. จากนั้นไป **Settings** → **[Build and Deployment](https://vercel.com/docs/deployments/configure-a-build)** (เมนูซ้าย) → **Root Directory** → ใส่ **`portfolio`** → **Save**
5. แท็บ **Deployments** → **Redeploy**

### ถ้า repo ถูกแล้ว แต่ยัง 404

แอป Next.js อยู่ใน **`portfolio/`** ถ้าไม่ได้ตั้ง **Root Directory** เป็น `portfolio` จะเจอ **404**

1. **Settings** → **Build and Deployment** → **Root Directory** → **`portfolio`** → **Save**
2. **Deployments** → **Redeploy**

## Deploy บน Vercel (เริ่มจากที่นี่)

1. ล็อกอิน [Vercel](https://vercel.com) แล้วกดปุ่มด้านล่าง หรือเปิดลิงก์เดียวกัน

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frootandrisedesign-wq%2Fv1)

   ลิงก์ธรรมดา: [เปิดหน้า import โปรเจกต์บน Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frootandrisedesign-wq%2Fv1)

2. เลือก repo **`rootandrisedesign-wq/v1`** (ถ้าไม่ขึ้น ให้กด **Adjust GitHub App** แล้วอนุญาต org/repo)

3. ที่ **Root Directory** คลิก **Edit** แล้วใส่ **`portfolio`** — **สำคัญมาก** ไม่ตั้งจะ build ไม่ผ่าน

4. กด **Deploy** รอจบแล้วคัดลอก **Production URL** จากหน้าโปรเจกต์

### ทางเลือก: ใช้ Terminal

```bash
cd portfolio
npx vercel login
npx vercel --prod
```

เมื่อคำสั่งจบ จะพิมพ์ URL production ในเทอร์มินัล — เอาไปใส่ในบรรทัด **Live** ด้านบน

## รันบนเครื่อง

```bash
cd portfolio
npm install
npm run dev
```

Repository: [rootandrisedesign-wq/v1](https://github.com/rootandrisedesign-wq/v1)
