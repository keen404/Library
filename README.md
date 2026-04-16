# Library - Vanilla JavaScript Book Manager

โปรเจกต์นี้เป็น Web App ขนาดเล็กสำหรับจัดการรายการหนังสือ (Library Management) พัฒนาด้วย HTML, CSS และ JavaScript แบบไม่พึ่ง Framework เพื่อแสดงพื้นฐานด้าน DOM Manipulation, Event Handling และการออกแบบโครงสร้างข้อมูลฝั่ง Frontend

## เป้าหมายของโปรเจกต์

- สร้างระบบจัดการหนังสือที่ใช้งานได้จริงในระดับ MVP
- แสดงความเข้าใจการแยกความรับผิดชอบของฟังก์ชัน (single responsibility)
- ฝึกการทำงานกับข้อมูลแบบ in-memory และการ sync ข้อมูลกับ UI
- พัฒนาทักษะการเขียนโค้ดที่อ่านง่ายและต่อยอดได้

## ฟีเจอร์หลัก

- แสดงรายการหนังสือในรูปแบบตาราง
- เพิ่มหนังสือใหม่ผ่าน Modal Dialog
- ลบหนังสือทีละรายการ
- สลับสถานะการอ่าน (read/unread)
- สร้าง ID เฉพาะสำหรับหนังสือแต่ละเล่มด้วย `crypto.randomUUID()`
- มีข้อมูลตัวอย่างเริ่มต้นเพื่อทดลองใช้งานทันที

## เทคโนโลยีที่ใช้

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Browser Web APIs (`dialog`, `crypto.randomUUID`, DOM API)

## โครงสร้างการทำงานโดยย่อ

- ใช้ Array ชื่อ `library` เป็นแหล่งข้อมูลหลักของแอป
- สร้าง object หนังสือผ่าน constructor function `book`
- ฟังก์ชัน `addBookToLibrary()` เพิ่มข้อมูลเข้า Array
- ฟังก์ชัน `displayBook()` render ตารางใหม่จากข้อมูลล่าสุด
- ฟังก์ชันย่อย (`addRemoveButton`, `addReadStatusButton`) จัดการ interaction ของแต่ละแถว
- ฟังก์ชัน `main()` เป็น entry point สำหรับ initial data และ bind event

## วิธีรันโปรเจกต์

1. Clone repository
2. เปิดโฟลเดอร์โปรเจกต์
3. เปิดไฟล์ `index.html` ด้วย browser

หมายเหตุ: โปรเจกต์นี้เป็น static frontend จึงไม่ต้องติดตั้ง dependency เพิ่ม

## สิ่งที่สามารถพัฒนาต่อ

- เพิ่ม validation ฟอร์ม (required, number range, message แสดงข้อผิดพลาด)
- บันทึกข้อมูลลง `localStorage` เพื่อคงข้อมูลหลังรีเฟรช
- เพิ่มหัวตารางและปรับ UI ให้ responsive มากขึ้น
- เพิ่ม unit tests สำหรับฟังก์ชันจัดการข้อมูล
- ปรับรูปแบบโค้ดจาก constructor function เป็น `class` หรือใช้ module แยกไฟล์

## Commit Convention ที่ใช้ในโปรเจกต์

- `Implement`: สร้างฟีเจอร์ใหม่
- `Fix`: แก้บัค
- `Improve`: Refactor / ปรับประสิทธิภาพ
- `Remove`: ลบส่วนที่ไม่ใช้งาน

ตัวอย่าง:

`Improve(UI): responsive layout for mobile`