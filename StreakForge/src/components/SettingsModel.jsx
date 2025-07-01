import React, { useState } from "react";

const SettingsModal = ({ initialSettings, onClose, onSave }) => {
  const [durations, setDurations] = useState(initialSettings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDurations((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  const handleSave = () => {
    onSave(durations);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-xl w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">⏱️ Timer Settings</h2>

        <div className="space-y-4">
          {["focus", "break", "rest"].map((mode) => (
            <div key={mode} className="flex justify-between items-center">
              <label htmlFor={mode} className="capitalize font-medium text-gray-300">
                {mode} duration (minutes):
              </label>
              <input
                type="number"
                id={mode}
                name={mode}
                value={durations[mode]}
                onChange={handleChange}
                className="w-20 px-2 py-1 bg-gray-700 text-white border border-gray-600 rounded text-center"
                min="1"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
