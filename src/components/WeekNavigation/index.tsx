//src/components/WeekNavigation/index.tsx
export const WeekNavigation: React.FC<{ currentDay: number; onDayChange: (day: number) => void }> = ({
  currentDay,
  onDayChange,
}) => {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    <nav className="mb-4 overflow-x-auto -mx-2 sm:-mx-4">
  <div className="flex space-x-2 p-2">
    {days.map((day, index) => (
      <button
        key={index}
        onClick={() => onDayChange(index)}
        className={`px-3 py-2 rounded-md whitespace-nowrap text-xs sm:text-sm font-medium transition-colors flex-shrink-0 ${
          currentDay === index
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {day}
      </button>
    ))}
  </div>
</nav>
  );
};