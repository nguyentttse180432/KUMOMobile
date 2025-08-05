// Common data file for KUMO Classroom Mobile App

// Children data
export const childrenData = [
  {
    id: 1,
    name: "Nguyễn Minh An",
    nickname: "Bé Minh An",
    age: 7,
    class: "Lớp 2A",
    avatar: "👦",
    grade: "9.0",
    attendance: "95%",
    points: "250",
    school: "Tiểu học Trần Phú",
    status: "active",
    lastActivity: "2 giờ trước",
    subjects: 6,
    homework: 2,
    messages: 1,
    achievements: ["Học sinh giỏi", "Kỹ năng Xã hội"],
    nextClass: "Toán - 8:00",
    teacherFeedback: [
      {
        teacher: "Cô Nguyễn Thị Hoa",
        subject: "Toán học",
        date: "05/07/2025",
        content:
          "An là học sinh ngoan, chăm chỉ học tập. Em đã học thuộc bảng cộng trừ đến số 20 và biết đếm đến 100. Cần luyện tập thêm để làm các bài tập nhanh hơn.",
        rating: 4,
      },
      {
        teacher: "Cô Trần Thị Mai",
        subject: "Tiếng Việt",
        date: "03/07/2025",
        content:
          "An có khả năng đọc chữ tốt, biết ghép vần và đọc đúng các từ đơn giản. Cần luyện tập thêm để đọc thành thạo và viết đẹp hơn.",
        rating: 4,
      },
      {
        teacher: "Cô Lê Thị Hương",
        subject: "Tiếng Anh",
        date: "02/07/2025",
        content:
          "An biết hát một số bài hát tiếng Anh đơn giản và nhớ các từ vựng cơ bản về màu sắc, con số, và đồ vật trong lớp học.",
        rating: 3,
      },
    ],
    subjects: [
      {
        name: "Toán học",
        grade: "9.0",
        teacher: "Cô Nguyễn Thị Hoa",
        lastHomework: "Học đếm số",
        homeworkDetail: {
          title: "Bài tập đếm số",
          description: "Đếm và viết số từ 1 đến 50",
          dueDate: "10/07/2025",
          submissionDate: "07/07/2025",
          score: "9/10",
          teacherComment:
            "Bài làm rất tốt, cần cẩn thận hơn khi viết số 6 và số 9",
          studentWork:
            "Em đã đếm và viết đúng hầu hết các số từ 1 đến 50. Em còn nhầm lẫn một chút giữa số 6 và số 9.",
          studentImages: [
            "https://i.imgur.com/LPwT0gR.jpg",
            "https://i.imgur.com/mMZOJgS.jpg",
          ],
        },
      },
      {
        name: "Tiếng Việt",
        grade: "9.0",
        teacher: "Cô Trần Thị Mai",
        lastHomework: "Tập đọc chữ cái",
        homeworkDetail: {
          title: "Tập đọc chữ cái",
          description: "Luyện đọc các chữ cái và ghép vần đơn giản",
          dueDate: "08/07/2025",
          submissionDate: "07/07/2025",
          score: "9/10",
          teacherComment:
            "Con đọc khá tốt, cần luyện tập thêm các vần khó như: ưa, ươ, uô.",
          studentWork:
            "Em đã đọc đúng hầu hết các chữ cái và vần đơn giản. Em vẫn còn đọc lẫn lộn một số vần khó.",
          studentImages: [
            "https://i.imgur.com/fVtrJce.jpg",
            "https://i.imgur.com/1Yytqdk.jpg",
            "https://i.imgur.com/YwcLcBO.jpg",
          ],
        },
      },
      {
        name: "Tiếng Anh",
        grade: "8.5",
        teacher: "Cô Lê Thị Hương",
        lastHomework: "Học từ vựng cơ bản",
        homeworkDetail: {
          title: "Học từ vựng cơ bản",
          description: "Học 10 từ vựng về màu sắc và đồ vật trong lớp học",
          dueDate: "09/07/2025",
          submissionDate: "08/07/2025",
          score: "8/10",
          teacherComment:
            "Con đã học được hầu hết các từ vựng. Cần luyện phát âm thêm các từ: pencil, eraser.",
          studentWork:
            "Em đã học được 8/10 từ vựng. Em nhớ rõ các màu sắc: red, blue, yellow, green và một số đồ vật: book, pen.",
          studentImages: [
            "https://i.imgur.com/5QrJn9S.jpg",
            "https://i.imgur.com/gKj8hPY.jpg",
          ],
        },
      },
    ],
  },
  {
    id: 2,
    name: "Nguyễn Minh Anh",
    nickname: "Bé Minh Anh",
    age: 9,
    class: "Lớp 4B",
    avatar: "👧",
    grade: "9.5",
    attendance: "98%",
    points: "320",
    school: "Tiểu học Lê Quý Đôn",
    status: "active",
    lastActivity: "1 giờ trước",
    subjects: 6,
    homework: 1,
    messages: 0,
    achievements: ["Học sinh xuất sắc", "Thể thao"],
    nextClass: "Tiếng Việt - 9:30",
    teacherFeedback: [
      {
        teacher: "Cô Nguyễn Thị Hoa",
        subject: "Toán học",
        date: "05/07/2025",
        content:
          "Anh là học sinh thông minh, nhanh nhẹn. Em đã thành thạo phép cộng trừ trong phạm vi 100 và đang học tốt phép nhân chia đơn giản.",
        rating: 5,
      },
      {
        teacher: "Cô Trần Thị Mai",
        subject: "Tiếng Việt",
        date: "03/07/2025",
        content:
          "Anh đọc rất tốt và biết viết cơ bản. Em có vốn từ vựng khá và thích kể chuyện cho các bạn nghe. Tiếp tục phát huy nhé.",
        rating: 5,
      },
      {
        teacher: "Cô Lê Thị Hương",
        subject: "Tiếng Anh",
        date: "02/07/2025",
        content:
          "Anh tích cực tham gia các hoạt động tiếng Anh trên lớp. Em có thể giới thiệu bản thân và gia đình bằng tiếng Anh rất tốt.",
        rating: 4,
      },
    ],
    subjects: [
      {
        name: "Toán học",
        grade: "9.5",
        teacher: "Cô Nguyễn Thị Hoa",
        lastHomework: "Phép cộng trừ",
        homeworkDetail: {
          title: "Bài tập phép cộng trừ",
          description: "Làm các bài tập cộng trừ trong phạm vi 100",
          dueDate: "10/07/2025",
          submissionDate: "06/07/2025",
          score: "10/10",
          teacherComment: "Bài làm xuất sắc, em làm đúng tất cả các phép tính",
          studentWork:
            "Em đã làm đúng tất cả các phép cộng trừ. Em thích nhất các bài toán có hình ảnh minh họa.",
          studentImages: [
            "https://i.imgur.com/LPwT0gR.jpg",
            "https://i.imgur.com/mMZOJgS.jpg",
          ],
        },
      },
      {
        name: "Tiếng Việt",
        grade: "9.5",
        teacher: "Cô Trần Thị Mai",
        lastHomework: "Tập viết câu ngắn",
        homeworkDetail: {
          title: "Tập viết câu ngắn",
          description: "Viết 5 câu ngắn về gia đình hoặc thú cưng yêu thích",
          dueDate: "08/07/2025",
          submissionDate: "05/07/2025",
          score: "10/10",
          teacherComment:
            "Bài viết rất hay và sạch sẽ. Chữ viết đẹp và đúng chính tả. Cô rất vui khi đọc bài của con.",
          studentWork:
            "Em đã viết được 5 câu về gia đình và con mèo của em. Em thích nhất câu 'Con mèo của em thích ăn cá và uống sữa'.",
          studentImages: [
            "https://i.imgur.com/fVtrJce.jpg",
            "https://i.imgur.com/1Yytqdk.jpg",
            "https://i.imgur.com/YwcLcBO.jpg",
          ],
        },
      },
      {
        name: "Tiếng Anh",
        grade: "9.0",
        teacher: "Cô Lê Thị Hương",
        lastHomework: "Hội thoại đơn giản",
        homeworkDetail: {
          title: "Hội thoại đơn giản",
          description:
            "Học và thực hành 5 câu hội thoại chào hỏi bằng tiếng Anh",
          dueDate: "09/07/2025",
          submissionDate: "07/07/2025",
          score: "9/10",
          teacherComment:
            "Con nói rất tốt và tự tin. Phát âm khá chuẩn và nhớ tốt các câu hội thoại.",
          studentWork:
            "Em đã học và thực hành tốt các câu: 'Hello, my name is...', 'How are you?', 'I'm fine, thank you', 'Nice to meet you', 'Goodbye'.",
          studentImages: [
            "https://i.imgur.com/5QrJn9S.jpg",
            "https://i.imgur.com/gKj8hPY.jpg",
          ],
        },
      },
    ],
  },
];

