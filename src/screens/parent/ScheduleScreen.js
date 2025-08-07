import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Modal,
  StatusBar,
  Platform,
} from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");

const ScheduleScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);
  const [viewMode, setViewMode] = useState("week"); // week, day

  // Define status bar height based on platform
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  // Sample schedule data
  const scheduleData = {
    "2025-08-05": [
      {
        id: 1,
        subject: "Toán học",
        time: "07:30 - 08:15",
        teacher: "Cô Nguyễn Thị Hoa",
        room: "Phòng 101",
        type: "normal",
        status: "completed",
        homework: "Bài tập trang 45-47",
        notes: "Ôn tập phép nhân, phép chia",
      },
      {
        id: 2,
        subject: "Tiếng Việt",
        time: "08:15 - 09:00",
        teacher: "Cô Trần Thị Lan",
        room: "Phòng 102",
        type: "normal",
        status: "completed",
        homework: "Viết đoạn văn tả mẹ",
        notes: "Học bài thơ Tiếng gà trưa",
      },
      {
        id: 3,
        subject: "Tiếng Anh",
        time: "09:15 - 10:00",
        teacher: "Cô Sarah Johnson",
        room: "Phòng 103",
        type: "normal",
        status: "current",
        homework: "Unit 5 - Vocabulary",
        notes: "Practice speaking",
      },
      {
        id: 4,
        subject: "Khoa học",
        time: "10:00 - 10:45",
        teacher: "Thầy Lê Văn Nam",
        room: "Phòng 201",
        type: "normal",
        status: "upcoming",
        homework: "Đọc chương 3",
        notes: "Thí nghiệm về ánh sáng",
      },
      {
        id: 5,
        subject: "Thể dục",
        time: "14:00 - 14:45",
        teacher: "Thầy Phạm Minh Tuấn",
        room: "Sân thể thao",
        type: "physical",
        status: "upcoming",
        homework: "Không",
        notes: "Mang giày thể thao",
      },
    ],
    "2025-08-06": [
      {
        id: 6,
        subject: "Lịch sử",
        time: "07:30 - 08:15",
        teacher: "Cô Hoàng Thị Mai",
        room: "Phòng 104",
        type: "normal",
        status: "upcoming",
        homework: "Học bài 15",
        notes: "Chuẩn bị kiểm tra",
      },
      {
        id: 7,
        subject: "Địa lý",
        time: "08:15 - 09:00",
        teacher: "Thầy Nguyễn Văn Đức",
        room: "Phòng 105",
        type: "normal",
        status: "upcoming",
        homework: "Bản đồ châu Á",
        notes: "Mang atlas",
      },
    ],
  };

  const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const getCurrentWeek = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const week = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - currentDay + i);
      week.push(date);
    }
    return week;
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const getClassesForDate = (date) => {
    const dateStr = formatDate(date);
    return scheduleData[dateStr] || [];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#4CAF50";
      case "current":
        return "#2196F3";
      case "upcoming":
        return "#FF9800";
      default:
        return "#999";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Đã học";
      case "current":
        return "Đang học";
      case "upcoming":
        return "Sắp tới";
      default:
        return "";
    }
  };

  const getSubjectIcon = (subject) => {
    const icons = {
      "Toán học": "🔢",
      "Tiếng Việt": "📝",
      "Tiếng Anh": "🗣️",
      "Khoa học": "🔬",
      "Thể dục": "⚽",
      "Lịch sử": "📚",
      "Địa lý": "🌍",
      "Âm nhạc": "🎵",
      "Mỹ thuật": "🎨",
    };
    return icons[subject] || "📖";
  };

  const renderWeekView = () => {
    const week = getCurrentWeek();

    return (
      <View style={styles.weekContainer}>
        {/* Week Header */}
        <View style={styles.weekHeader}>
          {week.map((date, index) => {
            const isToday = formatDate(date) === formatDate(new Date());
            const isSelected = formatDate(date) === formatDate(selectedDate);
            const classes = getClassesForDate(date);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  isToday && styles.todayButton,
                  isSelected && styles.selectedDayButton,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dayName,
                    isToday && styles.todayText,
                    isSelected && styles.selectedDayText,
                  ]}
                >
                  {weekDays[index]}
                </Text>
                <Text
                  style={[
                    styles.dayNumber,
                    isToday && styles.todayText,
                    isSelected && styles.selectedDayText,
                  ]}
                >
                  {date.getDate()}
                </Text>
                {classes.length > 0 && (
                  <View style={styles.dayIndicator}>
                    <Text style={styles.dayIndicatorText}>
                      {classes.length}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Selected Day Classes */}
        <ScrollView style={styles.classesContainer}>
          <Text style={styles.selectedDateTitle}>
            {selectedDate.getDate()} {months[selectedDate.getMonth()]},{" "}
            {selectedDate.getFullYear()}
          </Text>
          {getClassesForDate(selectedDate).map((classItem) => (
            <TouchableOpacity
              key={classItem.id}
              style={styles.classCard}
              onPress={() => {
                setSelectedClass(classItem);
                setShowClassModal(true);
              }}
            >
              <View style={styles.classHeader}>
                <View style={styles.classLeft}>
                  <Text style={styles.classIcon}>
                    {getSubjectIcon(classItem.subject)}
                  </Text>
                  <View style={styles.classInfo}>
                    <Text style={styles.className}>{classItem.subject}</Text>
                    <Text style={styles.classTime}>{classItem.time}</Text>
                    <Text style={styles.classTeacher}>{classItem.teacher}</Text>
                  </View>
                </View>
                <View style={styles.classRight}>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(classItem.status) },
                    ]}
                  >
                    <Text style={styles.statusText}>
                      {getStatusText(classItem.status)}
                    </Text>
                  </View>
                  <Text style={styles.classRoom}>{classItem.room}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {getClassesForDate(selectedDate).length === 0 && (
            <View style={styles.noClassesContainer}>
              <Text style={styles.noClassesIcon}>📅</Text>
              <Text style={styles.noClassesText}>
                Không có lịch học hôm nay
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.mediumBlue} barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Lịch học</Text>
          <Text style={styles.headerSubtitle}>Quản lý thời khóa biểu</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={[
              styles.viewModeButton,
              viewMode === "week" && styles.activeViewMode,
            ]}
            onPress={() => setViewMode("week")}
          >
            <Text
              style={[
                styles.viewModeText,
                viewMode === "week" && styles.activeViewModeText,
              ]}
            >
              Tuần
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.viewModeButton,
              viewMode === "day" && styles.activeViewMode,
            ]}
            onPress={() => setViewMode("day")}
          >
            <Text
              style={[
                styles.viewModeText,
                viewMode === "day" && styles.activeViewModeText,
              ]}
            >
              Ngày
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Môn học</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Hôm nay</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Bài tập</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>{renderWeekView()}</View>

      {/* Class Detail Modal */}
      <Modal
        visible={showClassModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowClassModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedClass && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalIcon}>
                    {getSubjectIcon(selectedClass.subject)}
                  </Text>
                  <Text style={styles.modalTitle}>{selectedClass.subject}</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setShowClassModal(false)}
                  >
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modalContent}>
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Thời gian:</Text>
                    <Text style={styles.modalDetailValue}>
                      {selectedClass.time}
                    </Text>
                  </View>

                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Giáo viên:</Text>
                    <Text style={styles.modalDetailValue}>
                      {selectedClass.teacher}
                    </Text>
                  </View>

                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Phòng học:</Text>
                    <Text style={styles.modalDetailValue}>
                      {selectedClass.room}
                    </Text>
                  </View>

                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Trạng thái:</Text>
                    <View
                      style={[
                        styles.modalStatusBadge,
                        {
                          backgroundColor: getStatusColor(selectedClass.status),
                        },
                      ]}
                    >
                      <Text style={styles.modalStatusText}>
                        {getStatusText(selectedClass.status)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Bài tập:</Text>
                    <Text style={styles.modalDetailValue}>
                      {selectedClass.homework}
                    </Text>
                  </View>

                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Ghi chú:</Text>
                    <Text style={styles.modalDetailValue}>
                      {selectedClass.notes}
                    </Text>
                  </View>
                </View>

                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.modalActionButton}>
                    <Text style={styles.modalActionText}>Tham gia lớp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalActionButtonSecondary}>
                    <Text style={styles.modalActionTextSecondary}>
                      Xem bài tập
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: COLORS.mediumBlue,
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  headerActions: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  viewModeButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  activeViewMode: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  viewModeText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
  },
  activeViewModeText: {
    color: COLORS.mediumBlue,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: -15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: (width - 60) / 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.mediumBlue,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  weekContainer: {
    flex: 1,
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dayButton: {
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    minWidth: 45,
    position: "relative",
  },
  todayButton: {
    backgroundColor: "#E3F2FD",
  },
  selectedDayButton: {
    backgroundColor: COLORS.mediumBlue,
  },
  dayName: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
    marginBottom: 4,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  todayText: {
    color: COLORS.mediumBlue,
  },
  selectedDayText: {
    color: "white",
  },
  dayIndicator: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#FF4444",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  dayIndicatorText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  classesContainer: {
    flex: 1,
  },
  selectedDateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  classCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  classHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  classLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  classIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  classTime: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  classTeacher: {
    fontSize: 12,
    color: "#888",
  },
  classRight: {
    alignItems: "flex-end",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  classRoom: {
    fontSize: 12,
    color: "#666",
  },
  noClassesContainer: {
    alignItems: "center",
    padding: 40,
  },
  noClassesIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  noClassesText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: width - 40,
    maxWidth: 400,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  modalIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#666",
  },
  modalContent: {
    padding: 20,
  },
  modalDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  modalDetailLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    width: 80,
  },
  modalDetailValue: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  modalStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  modalStatusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  modalActions: {
    flexDirection: "row",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  modalActionButton: {
    backgroundColor: COLORS.mediumBlue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  modalActionText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  modalActionButtonSecondary: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
  },
  modalActionTextSecondary: {
    color: "#666",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ScheduleScreen;
