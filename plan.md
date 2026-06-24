# Portfolio Website - Next.js

## 1. Mục tiêu dự án

Xây dựng website portfolio cá nhân bằng **Next.js** để giới thiệu bản thân, kỹ năng, kinh nghiệm thực tập và các dự án đã làm.

Website dùng để:

* Đưa vào CV
* Gửi cho nhà tuyển dụng
* Showcase kỹ năng Frontend / Fullstack
* Thể hiện tư duy UI/UX và cách tổ chức code

---

## 2. Công nghệ sử dụng

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn/UI
* Framer Motion
* Lucide React

### Tools

* Git
* GitHub
* Vercel
* VS Code

---

## 3. Chức năng chính

### Home Page

* Hero section giới thiệu bản thân
* Nút Download CV
* Nút View Projects
* Nút Contact Me

### About Section

* Giới thiệu ngắn về bản thân
* Sinh viên năm cuối ngành Công nghệ thông tin
* Có kinh nghiệm thực tập Fullstack Developer
* Định hướng trở thành Fullstack Developer

### Skills Section

Hiển thị kỹ năng theo nhóm:

#### Frontend

* ReactJS
* Next.js
* React Native
* Tailwind CSS
* Redux Toolkit

#### Backend

* Node.js
* Express.js
* Django
* Flask

#### Database

* MongoDB
* MySQL
* SQL Server

#### Tools

* Git
* GitHub
* Postman
* Docker
* CI/CD

### Experience Section

Hiển thị kinh nghiệm làm việc:

**WisdomRobotics**
Fullstack Developer Intern/Fresher

Nội dung:

* Developed and maintained ReactJS / Next.js web applications
* Built React Native mobile applications
* Integrated RESTful APIs
* Implemented authentication flows
* Built reusable components
* Improved UI/UX with loading states and skeleton UI
* Refactored code to improve maintainability

### Projects Section

#### Project 1: JobPT

**Tech Stack:** React Native, Django, MySQL, WebSocket

Features:

* Job searching
* Apply jobs
* Real-time notifications
* Real-time messaging
* Payment for premium job posts

GitHub:
https://github.com/pmt2205/Django

#### Project 2: MovieHub

**Tech Stack:** ReactJS, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, Socket

Features:

* Movie ticket booking
* Seat selection
* Role-based authentication
* Real-time seat updates
* Online payment
* Reviews and ratings
* Real-time chat

GitHub:
https://github.com/pmt2205/MovieHub

### Contact Section

* Email
* Phone
* GitHub
* LinkedIn
* Contact form

---

## 4. Cấu trúc thư mục

```bash
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       └── page.tsx
│
├── components/
│   ├── common/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Container.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
│
├── data/
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
│
├── public/
│   ├── images/
│   └── cv/
│
├── lib/
│   └── utils.ts
│
├── types/
│   └── index.ts
│
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 5. UI Design

### Style

* Modern
* Clean
* Dark theme
* Developer-focused
* Responsive
* Smooth animation

### Color Palette

* Background: `#0f172a`
* Card: `#111827`
* Primary: `#6366f1`
* Secondary: `#06b6d4`
* Text: `#f8fafc`
* Muted Text: `#94a3b8`

### Font

* Inter
* Sans-serif

---

## 6. Các component cần xây dựng

### Common Components

* Navbar
* Footer
* Container
* SectionTitle
* Button
* Card
* Badge

### Section Components

* HeroSection
* AboutSection
* SkillsSection
* ExperienceSection
* ProjectsSection
* ContactSection

---

## 7. Dữ liệu mẫu

### projects.ts

```ts
export const projects = [
  {
    title: "JobPT",
    role: "Fullstack Developer",
    techStack: ["React Native", "Django", "MySQL", "WebSocket"],
    description:
      "A mobile job application that allows users to search and apply for jobs, receive real-time notifications, chat with recruiters, and use premium job posting services.",
    githubUrl: "https://github.com/pmt2205/Django",
  },
  {
    title: "MovieHub",
    role: "Fullstack Developer",
    techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Socket"],
    description:
      "A movie ticket booking website with role-based authentication, seat selection, real-time seat updates, payment integration, reviews, ratings, and real-time chat.",
    githubUrl: "https://github.com/pmt2205/MovieHub",
  },
];
```

### skills.ts

```ts
export const skills = [
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "React Native", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django", "Flask"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "CI/CD"],
  },
];
```

### experience.ts

```ts
export const experiences = [
  {
    company: "WisdomRobotics",
    position: "Fullstack Developer Intern/Fresher",
    time: "Dec 2025 - Apr 2026",
    descriptions: [
      "Developed and maintained web applications using ReactJS and Next.js.",
      "Built mobile applications using React Native.",
      "Integrated RESTful APIs and handled frontend-backend data flow.",
      "Implemented authentication flows.",
      "Built reusable components to improve maintainability.",
      "Improved user experience with loading states, skeleton UI, and optimistic updates.",
      "Refactored and optimized code to reduce duplication and improve performance.",
    ],
  },
];
```

---

## 8. Các bước thực hiện

### Step 1: Khởi tạo project

```bash
npx create-next-app@latest portfolio
```

Chọn:

* TypeScript: Yes
* Tailwind CSS: Yes
* App Router: Yes
* ESLint: Yes
* src directory: No

---

### Step 2: Cài thư viện

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

Cài Shadcn/UI:

```bash
npx shadcn@latest init
```

Cài button, card, badge:

```bash
npx shadcn@latest add button card badge
```

---

### Step 3: Tạo folder

```bash
mkdir components
mkdir components/common
mkdir components/sections
mkdir data
mkdir types
mkdir lib
```

---

### Step 4: Tạo dữ liệu

Tạo các file:

* `data/projects.ts`
* `data/skills.ts`
* `data/experience.ts`

---

### Step 5: Xây dựng layout

Tạo các component:

* Navbar
* Footer
* Container
* SectionTitle

---

### Step 6: Xây dựng từng section

Thứ tự làm:

1. HeroSection
2. AboutSection
3. SkillsSection
4. ExperienceSection
5. ProjectsSection
6. ContactSection

---

### Step 7: Responsive

Kiểm tra các breakpoint:

* Mobile: 320px - 640px
* Tablet: 768px - 1024px
* Desktop: 1280px trở lên

---

### Step 8: Animation

Dùng Framer Motion cho:

* Hero text
* Section reveal
* Project cards
* Skill cards
* Button hover

---

### Step 9: SEO

Cấu hình metadata trong `app/layout.tsx`:

```ts
export const metadata = {
  title: "Pham Manh Tuong | Fullstack Developer",
  description:
    "Portfolio website of Pham Manh Tuong, a Fullstack Developer Fresher specializing in React, Next.js, Node.js, and databases.",
};
```

---

### Step 10: Deploy

Deploy bằng Vercel:

```bash
npm run build
```

Sau đó push code lên GitHub và import project vào Vercel.

---

## 9. Tiêu chí hoàn thành

Website cần đạt:

* Giao diện đẹp, hiện đại
* Responsive tốt
* Có đầy đủ thông tin cá nhân
* Có project rõ ràng
* Có link GitHub
* Có nút download CV
* Có animation vừa phải
* Code sạch, dễ đọc
* Deploy được lên Vercel

---

## 10. Gợi ý nâng cấp

Sau khi hoàn thành bản cơ bản, có thể nâng cấp thêm:

* Dark / Light mode
* Blog cá nhân
* Project detail page
* GitHub API integration
* Contact form gửi email
* Đa ngôn ngữ Tiếng Việt / English
* Admin dashboard quản lý project
