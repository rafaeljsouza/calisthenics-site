export const WeekNavigation: React.FC<{ currentDay: number; onDayChange: (day: number) => void }> = ({
    currentDay,
    onDayChange,
  }) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
    return (
      <nav className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 p-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => onDayChange(index)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
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
