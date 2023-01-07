import React, {useState } from 'react';
import { MdDeleteForever, MdClose } from "react-icons/md";
import { useStateContext } from '../../contexts/ContextProvider';

const EventModal = () => {
    const {daySelected, setShowEventModal, dispatchCalEvent, selectedEvent} = useStateContext();
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");

    const handleSubmit = (e) => {
        // cancel default method
        e.preventDefault();
        const calendarEvent = {
          title: title,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
          dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
          dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        setShowEventModal(false);
      };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="px-4 py-2 flex justify-end">
          <div className="text-gray-400">
            {selectedEvent && (
              <button
              className='w-10 bg-red-500 mr-1'
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <MdDeleteForever className='w-9'/>
              </button>
            )}
            <button onClick={() => setShowEventModal(false)} className="w-10 bg-green-500">
              <MdClose className='w-9'/>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div> 
              <h1 className='font-semibold text-xl'>Enter your recipe</h1>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Add Recipe"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 "
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{daySelected.format("dddd, MMMM DD")}</p>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-800 px-6 py-2 rounded text-white flex"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  )
}

export default EventModal