// Parent data
export const parentData = {
  id: "parent",
  name: "Nguyễn Minh Ánh",
  type: "parent",
  avatar: "👨‍👩‍👧‍👦",
};

// Account data for switcher screen
export const accountsData = [
  {
    id: "parent",
    name: "Nguyễn Minh Ánh",
    type: "parent",
    avatar: "👨‍👩‍👧‍👦",
  },
  {
    id: "1",
    name: "Nguyễn Minh An",
    age: 7,
    grade: "Lớp 2A",
    type: "child",
    avatar: "👦",
  },
  {
    id: "2",
    name: "Nguyễn Minh Anh",
    age: 9,
    grade: "Lớp 4B",
    type: "child",
    avatar: "👧",
  },
];

// Recent activities for parent dashboard
export const recentActivitiesData = [
  {
    id: 1,
    title: "Học đếm số",
    child: "Minh An",
    time: "2 giờ trước",
    type: "exam",
    score: "9.0",
  },
  {
    id: 2,
    title: "Nộp bài tập đọc",
    child: "Minh Anh",
    time: "1 ngày trước",
    type: "homework",
    status: "completed",
  },
  {
    id: 3,
    title: "Tin nhắn từ cô giáo",
    child: "Minh An",
    time: "2 ngày trước",
    type: "message",
    unread: true,
  },
];

