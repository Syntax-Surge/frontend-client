export function InputDefault({ placeholder, onChange }) {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div class='max-w-24 relative sm:max-w-32'>
        <input
          class='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-h-8
          sm:text-base'
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
