"use client";

export function Portfolio() {

  const achievements = [
    //finished
    {
      "name": "Samsung Solve for Tomorrow",
      "staus": "3rd Place",
      "year": 2025
    },
    {
      "name": "Huawei Tech4City",
      "staus": "Semi Finals",
      "year": 2025
    },
    {
      "name": "Singapore Poly Hackathon",
      "staus": "Semi Finals",
      "year": 2025
    },

    // Upcoming
    {
      "name": "Samsung Solve for Tomorrow",
      "staus": "Upcoming",
      "year": 2026
    },
    {
      "name": "Huawei Tech4City",
      "staus": "Upcoming",
      "year": 2026
    },
    {
      "name": "World Robotics Omypiad (US)",
      "staus": "Upcoming",
      "year": 2026
    },
    {
      "name": "National Robotics Competition",
      "staus": "Upcoming",
      "year": 2026
    },
    {
      "name": "Tan Kah Kee Young Inventors Award",
      "staus": "Upcoming",
      "year": 2026
    }
  ]

  return (
    <div className="px-8 py-32">
      <h3 className="text-6xl font-bold text-font-primary mb-12">Portfolio</h3>

      <div className="grid grid-cols-1 gap-3 pb-4">
        {achievements.map((competition, index) => (
          <div key={index} className="flex justify-between gap-3 pb-3 px-3 border-b border-gray-300 last:border-0 w-full">

            <span className="flex gap-4">
              <span className="text-font-secondary text-md font-semibold">{competition.year}</span>
              <span className="text-font-secondary text-md">{competition.name}</span>
            </span>

            <div className={` py-1 px-3 max-h-min whitespace-nowrap w-fit text-xs ${competition.staus === "Upcoming" ? "bg-amber-500/25" : "bg-green-500/25"} rounded-full`}>{competition.staus}</div>
          </div>
        ))}
      </div>

    </div>
  );
}