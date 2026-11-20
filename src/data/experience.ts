export type Job = {
  /** e.g. "Unity Game Developer" */
  role: string
  /** Studio or company name. */
  company: string
  /** Optional link to the studio's website or Play Store developer page. */
  companyUrl?: string
  /** e.g. "Lahore, Pakistan" or "Remote" */
  location?: string
  /** "Mon YYYY", e.g. "Jan 2022". Used to work out how long you were there. */
  start: string
  /** "Mon YYYY". Leave out for your current job; it shows "Present". */
  end?: string
  /** What you did there: systems built, results, responsibilities. */
  highlights?: string[]
  /** Engines, languages and SDKs you used there. */
  tech?: string[]
  /**
   * Games you shipped there. Use the exact titles from projects.ts and they
   * link to the Play Store automatically.
   */
  games?: string[]
}

export type Education = {
  degree: string
  school: string
  location?: string
  start: string
  end: string
  tech?: string[]
}

// Newest first.
export const experience: Job[] = [
  {
    role: "Senior Game Developer",
    company: "Terafort",
    location: "Islamabad, Pakistan · On-site",
    start: "Oct 2022",
    tech: ["Unity 3D", "C#"],
  },
  {
    role: "Junior Unity 3D Developer",
    company: "The Knights",
    location: "Rawalpindi, Pakistan",
    start: "May 2021",
    end: "Sep 2022",
    tech: ["Unity 3D", "C#"],
  },
  {
    role: "Unity 3D Developer Intern",
    company: "The Knights",
    start: "Feb 2021",
    end: "Apr 2021",
    tech: ["Unity 3D", "C#"],
  },
]

export const education: Education[] = [
  {
    degree: "BS Computer Science",
    school: "Arid Agriculture University",
    start: "2016",
    end: "2020",
    tech: ["Android Studio", "Android Development"],
  },
]
