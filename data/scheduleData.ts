export interface ScheduleEvent {
  id: string;
  day: number;
  date: string;
  weekday: string;
  title: string;
  venue: string;
  speaker?: string;
  format: "Keynote" | "Workshop" | "Hackathon" | "Panel" | "Talk" | "Ceremony";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  prerequisites?: string;
}

export interface DayTab {
  id: number;
  label: string;
  date: string;
}

export const scheduleEvents: ScheduleEvent[] = [
  // Day 1
  {
    id: "d1-e1",
    day: 1,
    date: "October 9, 2026",
    weekday: "Friday",
    title: "Opening Ceremony & Hackathon Launch",
    venue: "LHC",
    speaker: "EECS & Physics Clubs Organizing Committee",
    format: "Ceremony",
    level: "All Levels",
    description:
      "Event introduction, quantum circuit simulator demo, and official hackathon problem statement release.",
    prerequisites: "Open to all students, researchers, and faculty.",
  },

  // Day 2
  {
    id: "d2-e1",
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    title: "Elementary Qiskit Workshop",
    venue: "LHC",
    speaker: "Workshop Technical Instructors",
    format: "Workshop",
    level: "Beginner",
    description:
      "Hands-on workshop covering Qiskit fundamentals and quantum computing execution on simulators and real IBM Quantum hardware via cloud.",
    prerequisites: "Laptop with Python 3.10+ and Jupyter Notebook installed.",
  },
  {
    id: "d2-e2",
    day: 2,
    date: "October 10, 2026",
    weekday: "Saturday",
    title: "Student Talk I",
    venue: "LHC",
    speaker: "IISER Bhopal Student Presenters",
    format: "Talk",
    level: "Intermediate",
    description:
      "Technical presentations and research sharing by student presenters on quantum computing, algorithms, and quantum info.",
    prerequisites: "General interest in quantum computing.",
  },

  // Day 3
  {
    id: "d3-e1",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    title: "Advanced Qiskit Workshop",
    venue: "Multimedia Room",
    speaker: "Quantum Specialists",
    format: "Workshop",
    level: "Advanced",
    description:
      "In-depth technical workshop covering advanced quantum computing topics including VQE, error mitigation, and parameterized circuits.",
    prerequisites: "Familiarity with elementary Qiskit concepts.",
  },
  {
    id: "d3-e2",
    day: 3,
    date: "October 11, 2026",
    weekday: "Sunday",
    title: "Keynote & Panel Discussion",
    venue: "LHC",
    speaker: "Guest Speaker & Faculty Panel",
    format: "Panel",
    level: "All Levels",
    description:
      "Expert talk by an external guest speaker followed by an interactive panel discussion with faculty on quantum research frontiers.",
    prerequisites: "Open to all registered attendees.",
  },

  // Day 4
  {
    id: "d4-e1",
    day: 4,
    date: "October 17, 2026",
    weekday: "Saturday",
    title: "Student Talk II & Keynote",
    venue: "LHC",
    speaker: "Student Presenters & Guest Speaker",
    format: "Talk",
    level: "Intermediate",
    description:
      "Student research presentations followed by a session with an external guest speaker on quantum algorithms and noisy intermediate-scale systems.",
    prerequisites: "Open to all attendees.",
  },

  // Day 5
  {
    id: "d5-e1",
    day: 5,
    date: "October 18, 2026",
    weekday: "Sunday",
    title: "Guest Speaker Session",
    venue: "LHC",
    speaker: "Invited External Guest Speaker",
    format: "Keynote",
    level: "All Levels",
    description:
      "Expert lecture delivered by an external guest speaker on quantum software architectures and industry quantum advantage.",
    prerequisites: "Open to all registered attendees.",
  },
  {
    id: "d5-e2",
    day: 5,
    date: "October 18, 2026",
    weekday: "Sunday",
    title: "Hackathon Presentations & Closing Ceremony",
    venue: "LHC",
    speaker: "Finalist Teams, Jury Panel & Organizers",
    format: "Hackathon",
    level: "All Levels",
    description:
      "Final project presentations by hackathon participants, interactive quantum games, and the official closing ceremony with prize distribution.",
    prerequisites: "Hackathon participants and general attendees.",
  },
];

export const dayTabs: DayTab[] = [
  { id: 0, label: "All Days", date: "Oct 9 - 18" },
  { id: 1, label: "Day 1", date: "Oct 9" },
  { id: 2, label: "Day 2", date: "Oct 10" },
  { id: 3, label: "Day 3", date: "Oct 11" },
  { id: 4, label: "Day 4", date: "Oct 17" },
  { id: 5, label: "Day 5", date: "Oct 18" },
];