// Quick actions for parent dashboard
export const quickActionsData = [
  {
    id: 1,
    title: "Theo dõi điểm số",
    icon: "📊",
    color: "#4CAF50",
    screen: "GradeTracking",
  },
  {
    id: 2,
    title: "Lịch học",
    icon: "📅",
    color: "#2196F3",
    screen: "Schedule",
  },
  {
    id: 3,
    title: "Tin nhắn",
    icon: "💬",
    color: "#FF9800",
    screen: "Messages",
  },
  {
    id: 4,
    title: "Báo cáo",
    icon: "📋",
    color: "#9C27B0",
    screen: "Reports",
  },
];

// Assignments data for students
export const assignmentsData = {
  // Assignments for Minh An (id: 1)
  1: [
    {
      id: "1",
      title: "Bài tập đếm số",
      subject: "Toán học",
      dueDate: "10/07/2025",
      isCompleted: false,
      emoji: "🔢",
      color: "#89B3D6",
      teacher: "Cô Nguyễn Thị Hoa",
      description: "Đếm và viết số từ 1 đến 50",
      priority: "high",
    },
    {
      id: "2",
      title: "Tập đọc chữ cái",
      subject: "Tiếng Việt",
      dueDate: "08/07/2025",
      isCompleted: false,
      emoji: "📚",
      color: "#7AACA8",
      teacher: "Cô Trần Thị Mai",
      description: "Luyện đọc các chữ cái và ghép vần đơn giản",
      priority: "medium",
    },
    {
      id: "3",
      title: "Học từ vựng cơ bản",
      subject: "Tiếng Anh",
      dueDate: "09/07/2025",
      isCompleted: true,
      emoji: "🌍",
      color: "#77A9C6",
      teacher: "Cô Lê Thị Hương",
      description: "Học 10 từ vựng về màu sắc và đồ vật trong lớp học",
      priority: "medium",
    },
    {
      id: "4",
      title: "Vẽ tranh gia đình",
      subject: "Mỹ Thuật",
      dueDate: "12/07/2025",
      isCompleted: false,
      emoji: "🎨",
      color: "#C3B59F",
      teacher: "Cô Hồng",
      description: "Vẽ một bức tranh về gia đình em",
      priority: "low",
    },
  ],
  // Assignments for Minh Anh (id: 2)
  2: [
    {
      id: "1",
      title: "Bài tập phép cộng trừ",
      subject: "Toán học",
      dueDate: "10/07/2025",
      isCompleted: false,
      emoji: "🔢",
      color: "#89B3D6",
      teacher: "Cô Nguyễn Thị Hoa",
      description: "Làm các bài tập cộng trừ trong phạm vi 100",
      priority: "high",
    },
    {
      id: "2",
      title: "Tập viết câu ngắn",
      subject: "Tiếng Việt",
      dueDate: "08/07/2025",
      isCompleted: true,
      emoji: "📚",
      color: "#7AACA8",
      teacher: "Cô Trần Thị Mai",
      description: "Viết 5 câu ngắn về gia đình hoặc thú cưng yêu thích",
      priority: "medium",
    },
    {
      id: "3",
      title: "Hội thoại đơn giản",
      subject: "Tiếng Anh",
      dueDate: "09/07/2025",
      isCompleted: false,
      emoji: "🌍",
      color: "#77A9C6",
      teacher: "Cô Lê Thị Hương",
      description: "Học và thực hành 5 câu hội thoại chào hỏi bằng tiếng Anh",
      priority: "medium",
    },
    {
      id: "4",
      title: "Nghiên cứu khoa học",
      subject: "Khoa học",
      dueDate: "15/07/2025",
      isCompleted: false,
      emoji: "🔬",
      color: "#A4B8C4",
      teacher: "Thầy Tuấn",
      description: "Làm thí nghiệm đơn giản về nước",
      priority: "high",
    },
    {
      id: "5",
      title: "Lịch sử địa phương",
      subject: "Lịch sử",
      dueDate: "14/07/2025",
      isCompleted: false,
      emoji: "🏯",
      color: "#B6A4B8",
      teacher: "Cô Hà",
      description: "Tìm hiểu về lịch sử địa phương em đang sống",
      priority: "low",
    },
  ],
};
