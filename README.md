# Tic-Tac-Toe
โปรเจคนี้ได้ทำเรื่องเกี่ยวกับ Application เกม Tic-Tac-Toe (เกม XO) โดยใช้ Vue.js และ Tailwind

## App Description
Application นี้ประกอบด้วย
- ส่วนแสดงชื่อของผู้เล่น และจำนวนคะแนนของทั้งสองฝ่าย
- ส่วนแสดงจำนวนรอบการเล่นตามที่ผู้เล่นเลือก
- Board สำหรับเล่นเกม สามารถเลือกขนาดได้
- ปุ่ม Reset สำหรับล้าง Board เพื่อเริ่มเกมใหม่

### XO Game rules
- เกม XO จะแบ่งผู้เล่นออกเป็น 2 ฝ่าย คือฝ่าย X และฝ่าย O
- ผู้เล่นจะสลับกันลงสัญลักษณ์ XO บน Board ตามสัญลักษณ์ของตนเอง โดยฝ่าย X จะเป็นผู้เริ่มก่อน
- ผู้เล่นทั้ง 2 ฝ่ายจะต้องพยายามลงสัญลักษณ์ให้เรียงต่อกันเพื่อชนะ โดยมีวิธีการชนะ 3 รูปแบบคือ
  1. ชนะแนวขนาน
  2. ชนะแนวดิ่ง
  3. ชนะแนวเฉียง
- ผู้เล่นจะชนะเกมต่อเมื่อ ฝ่ายใด ๆ มีจำนวนคะแนนที่มากกว่าเมื่อสิ้นสุดรอบการเล่นตามที่ผู้เล่นได้เลือกไว้ หรือ มีจำนวนคะแนนที่มากกว่าครึ่งของจำนวนรอบที่เลือกไว้ เช่น
  1. 3 รอบ : คะแนน 2-0 หรือ 2-1
  2. 4 รอบ : คะแนน 3-0 หรือ 3-1
  3. 5 รอบ : คะแนน 3-0 หรือ 3-1 หรือ 3-2
- ผู้เล่นทั้ง 2 ฝ่ายสามารถจบเกมแบบเสมอกันได้

### How to Play
1. เมื่อเข้าสู่หน้า Application ผู้เล่นสามารถกรอกชื่อผู้เล่นทั้งสองฝ่าย เลือกขนาดของ Board และกำหนดจำนวนรอบในการเล่นได้
2. ผู้เล่นแรกจะเป็นฝ่าย X ซึ่งสามารถเริ่มเล่นได้ก่อน โดยเลือกที่ช่องใดก็ได้
3. ผู้เล่นทั้งสองฝ่ายสลับกันเล่นจนครบทุกช่อง หรือจนกว่าจะมีการชนะตามแนวใด ๆ
4. กดปุ่ม Reset เพื่อเริ่มเกมใหม่

## Team
| NO   | NAME                 | STUDENTID   |
| :--: | -------------------- | ----------- |
| 1    | นายอภิสิทธิ์ ลอนโฮม    | 62130500133 |
| 2    | นางสาวพัชราภรณ์ เหง้าศิริ    | 63130500085 |
| 3    | นางสาวเพ็ญพิชชา อ่ำพิจิตร   | 63130500089 |
| 4    | นายภูนนท์ ศรีวรลักขณา | 63130500093 |
| 5    | นางสาวศศิภา มณีอินทร์    | 63130500108 |
