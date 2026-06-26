export type Language = "vi" | "en";

export const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      contactBtn: "Contact Me"
    },
    hero: {
      welcome: "Welcome to my digital space",
      headline: "Hi, I am",
      imA: "I am a ",
      roles: [
        "Fullstack Developer",
        "React / Next.js Developer",
        "Tech Enthusiast",
        "Problem Solver"
      ],
      description: "Passionate Fullstack Developer fresher focused on building premium, interactive, and performant web and mobile applications. Currently aiming to deliver modern user experiences.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "My Journey",
      role: "Fullstack Developer Intern",
      stats: {
        intern: "Months Intern",
        projects: "Projects Built"
      },
      intro: "I am a web & mobile developer based in Vietnam.",
      bio1: "As a final-year IT student, I have spent significant time learning modern technologies and translating them into functional products. Through my internship at WisdomRobotics, I gained real-world exposure building scalable Fullstack web and mobile apps, writing maintainable code, and working in professional development flows.",
      bio2: "My core strength is my eagerness to learn and adapt to new tech stacks quickly. Whether it is configuring relational databases, writing RESTful backend APIs, or building highly responsive, pixel-perfect frontend experiences, I strive for clean architecture and premium UI/UX.",
      highlights: {
        education: {
          title: "Education",
          desc: "Final-year IT Student."
        },
        role: {
          title: "Role",
          desc: "Fullstack Developer Intern / Fresher."
        },
        goal: {
          title: "Career Goal",
          desc: "Aiming to become an expert Fullstack Engineer."
        }
      }
    },
    skills: {
      title: "Skills & Tech Stack",
      subtitle: "My Toolkit",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools"
      }
    },
    experience: {
      title: "Work Experience",
      subtitle: "My Career Path",
      experiences: [
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
            "Refactored and optimized code to reduce duplication and improve performance."
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "My Works",
      sourceCode: "Code Source",
      liveDemo: "Live Demo",
      list: [
        {
          title: "JobPT",
          role: "Fullstack Developer",
          techStack: ["React Native", "Django", "MySQL", "WebSocket"],
          description: "A mobile job application that allows users to search and apply for jobs, receive real-time notifications, chat with recruiters, and use premium job posting services.",
          githubUrl: "https://github.com/pmt2205/Django"
        },
        {
          title: "MovieHub",
          role: "Fullstack Developer",
          techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Socket"],
          description: "A movie ticket booking website with role-based authentication, seat selection, real-time seat updates, payment integration, reviews, ratings, and real-time chat.",
          githubUrl: "https://github.com/pmt2205/MovieHub"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Contact Me",
      connect: "Let's connect!",
      desc: "If you have any opportunities for a Fullstack Developer Fresher or would like to collaborate on a project, feel free to contact me via email or fill out the contact form. I will get back to you as soon as possible!",
      labels: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        submitting: "Sending..."
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        subject: "Collaboration opportunity",
        message: "Hi, I would like to discuss..."
      },
      success: {
        title: "Message Sent Successfully!",
        desc: "Thank you for reaching out. I will read your message and reply as soon as possible."
      }
    },
    footer: {
      rights: "All rights reserved.",
      top: "Scroll to top"
    }
  },
  vi: {
    navbar: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      contact: "Liên hệ",
      contactBtn: "Kết nối"
    },
    hero: {
      welcome: "Chào mừng bạn đến với trang cá nhân của tôi",
      headline: "Xin chào, tôi là",
      imA: "Tôi là một ",
      roles: [
        "Lập trình viên Fullstack",
        "Lập trình viên React / Next.js",
        "Người đam mê công nghệ",
        "Người thích giải quyết vấn đề"
      ],
      description: "Lập trình viên Fullstack mới vào nghề, đam mê xây dựng các ứng dụng web và di động cao cấp, tương tác tốt và tối ưu hiệu năng. Luôn hướng tới trải nghiệm người dùng hiện đại.",
      viewProjects: "Xem dự án",
      downloadCv: "Tải CV",
      contactMe: "Liên hệ"
    },
    about: {
      title: "Về bản thân",
      subtitle: "Hành trình của tôi",
      role: "Thực tập sinh Fullstack",
      stats: {
        intern: "Tháng thực tập",
        projects: "Dự án hoàn thành"
      },
      intro: "Tôi là lập trình viên web & di động tại Việt Nam.",
      bio1: "Là sinh viên năm cuối chuyên ngành CNTT, tôi đã dành phần lớn thời gian để học hỏi các công nghệ hiện đại và áp dụng vào các sản phẩm thực tế. Trong quá trình thực tập tại WisdomRobotics, tôi đã có cơ hội cọ xát thực tế khi xây dựng các ứng dụng web và di động Fullstack có khả năng mở rộng, viết code dễ bảo trì và làm việc theo quy trình chuyên nghiệp.",
      bio2: "Điểm mạnh cốt lõi của tôi là tinh thần ham học hỏi và khả năng thích ứng nhanh với các công nghệ mới. Dù là cấu hình cơ sở dữ liệu quan hệ, viết API RESTful, hay xây dựng giao diện frontend có tính tương tác cao và pixel-perfect, tôi đều hướng tới kiến trúc sạch và trải nghiệm người dùng cao cấp.",
      highlights: {
        education: {
          title: "Học vấn",
          desc: "Sinh viên năm cuối ngành Công nghệ thông tin."
        },
        role: {
          title: "Vai trò",
          desc: "Thực tập sinh / Lập trình viên Fullstack."
        },
        goal: {
          title: "Mục tiêu sự nghiệp",
          desc: "Hướng tới trở thành chuyên gia Kỹ thuật Fullstack."
        }
      }
    },
    skills: {
      title: "Kỹ năng chuyên môn",
      subtitle: "Bộ công cụ của tôi",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Cơ sở dữ liệu",
        tools: "Công cụ"
      }
    },
    experience: {
      title: "Kinh nghiệm làm việc",
      subtitle: "Con đường nghề nghiệp",
      experiences: [
        {
          company: "WisdomRobotics",
          position: "Thực tập sinh / Lập trình viên Fullstack",
          time: "Tháng 12/2025 - Tháng 04/2026",
          descriptions: [
            "Phát triển và bảo trì các ứng dụng web sử dụng ReactJS và Next.js.",
            "Xây dựng ứng dụng di động sử dụng React Native.",
            "Tích hợp các API RESTful và xử lý luồng truyền nhận dữ liệu frontend-backend.",
            "Triển khai luồng xác thực người dùng (authentication).",
            "Xây dựng các component có thể tái sử dụng để tăng tính bảo trì cho hệ thống.",
            "Nâng cao trải nghiệm người dùng bằng việc thiết lập các trạng thái loading, skeleton UI và tối ưu hóa phản hồi (optimistic updates).",
            "Tối ưu và cấu trúc lại mã nguồn nhằm giảm thiểu sự dư thừa dữ liệu và nâng cao hiệu suất."
          ]
        }
      ]
    },
    projects: {
      title: "Dự án nổi bật",
      subtitle: "Sản phẩm của tôi",
      sourceCode: "Mã nguồn",
      liveDemo: "Trực quan",
      list: [
        {
          title: "JobPT",
          role: "Lập trình viên Fullstack",
          techStack: ["React Native", "Django", "MySQL", "WebSocket"],
          description: "Ứng dụng di động tìm kiếm việc làm cho phép người dùng tìm kiếm và ứng tuyển công việc, nhận thông báo thời gian thực, trò chuyện trực tiếp với nhà tuyển dụng và sử dụng dịch vụ đăng bài tuyển dụng cao cấp.",
          githubUrl: "https://github.com/pmt2205/Django"
        },
        {
          title: "MovieHub",
          role: "Lập trình viên Fullstack",
          techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Socket"],
          description: "Trang web đặt vé xem phim trực tuyến tích hợp cơ chế phân quyền, chọn chỗ ngồi và cập nhật sơ đồ ghế thời gian thực, thanh toán trực tuyến, gửi phản hồi/đánh giá và nhắn tin trực tuyến.",
          githubUrl: "https://github.com/pmt2205/MovieHub"
        }
      ]
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Kết nối với tôi",
      connect: "Cùng kết nối nhé!",
      desc: "Nếu bạn đang có cơ hội việc làm cho Lập trình viên Fullstack Fresher hoặc muốn cùng phát triển dự án, hãy liên hệ với tôi qua email hoặc biểu mẫu liên hệ bên cạnh. Tôi sẽ phản hồi sớm nhất có thể!",
      labels: {
        name: "Tên của bạn",
        email: "Địa chỉ Email",
        subject: "Tiêu đề",
        message: "Nội dung",
        submit: "Gửi tin nhắn",
        submitting: "Đang gửi..."
      },
      placeholders: {
        name: "Nguyễn Văn A",
        email: "example@domain.com",
        subject: "Cơ hội hợp tác",
        message: "Xin chào, tôi muốn trao đổi về..."
      },
      success: {
        title: "Đã gửi tin nhắn thành công!",
        desc: "Cảm ơn bạn đã liên hệ. Tôi sẽ đọc tin nhắn và phản hồi lại bạn trong thời gian sớm nhất."
      }
    },
    footer: {
      rights: "Bản quyền đã được bảo lưu.",
      top: "Lên đầu trang"
    }
  }
};
