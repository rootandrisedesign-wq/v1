# v1

Monorepo root: แอปพอร์ตโฟลิโอ Next.js อยู่ในโฟลเดอร์ **`portfolio/`**

## เว็บไซต์ (Production)

หลัง deploy สำเร็จบน Vercel จะได้ URL ลักษณะ `https://…vercel.app` — นำมาแทนบรรทัดด้านล่าง แล้ว commit หรือใส่ที่ GitHub → **About → Website**

**Live:** _(ใส่ URL จาก Vercel เช่น `https://....vercel.app`)_

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
