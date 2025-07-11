import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarBookingProps {
  selectedDate: string;
  selectedTime: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

export default function CalendarBooking({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: CalendarBookingProps) {
  const currentDate = new Date();
  const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());
  const [displayYear, setDisplayYear] = useState(currentDate.getFullYear());

  // Generate calendar days for display month
  const getDaysInMonth = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const days = getDaysInMonth(displayMonth, displayYear);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = [
    "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const handleDateSelect = (day: number) => {
    const dateStr = `${displayYear}-${String(displayMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    onDateSelect(dateStr);
  };

  const isDateSelected = (day: number) => {
    const dateStr = `${displayYear}-${String(displayMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return selectedDate === dateStr;
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    const checkDate = new Date(displayYear, displayMonth, day);
    return checkDate < today;
  };

  const goToPreviousMonth = () => {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  const canGoToPreviousMonth = () => {
    const today = new Date();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    if (displayYear > todayYear) return true;
    if (displayYear === todayYear && displayMonth > todayMonth) return true;
    return false;
  };

  return (
    <div>
      <h4 className="font-semibold text-neutral-900 mb-4">Select Date & Time</h4>
      <Card>
        <CardContent className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousMonth}
              disabled={!canGoToPreviousMonth()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h5 className="font-medium text-neutral-900">
              {monthNames[displayMonth]} {displayYear}
            </h5>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-neutral-600 py-2">
                {day}
              </div>
            ))}
            
            {days.map((day, index) => (
              <div key={index} className="text-center">
                {day ? (
                  <Button
                    variant={isDateSelected(day) ? "default" : "ghost"}
                    size="sm"
                    className={`w-8 h-8 p-0 ${
                      isPastDate(day) 
                        ? "text-neutral-400 cursor-not-allowed hover:bg-transparent" 
                        : "hover:bg-primary hover:text-white"
                    }`}
                    onClick={() => handleDateSelect(day)}
                    disabled={isPastDate(day)}
                  >
                    {day}
                  </Button>
                ) : (
                  <div className="w-8 h-8" />
                )}
              </div>
            ))}
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="border-t border-neutral-200 pt-4">
              <p className="text-sm font-medium text-neutral-900 mb-3">Available Times (EST)</p>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => onTimeSelect(time)}
                    className="text-sm"
                  >
                    {time === "10:00" ? "10:00 AM" :
                     time === "11:00" ? "11:00 AM" :
                     time === "14:00" ? "2:00 PM" :
                     time === "15:00" ? "3:00 PM" :
                     time === "16:00" ? "4:00 PM" :
                     "5:00 PM"}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
