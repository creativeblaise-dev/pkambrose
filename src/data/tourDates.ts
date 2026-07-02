export interface TourDate {
  date: string
  month: string
  day: string
  year: string
  venue: string
  city: string
  country: string
  flagImg: string
  band: string
  ticketUrl?: string
  status: "upcoming" | "past"
}

export const tourDates: TourDate[] = [
  { date: "July 4, 2026", month: "JUL", day: "04", year: "2026", venue: "Womad", city: "Glasgow", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "July 9, 2026", month: "JUL", day: "09", year: "2026", venue: "BBC6 Session", city: "Manchester", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "July 23, 2026", month: "JUL", day: "23", year: "2026", venue: "San Sebastián", city: "San Sebastián", country: "Spain", flagImg: "/images/spain.png", band: "Ibibio", status: "upcoming" },
  { date: "July 31, 2026", month: "JUL", day: "31", year: "2026", venue: "Belgium/UK Festivals (Day 1/3)", city: "Belgium", country: "Belgium", flagImg: "/images/belgium.png", band: "Ibibio", status: "upcoming" },
  { date: "August 1, 2026", month: "AUG", day: "01", year: "2026", venue: "Belgium/UK Festivals (Day 2/3)", city: "Belgium", country: "Belgium", flagImg: "/images/belgium.png", band: "Ibibio", status: "upcoming" },
  { date: "August 2, 2026", month: "AUG", day: "02", year: "2026", venue: "Belgium/UK Festivals (Day 3/3)", city: "United Kingdom", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 2, 2026", month: "OCT", day: "02", year: "2026", venue: "Lantern", city: "Bristol", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 3, 2026", month: "OCT", day: "03", year: "2026", venue: "Clwb Ifor Bach", city: "Cardiff", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 7, 2026", month: "OCT", day: "07", year: "2026", venue: "Hare & Hounds", city: "Birmingham", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 9, 2026", month: "OCT", day: "09", year: "2026", venue: "Button Factory", city: "Dublin", country: "Ireland", flagImg: "/images/ireland.png", band: "Ibibio", status: "upcoming" },
  { date: "October 10, 2026", month: "OCT", day: "10", year: "2026", venue: "Future Yard", city: "Birkenhead", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 15, 2026", month: "OCT", day: "15", year: "2026", venue: "Concorde 2", city: "Brighton", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 16, 2026", month: "OCT", day: "16", year: "2026", venue: "Bossaphonik", city: "Oxford", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 22, 2026", month: "OCT", day: "22", year: "2026", venue: "Godfrey Civic Centre", city: "Newcastle", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 23, 2026", month: "OCT", day: "23", year: "2026", venue: "Liquid Rooms", city: "Edinburgh", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 24, 2026", month: "OCT", day: "24", year: "2026", venue: "Rescue Rooms", city: "Nottingham", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "October 25, 2026", month: "OCT", day: "25", year: "2026", venue: "Whitby Musicport Festival", city: "Whitby", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "November 7, 2026", month: "NOV", day: "07", year: "2026", venue: "Volvo Studio", city: "Milan", country: "Italy", flagImg: "/images/italy.png", band: "Ibibio", status: "upcoming" },
  { date: "November 20, 2026", month: "NOV", day: "20", year: "2026", venue: "Brudenell Social Club", city: "Leeds", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "November 21, 2026", month: "NOV", day: "21", year: "2026", venue: "Brudenell Social Club", city: "Leeds", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
  { date: "November 25, 2026", month: "NOV", day: "25", year: "2026", venue: "Islington Assembly Hall", city: "London", country: "United Kingdom", flagImg: "/images/united-kingdom.png", band: "Ibibio", status: "upcoming" },
]
